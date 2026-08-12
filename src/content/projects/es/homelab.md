---
groupId: 'homelab'
lang: 'es'
title: 'Homelab as Code'
tagline: 'Todo mi homelab, definido y desplegado desde Git'
description: >-
  Infraestructura y servicios de mi homelab, gestionados como código:
  reproducibles, declarativos y desplegados automáticamente.
role: 'Diseño y desarrollo en solitario'
year: '2025—presente'
status: 'wip'
tags: ['Infraestructura', 'DevOps', 'Homelab']
stack:
  [
    'Proxmox',
    'Terraform',
    'Ansible',
    'K3s',
    'Argo CD',
    'Docker',
    'Prometheus',
    'Grafana',
    'Traefik',
  ]
links:
  github: 'https://github.com/JSisques/homelab'
featured: true
order: 1
---

Todo mi homelab —máquinas virtuales, contenedores LXC, servicios y
monitorización— vive en un único repositorio y se despliega de forma
declarativa desde cero.

Terraform aprovisiona cada VM y LXC sobre Proxmox a partir de un inventario
declarado en YAML; Ansible configura cada host y despliega cada servicio; un
clúster K3s con Argo CD gestiona las cargas de trabajo de Kubernetes; y una
pila de observabilidad completa (Prometheus, Grafana, Loki, Alertmanager)
vigila que todo siga funcionando.

Este mismo portfolio corre sobre esa infraestructura.
