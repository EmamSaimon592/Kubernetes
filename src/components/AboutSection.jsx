import useScrollReveal from '../hooks/useScrollReveal';
import { features } from '../data/content';

function FeatureChip({ feature, index }) {
  const ref = useScrollReveal();
  return (
    <div
      ref={ref}
      className="feature-chip reveal"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <i className={`${feature.icon} ${feature.color} text-sm`} />
      <span>{feature.label}</span>
    </div>
  );
}

export default function AboutSection() {
  const titleRef = useScrollReveal();
  const leftRef = useScrollReveal();
  const rightRef = useScrollReveal();

  return (
    <section id="about" className="relative py-24 md:py-32 bg-gradient-radial">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Cluster visualization */}
          <div ref={leftRef} className="reveal-left">
            <div className="relative">
              <div className="glass-card p-6 md:p-8 relative overflow-hidden">
                <div className="aspect-square max-w-md mx-auto relative">
                  {/* Control plane */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-2xl border-2 border-k8s-500 bg-k8s-500/10 flex items-center justify-center glow-blue z-10">
                    <div className="text-center">
                      <i className="fa-solid fa-server text-k8s-400 text-xl mb-1" />
                      <div className="text-[10px] font-mono text-k8s-300">
                        Control Plane
                      </div>
                    </div>
                  </div>

                  {/* Worker nodes */}
                  {[
                    {
                      label: 'Node 1',
                      top: 'top-4 left-4',
                      iconColor: 'text-k8s-400/60',
                      borderColor: 'border-k8s-500/40',
                    },
                    {
                      label: 'Node 2',
                      top: 'top-4 right-4',
                      iconColor: 'text-cyan-400/60',
                      borderColor: 'border-cyan-400/30',
                    },
                    {
                      label: 'Node 3',
                      top: 'bottom-4 left-1/2 -translate-x-1/2',
                      iconColor: 'text-k8s-400/60',
                      borderColor: 'border-k8s-500/40',
                    },
                  ].map(node => (
                    <div
                      key={node.label}
                      className={`absolute ${node.top} w-20 h-16 rounded-xl border ${node.borderColor} bg-k8s-500/5 flex items-center justify-center`}
                    >
                      <div className="text-center">
                        <i
                          className={`fa-solid fa-cube ${node.iconColor} text-sm`}
                        />
                        <div
                          className={`text-[8px] font-mono mt-1 ${node.iconColor}`}
                        >
                          {node.label}
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Animated connection lines */}
                  <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 300 300"
                    fill="none"
                    aria-hidden="true"
                  >
                    <line
                      x1="150"
                      y1="150"
                      x2="60"
                      y2="50"
                      stroke="#326ce5"
                      strokeWidth="1"
                      opacity="0.3"
                      strokeDasharray="4 4"
                    >
                      <animate
                        attributeName="stroke-dashoffset"
                        values="0;8"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                    </line>
                    <line
                      x1="150"
                      y1="150"
                      x2="240"
                      y2="50"
                      stroke="#00e5ff"
                      strokeWidth="1"
                      opacity="0.3"
                      strokeDasharray="4 4"
                    >
                      <animate
                        attributeName="stroke-dashoffset"
                        values="0;8"
                        dur="2.5s"
                        repeatCount="indefinite"
                      />
                    </line>
                    <line
                      x1="150"
                      y1="150"
                      x2="150"
                      y2="260"
                      stroke="#326ce5"
                      strokeWidth="1"
                      opacity="0.3"
                      strokeDasharray="4 4"
                    >
                      <animate
                        attributeName="stroke-dashoffset"
                        values="0;8"
                        dur="1.8s"
                        repeatCount="indefinite"
                      />
                    </line>
                  </svg>

                  {/* Ping dots */}
                  <div
                    className="absolute top-[60px] left-[28px] w-2 h-2 rounded-full bg-k8s-400/50 animate-ping"
                    style={{ animationDuration: '3s' }}
                  />
                  <div
                    className="absolute top-[55px] right-[28px] w-2 h-2 rounded-full bg-cyan-400/50 animate-ping"
                    style={{ animationDuration: '2.5s' }}
                  />
                  <div
                    className="absolute bottom-[50px] left-[140px] w-2 h-2 rounded-full bg-k8s-400/50 animate-ping"
                    style={{ animationDuration: '3.5s' }}
                  />
                </div>
              </div>
              <div
                className="absolute -inset-4 rounded-3xl bg-k8s-500/5 -z-10 blur-2xl"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Right: Text content */}
          <div ref={rightRef} className="reveal-right">
            <span className="text-k8s-400 text-sm font-medium tracking-widest uppercase mb-4 block">
              Introduction
            </span>
            <h2
              ref={titleRef}
              className="reveal font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
            >
              What is <span className="text-k8s-400">Kubernetes</span>?
            </h2>
            <p className="text-k8s-200 text-base md:text-lg leading-relaxed mb-8">
              Kubernetes (K8s) is an open-source container orchestration
              platform that automates deployment, scaling, and management of
              containerized applications. Originally designed by Google, it is
              now maintained by the Cloud Native Computing Foundation.
            </p>
            <div className="flex flex-wrap gap-3">
              {features.map((f, i) => (
                <FeatureChip key={f.label} feature={f} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
