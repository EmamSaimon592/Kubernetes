import useScrollReveal from '../hooks/useScrollReveal';
import { dockerComparison, k8sComparison } from '../data/content';

export default function CompareSection() {
  const headerRef = useScrollReveal();
  const dockerRef = useScrollReveal();
  const k8sRef = useScrollReveal();
  const badgeRef = useScrollReveal();

  return (
    <section id="compare" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div ref={headerRef} className="text-center mb-16 reveal">
          <span className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-4 block">
            Comparison
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Docker vs <span className="text-k8s-400">Kubernetes</span>
          </h2>
          <p className="text-k8s-200 text-base md:text-lg max-w-2xl mx-auto">
            Understanding the difference between containerization and
            orchestration is essential for modern infrastructure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Docker */}
          <div ref={dockerRef} className="compare-card reveal-left">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-[#2496ED]/10 border border-[#2496ED]/20 flex items-center justify-center">
                <i className="fa-brands fa-docker text-[#2496ED] text-2xl" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-white">
                  Docker
                </h3>
                <span className="text-sm text-k8s-200">Container Platform</span>
              </div>
            </div>
            <ul className="space-y-4">
              {dockerComparison.map(item => (
                <li key={item.title} className="flex items-start gap-3">
                  <i className="fa-solid fa-check text-[#2496ED] mt-1 text-sm" />
                  <div>
                    <div className="font-medium text-white">{item.title}</div>
                    <div className="text-sm text-k8s-200">{item.desc}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Kubernetes */}
          <div
            ref={k8sRef}
            className="compare-card reveal-right"
            style={{ borderColor: 'rgba(50, 108, 229, 0.3)' }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-k8s-500/10 border border-k8s-500/20 flex items-center justify-center">
                <svg className="w-8 h-8" viewBox="0 0 100 100" fill="none">
                  <circle
                    cx="50"
                    cy="50"
                    r="46"
                    stroke="#326ce5"
                    strokeWidth="3"
                    fill="none"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="18"
                    stroke="#326ce5"
                    strokeWidth="2"
                    fill="none"
                  />
                  <circle cx="50" cy="50" r="5" fill="#326ce5" />
                  <line
                    x1="50"
                    y1="32"
                    x2="50"
                    y2="4"
                    stroke="#326ce5"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <line
                    x1="50"
                    y1="68"
                    x2="50"
                    y2="96"
                    stroke="#326ce5"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <line
                    x1="32"
                    y1="50"
                    x2="4"
                    y2="50"
                    stroke="#326ce5"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <line
                    x1="68"
                    y1="50"
                    x2="96"
                    y2="50"
                    stroke="#326ce5"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <line
                    x1="37.3"
                    y1="37.3"
                    x2="17.2"
                    y2="17.2"
                    stroke="#326ce5"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <line
                    x1="62.7"
                    y1="62.7"
                    x2="82.8"
                    y2="82.8"
                    stroke="#326ce5"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <line
                    x1="62.7"
                    y1="37.3"
                    x2="82.8"
                    y2="17.2"
                    stroke="#326ce5"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <line
                    x1="37.3"
                    y1="62.7"
                    x2="17.2"
                    y2="82.8"
                    stroke="#326ce5"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-white">
                  Kubernetes
                </h3>
                <span className="text-sm text-k8s-200">
                  Container Orchestration
                </span>
              </div>
            </div>
            <ul className="space-y-4">
              {k8sComparison.map(item => (
                <li key={item.title} className="flex items-start gap-3">
                  <i className="fa-solid fa-check text-k8s-400 mt-1 text-sm" />
                  <div>
                    <div className="font-medium text-white">{item.title}</div>
                    <div className="text-sm text-k8s-200">{item.desc}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div ref={badgeRef} className="flex justify-center mt-8 reveal">
          <div className="glass px-6 py-3 rounded-full">
            <span className="text-k8s-200 text-sm font-medium">
              Docker packages applications — Kubernetes orchestrates them at
              scale
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
