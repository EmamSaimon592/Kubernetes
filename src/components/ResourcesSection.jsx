import useScrollReveal from '../hooks/useScrollReveal';
import { resources } from '../data/content';

function ResourceCard({ resource, index }) {
  const ref = useScrollReveal();
  const isCyan = resource.color === 'text-cyan-400';

  return (
    <div
      ref={ref}
      className="resource-card reveal"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="relative z-10">
        <div
          className={`w-12 h-12 rounded-xl ${resource.bg} border ${resource.border} flex items-center justify-center mb-5`}
        >
          <i className={`${resource.icon} ${resource.color} text-lg`} />
        </div>
        <h3 className="font-display text-lg font-bold text-white mb-2">
          {resource.title}
        </h3>
        <p className="text-sm text-k8s-200 mb-4 leading-relaxed">
          {resource.description}
        </p>
        <div
          className={`flex items-center gap-2 ${isCyan ? 'text-cyan-400' : 'text-k8s-400'} text-sm font-medium group cursor-pointer`}
        >
          <span>Explore</span>
          <i className="fa-solid fa-arrow-right text-xs transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </div>
  );
}

export default function ResourcesSection() {
  const headerRef = useScrollReveal();

  return (
    <section id="resources" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div ref={headerRef} className="text-center mb-16 reveal">
          <span className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-4 block">
            Toolbox
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Learning <span className="text-k8s-400">Resources</span>
          </h2>
          <p className="text-k8s-200 text-base md:text-lg max-w-2xl mx-auto">
            Essential references and tools to accelerate your Kubernetes
            journey.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((r, i) => (
            <ResourceCard key={r.title} resource={r} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
