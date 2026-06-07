import useScrollReveal from '../hooks/useScrollReveal';
import { kinds } from '../data/content';

function KindCard({ kind, index }) {
  const ref = useScrollReveal();
  return (
    <div
      ref={ref}
      className="glass-card p-6 reveal"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="kind-icon mb-4">
        <i className={`${kind.icon} ${kind.color}`} />
      </div>
      <h3 className="font-display text-lg font-bold text-white mb-2">
        {kind.title}
      </h3>
      <p className="text-sm text-k8s-200 leading-relaxed">{kind.description}</p>
    </div>
  );
}

export default function KindsSection() {
  const headerRef = useScrollReveal();

  return (
    <section
      id="kinds"
      className="relative py-24 md:py-32 bg-gradient-radial-cyan"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div ref={headerRef} className="text-center mb-16 reveal">
          <span className="text-k8s-400 text-sm font-medium tracking-widest uppercase mb-4 block">
            Core Resources
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Most Important Kubernetes
            <br />
            <span className="text-cyan-400">Resource Kinds</span>
          </h2>
          <p className="text-k8s-200 text-base md:text-lg max-w-2xl mx-auto">
            The building blocks of every Kubernetes cluster. Master these and
            you master K8s.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {kinds.map((kind, i) => (
            <KindCard key={kind.title} kind={kind} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
