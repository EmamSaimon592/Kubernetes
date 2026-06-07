// Kubernetes resource kinds data
export const kinds = [
  {
    title: 'Pod',
    description:
      'Smallest deployable unit in Kubernetes. Contains one or more containers sharing network and storage.',
    icon: 'fa-solid fa-cube',
    color: 'text-k8s-400',
  },
  {
    title: 'Deployment',
    description:
      'Manages Pods and ReplicaSets. Provides declarative updates, rollbacks, and scaling capabilities.',
    icon: 'fa-solid fa-rocket',
    color: 'text-cyan-400',
  },
  {
    title: 'Service',
    description:
      'Exposes applications to users. Provides stable network endpoints and load balancing across Pods.',
    icon: 'fa-solid fa-network-wired',
    color: 'text-k8s-400',
  },
  {
    title: 'Namespace',
    description:
      'Organizes cluster resources into logical groups. Enables multi-tenancy and access control.',
    icon: 'fa-solid fa-layer-group',
    color: 'text-cyan-400',
  },
  {
    title: 'ConfigMap',
    description:
      'Stores configuration data as key-value pairs. Decouples config from container images for portability.',
    icon: 'fa-solid fa-file-code',
    color: 'text-k8s-400',
  },
  {
    title: 'Secret',
    description:
      'Stores sensitive information securely. Encodes passwords, tokens, and keys separately from Pods.',
    icon: 'fa-solid fa-lock',
    color: 'text-cyan-400',
  },
  {
    title: 'StatefulSet',
    description:
      'Manages stateful applications like databases. Guarantees unique Pod identities and ordered deployment.',
    icon: 'fa-solid fa-database',
    color: 'text-k8s-400',
  },
  {
    title: 'DaemonSet',
    description:
      'Runs one Pod on every node. Perfect for logging agents, monitoring, and node-level services.',
    icon: 'fa-solid fa-gears',
    color: 'text-cyan-400',
  },
  {
    title: 'Job',
    description:
      'Runs tasks until completion. Ensures a specified number of Pods finish successfully before exiting.',
    icon: 'fa-solid fa-list-check',
    color: 'text-k8s-400',
  },
  {
    title: 'CronJob',
    description:
      'Runs scheduled jobs using cron syntax. Ideal for backups, reports, and periodic maintenance tasks.',
    icon: 'fa-solid fa-clock',
    color: 'text-cyan-400',
  },
  {
    title: 'Ingress',
    description:
      'Manages external HTTP/S access to cluster services. Provides TLS termination, routing, and virtual hosts.',
    icon: 'fa-solid fa-door-open',
    color: 'text-k8s-400',
  },
  {
    title: 'PersistentVolume',
    description:
      'Provides persistent storage that outlives individual Pods. Abstracts underlying storage infrastructure.',
    icon: 'fa-solid fa-hard-drive',
    color: 'text-cyan-400',
  },
];

// Roadmap steps
export const roadmap = [
  {
    step: '01',
    title: 'Containers',
    description:
      'Understand what containers are, why they exist, and how they isolate processes with lightweight virtualization.',
    accent: false,
  },
  {
    step: '02',
    title: 'Docker',
    description:
      'Learn to build, run, and distribute containers using Docker, Dockerfile, and Docker Compose.',
    accent: false,
  },
  {
    step: '03',
    title: 'YAML',
    description:
      'Master YAML syntax — the language of Kubernetes manifests, configs, and declarations.',
    accent: true,
  },
  {
    step: '04',
    title: 'Pods',
    description:
      'The fundamental unit of Kubernetes. Learn Pod lifecycle, multi-container patterns, and health probes.',
    accent: false,
  },
  {
    step: '05',
    title: 'Deployments',
    description:
      'Declarative Pod management with rolling updates, rollbacks, and replica scaling strategies.',
    accent: false,
  },
  {
    step: '06',
    title: 'Services',
    description:
      'ClusterIP, NodePort, and LoadBalancer services for stable networking and internal discovery.',
    accent: true,
  },
  {
    step: '07',
    title: 'ConfigMaps',
    description:
      'Externalize configuration from containers. Environment variables, volumes, and dynamic config updates.',
    accent: false,
  },
  {
    step: '08',
    title: 'Secrets',
    description:
      'Securely manage sensitive data. Base64 encoding, secret types, and best security practices.',
    accent: false,
  },
  {
    step: '09',
    title: 'Ingress',
    description:
      'HTTP routing, TLS termination, path-based routing, and Ingress controllers like Nginx.',
    accent: true,
  },
  {
    step: '10',
    title: 'Helm',
    description:
      'Kubernetes package manager. Charts, values, templates, and managing complex application releases.',
    accent: false,
  },
  {
    step: '11',
    title: 'Monitoring',
    description:
      'Prometheus, Grafana, and the metrics pipeline. Observe cluster health, performance, and alerts.',
    accent: false,
  },
  {
    step: '12',
    title: 'Production Kubernetes',
    description:
      'Security, RBAC, network policies, resource quotas, disaster recovery, and day-2 operations at scale.',
    accent: true,
    isFinal: true,
  },
];

