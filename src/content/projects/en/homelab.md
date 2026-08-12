---
groupId: 'homelab'
lang: 'en'
title: 'Homelab as Code'
tagline: 'My entire homelab, defined and deployed from Git'
description: >-
  Infrastructure and services for my homelab, managed as code: reproducible,
  declarative, and automatically deployed.
role: 'Solo design & development'
year: '2025—present'
status: 'wip'
tags: ['Infrastructure', 'DevOps', 'Homelab']
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

My entire homelab —virtual machines, LXC containers, services and
monitoring— lives in a single repository and is deployed declaratively from
scratch.

Terraform provisions every VM and LXC on top of Proxmox from a YAML-declared
inventory; Ansible configures every host and deploys every service; a K3s
cluster with Argo CD manages the Kubernetes workloads; and a full observability
stack (Prometheus, Grafana, Loki, Alertmanager) watches over all of it.

This very portfolio runs on that infrastructure.
