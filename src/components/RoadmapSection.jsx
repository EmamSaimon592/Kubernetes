import useScrollReveal from '../hooks/useScrollReveal';
import useTimelineProgress from '../hooks/useTimelineProgress';
import { roadmap } from '../data/content';

export default function RoadmapSection() {
  const headerRef = useScrollReveal();
  const { timelineRef, progressRef } = useTimelineProgress();

  return (
    <section
      id="roadmap"
      className="relative py-24 md:py-32 bg-gradient-radial"
    >
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div ref={headerRef} className="text-center mb-16 reveal">
          <span className="text-k8s-400 text-sm font-medium tracking-widest uppercase mb-4 block">
            Learning Path
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Kubernetes <span className="text-cyan-400">Roadmap</span>
          </h2>
          <p className="text-k8s-200 text-base md:text-lg max-w-2xl mx-auto">
            A structured path from containers to production Kubernetes mastery.
          </p>
        </div>

        <div className="relative pl-14" ref={timelineRef}>
          <div className="timeline-line" aria-hidden="true" />
          <div
            className="timeline-progress"
            ref={progressRef}
            aria-hidden="true"
          />

          {roadmap.map((item, i) => (
            <div
              key={item.step}
              className={`relative mb-10 timeline-item ${i === roadmap.length - 1 ? '' : ''}`}
            >
              <div className="timeline-dot" style={{ top: '4px' }} />
              <div
                className="glass-card p-5 md:p-6"
                style={
                  item.isFinal
                    ? {
                        borderColor: 'rgba(0, 229, 255, 0.3)',
                        background: 'rgba(0, 229, 255, 0.06)',
                      }
                    : {}
                }
              >
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className={`text-xs font-mono px-2 py-1 rounded ${
                      item.accent
                        ? 'text-cyan-400 bg-cyan-400/10'
                        : 'text-k8s-400 bg-k8s-500/10'
                    }`}
                  >
                    Step {item.step}
                  </span>
                  {item.isFinal && (
                    <i className="fa-solid fa-crown text-cyan-400 text-xs" />
                  )}
                </div>
                <h3 className="font-display text-lg font-bold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-k8s-200">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
