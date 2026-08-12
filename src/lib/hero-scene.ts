import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  BufferGeometry,
  BufferAttribute,
  LineBasicMaterial,
  LineSegments,
  Points,
  PointsMaterial,
  Group,
  FogExp2,
  Color,
  AdditiveBlending,
} from 'three';

const NODE_COUNT = 150;
const MAX_LINK_DIST = 3.4;
const MAX_LINKS_PER_NODE = 3;
const FIELD_RADIUS = 9;

interface Node {
  x: number;
  y: number;
  z: number;
  hub: boolean;
}

function buildNodes(count: number): Node[] {
  const nodes: Node[] = [];
  for (let i = 0; i < count; i++) {
    // Distribute inside a flattened ellipsoid so the graph reads wide
    // rather than a perfect sphere.
    const r = FIELD_RADIUS * Math.cbrt(Math.random());
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    nodes.push({
      x: r * Math.sin(phi) * Math.cos(theta),
      y: r * Math.sin(phi) * Math.sin(theta) * 0.55,
      z: r * Math.cos(phi) * 0.7,
      hub: Math.random() < 0.06,
    });
  }
  return nodes;
}

function buildLinks(nodes: Node[]): [number, number][] {
  const links: [number, number][] = [];
  const linkCount = new Array(nodes.length).fill(0);

  for (let i = 0; i < nodes.length; i++) {
    if (linkCount[i] >= MAX_LINKS_PER_NODE) continue;
    let best: { j: number; d: number }[] = [];

    for (let j = i + 1; j < nodes.length; j++) {
      if (linkCount[j] >= MAX_LINKS_PER_NODE) continue;
      const dx = nodes[i].x - nodes[j].x;
      const dy = nodes[i].y - nodes[j].y;
      const dz = nodes[i].z - nodes[j].z;
      const d = Math.sqrt(dx * dx + dy * dy + dz * dz);
      if (d < MAX_LINK_DIST) best.push({ j, d });
    }

    best.sort((a, b) => a.d - b.d);
    const slots = MAX_LINKS_PER_NODE - linkCount[i];
    for (const { j } of best.slice(0, slots)) {
      links.push([i, j]);
      linkCount[i]++;
      linkCount[j]++;
    }
  }

  return links;
}

export function initHeroScene(canvas: HTMLCanvasElement, container: HTMLElement) {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const scene = new Scene();
  scene.fog = new FogExp2(0x05070f, 0.045);

  const camera = new PerspectiveCamera(50, 1, 0.1, 100);
  camera.position.set(0, 0.4, 13);

  const renderer = new WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setClearColor(0x000000, 0);

  const group = new Group();
  scene.add(group);

  const nodes = buildNodes(NODE_COUNT);
  const links = buildLinks(nodes);

  // --- Nodes -------------------------------------------------------------
  const nodePositions = new Float32Array(nodes.length * 3);
  const nodeColors = new Float32Array(nodes.length * 3);
  const primary = new Color(0x7d95ff);
  const accent = new Color(0xffb020);

  nodes.forEach((n, i) => {
    nodePositions[i * 3] = n.x;
    nodePositions[i * 3 + 1] = n.y;
    nodePositions[i * 3 + 2] = n.z;
    const c = n.hub ? accent : primary;
    nodeColors[i * 3] = c.r;
    nodeColors[i * 3 + 1] = c.g;
    nodeColors[i * 3 + 2] = c.b;
  });

  const nodeGeometry = new BufferGeometry();
  nodeGeometry.setAttribute('position', new BufferAttribute(nodePositions, 3));
  nodeGeometry.setAttribute('color', new BufferAttribute(nodeColors, 3));

  const nodeMaterial = new PointsMaterial({
    size: 0.09,
    vertexColors: true,
    transparent: true,
    opacity: 0.9,
    sizeAttenuation: true,
    blending: AdditiveBlending,
    depthWrite: false,
  });

  const points = new Points(nodeGeometry, nodeMaterial);
  group.add(points);

  // --- Links ---------------------------------------------------------------
  const linkPositions = new Float32Array(links.length * 6);
  links.forEach(([a, b], i) => {
    linkPositions[i * 6] = nodes[a].x;
    linkPositions[i * 6 + 1] = nodes[a].y;
    linkPositions[i * 6 + 2] = nodes[a].z;
    linkPositions[i * 6 + 3] = nodes[b].x;
    linkPositions[i * 6 + 4] = nodes[b].y;
    linkPositions[i * 6 + 5] = nodes[b].z;
  });

  const linkGeometry = new BufferGeometry();
  linkGeometry.setAttribute('position', new BufferAttribute(linkPositions, 3));

  const linkMaterial = new LineBasicMaterial({
    color: 0x2a3a9a,
    transparent: true,
    opacity: 0.35,
  });

  const lines = new LineSegments(linkGeometry, linkMaterial);
  group.add(lines);

  // --- Resize --------------------------------------------------------------
  function resize() {
    const { clientWidth, clientHeight } = container;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(clientWidth, clientHeight, false);
    camera.aspect = clientWidth / clientHeight;
    camera.updateProjectionMatrix();
  }
  resize();

  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(container);

  // --- Interaction (parallax) ----------------------------------------------
  let pointerX = 0;
  let pointerY = 0;
  let targetRotX = 0;
  let targetRotY = 0;

  function onPointerMove(e: PointerEvent) {
    const rect = container.getBoundingClientRect();
    pointerX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    pointerY = ((e.clientY - rect.top) / rect.height) * 2 - 1;
  }
  window.addEventListener('pointermove', onPointerMove, { passive: true });

  // --- Visibility gating (pause when scrolled out of view) -----------------
  let isVisible = true;
  const observer = new IntersectionObserver(
    (entries) => {
      isVisible = entries[0]?.isIntersecting ?? true;
    },
    { threshold: 0 },
  );
  observer.observe(container);

  // --- Animation loop --------------------------------------------------------
  let rafId = 0;
  let running = true;
  const clock = { start: performance.now() };

  function animate() {
    if (!running) return;
    rafId = requestAnimationFrame(animate);
    if (!isVisible) return;

    const t = (performance.now() - clock.start) / 1000;
    const speed = prefersReducedMotion ? 0.02 : 0.06;

    targetRotY = pointerX * (prefersReducedMotion ? 0.08 : 0.35);
    targetRotX = -pointerY * (prefersReducedMotion ? 0.05 : 0.2);

    group.rotation.y += (t * speed - group.rotation.y + targetRotY) * 0.02;
    group.rotation.x += (Math.sin(t * 0.15) * 0.08 + targetRotX - group.rotation.x) * 0.02;

    renderer.render(scene, camera);
  }
  animate();

  return function destroy() {
    running = false;
    cancelAnimationFrame(rafId);
    resizeObserver.disconnect();
    observer.disconnect();
    window.removeEventListener('pointermove', onPointerMove);
    nodeGeometry.dispose();
    nodeMaterial.dispose();
    linkGeometry.dispose();
    linkMaterial.dispose();
    renderer.dispose();
  };
}