// Resources data
export const resources = [
  {
    title: 'YAML Cheat Sheet',
    description:
      'Quick reference for YAML syntax, indentation rules, anchors, aliases, and Kubernetes manifest structure.',
    icon: 'fa-solid fa-file-lines',
    color: 'text-k8s-400',
    bg: 'bg-k8s-500/10',
    border: 'border-k8s-500/20',
  },
  {
    title: 'kubectl Commands',
    description:
      'Complete reference for kubectl CLI — get, describe, apply, logs, exec, port-forward, and more.',
    icon: 'fa-solid fa-terminal',
    color: 'text-cyan-400',
    bg: 'bg-cyan-400/10',
    border: 'border-cyan-400/20',
  },
  {
    title: 'Kubernetes Documentation',
    description:
      'Official K8s docs curated and organized by topic — concepts, tasks, tutorials, and reference guides.',
    icon: 'fa-solid fa-book',
    color: 'text-k8s-400',
    bg: 'bg-k8s-500/10',
    border: 'border-k8s-500/20',
  },
  {
    title: 'Best Practices',
    description:
      'Production-proven patterns for security, resource management, networking, and observability in K8s.',
    icon: 'fa-solid fa-star',
    color: 'text-cyan-400',
    bg: 'bg-cyan-400/10',
    border: 'border-cyan-400/20',
  },
  {
    title: 'Interview Questions',
    description:
      'Curated questions from junior to senior level covering architecture, troubleshooting, and real-world scenarios.',
    icon: 'fa-solid fa-comments',
    color: 'text-k8s-400',
    bg: 'bg-k8s-500/10',
    border: 'border-k8s-500/20',
  },
  {
    title: 'Architecture Patterns',
    description:
      'Microservices, sidecar, ambassador, and service mesh patterns designed for Kubernetes deployments.',
    icon: 'fa-solid fa-sitemap',
    color: 'text-cyan-400',
    bg: 'bg-cyan-400/10',
    border: 'border-cyan-400/20',
  },
];

// Features for About section
export const features = [
  {
    label: 'Automated Scaling',
    icon: 'fa-solid fa-arrows-up-down',
    color: 'text-k8s-400',
  },
  {
    label: 'Self Healing',
    icon: 'fa-solid fa-heart-pulse',
    color: 'text-cyan-400',
  },
  {
    label: 'Load Balancing',
    icon: 'fa-solid fa-scale-balanced',
    color: 'text-k8s-400',
  },
  {
    label: 'Rolling Updates',
    icon: 'fa-solid fa-rotate',
    color: 'text-cyan-400',
  },
  {
    label: 'Service Discovery',
    icon: 'fa-solid fa-magnifying-glass',
    color: 'text-k8s-400',
  },
  {
    label: 'Storage Orchestration',
    icon: 'fa-solid fa-hard-drive',
    color: 'text-cyan-400',
  },
];

// Comparison data
export const dockerComparison = [
  {
    title: 'Container Runtime',
    desc: 'Builds and runs containers on a single host',
  },
  {
    title: 'Single Host Focus',
    desc: 'Manages containers on one machine at a time',
  },
  {
    title: 'Simple Setup',
    desc: 'Quick to learn with Dockerfile and docker-compose',
  },
  {
    title: 'Image Management',
    desc: 'Docker Hub for sharing container images',
  },
];

export const k8sComparison = [
  {
    title: 'Orchestration Engine',
    desc: 'Manages hundreds of containers across clusters',
  },
  {
    title: 'Multi-Node Cluster',
    desc: 'Distributes workloads across multiple machines',
  },
  {
    title: 'Enterprise Ready',
    desc: 'Auto-scaling, self-healing, and rollback built-in',
  },
  {
    title: 'Ecosystem Powerhouse',
    desc: 'Helm, Istio, Prometheus, and hundreds of extensions',
  },
];

// Architecture nodes
export const archNodes = [
  {
    icon: 'fa-solid fa-user',
    label: 'User',
    sub: 'HTTP Request',
    color: 'text-k8s-400',
  },
  {
    icon: 'fa-solid fa-door-open',
    label: 'Ingress',
    sub: 'Routing & TLS',
    color: 'text-cyan-400',
  },
  {
    icon: 'fa-solid fa-network-wired',
    label: 'Service',
    sub: 'Load Balancing',
    color: 'text-k8s-400',
  },
  {
    icon: 'fa-solid fa-cubes',
    label: 'Pods',
    sub: 'App Containers',
    color: 'text-cyan-400',
  },
  {
    icon: 'fa-solid fa-server',
    label: 'Node',
    sub: 'Worker Machine',
    color: 'text-k8s-400',
  },
  {
    icon: 'fa-solid fa-cloud',
    label: 'Cluster',
    sub: 'Full Infrastructure',
    color: 'text-k8s-400',
    isLast: true,
  },
];

// Nav links
export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Kubernetes', href: '#about' },
  { label: 'Docker vs Kubernetes', href: '#compare' },
  { label: 'Kubernetes Kinds', href: '#kinds' },
  { label: 'Resources', href: '#resources' },
  { label: 'Contact', href: '#contact' },
];
