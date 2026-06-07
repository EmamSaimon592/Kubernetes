import ParticleCanvas from './ParticleCanvas';

const floatingBoxes = [
  { label: 'pod', className: 'w-16 h-12 top-[15%] left-[8%]' },
  { label: 'svc', className: 'w-20 h-14 top-[25%] right-[10%]' },
  { label: 'dep', className: 'w-14 h-10 bottom-[30%] left-[15%]' },
  {
    label: 'ing',
    className: 'bottom-[20%] right-[12%]',
    style: { width: '72px', height: '48px' },
  },
  { label: 'ns', className: 'w-12 h-10 top-[60%] left-[5%] hidden lg:flex' },
];

const stats = [
  { value: '100+', label: 'Kubernetes Concepts' },
  { value: 'Prod', label: 'Production Ready', valueClass: 'text-cyan-400' },
  { value: 'CNCF', label: 'Cloud Native', valueClass: 'text-k8s-300' },
  { value: 'OSS', label: 'Open Source' },
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <ParticleCanvas />
      <div className="hero-overlay absolute inset-0 z-[1]" />

      {/* Floating containers */}
      {floatingBoxes.map((box, i) => (
        <div
          key={i}
          className={`floating-container absolute items-center justify-center text-xs font-mono ${box.className} ${box.label === 'ns' ? '' : 'hidden md:flex'}`}
          style={box.style || {}}
          aria-hidden="true"
        >
          <span className={i % 2 === 0 ? 'text-k8s-400' : 'text-cyan-400'}>
            {box.label}
          </span>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 text-center">
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium tracking-wide uppercase glass">
            <span className="pulse-dot" />
            Cloud Native Learning Platform
          </span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6">
          Master Kubernetes
          <br />
          <span className="bg-gradient-to-r from-k8s-400 via-cyan-400 to-k8s-300 bg-clip-text text-transparent">
            Like a Pro
          </span>
        </h1>

        <p className="text-base md:text-lg lg:text-xl text-k8s-200 max-w-3xl mx-auto mb-10 leading-relaxed">
          Learn Kubernetes from beginner to advanced with practical concepts,
          architecture, workloads, services, deployments, and production-ready
          best practices.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a href="#about" className="btn-primary text-base">
            Learn Kubernetes
          </a>
          <a href="#architecture" className="btn-secondary text-base">
            Explore Architecture
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-3xl mx-auto">
          {stats.map(s => (
            <div key={s.label} className="stat-card text-center">
              <div
                className={`font-display text-2xl md:text-3xl font-bold text-white mb-1 ${s.valueClass || ''}`}
              >
                {s.value}
              </div>
              <div className="text-xs md:text-sm text-k8s-200">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-k8s-200 tracking-widest uppercase">
          Scroll
        </span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          stroke="#5c6bc0"
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <path d="M8 3v10M3 8l5 5 5-5" />
        </svg>
      </div>
    </section>
  );
}
