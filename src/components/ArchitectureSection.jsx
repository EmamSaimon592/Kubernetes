import { useEffect, useRef, useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import { archNodes } from '../data/content';

function ArchNode({ node, index, onVisible }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !visible) {
          setTimeout(() => {
            setVisible(true);
            onVisible(index);
          }, index * 150);
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [index, visible, onVisible]);

  return (
    <div
      ref={ref}
      className="arch-node w-48"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? 'translateY(0) scale(1)'
          : 'translateY(20px) scale(0.95)',
        transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        ...(node.isLast
          ? { borderColor: 'var(--accent)', background: 'var(--card-hover)' }
          : {}),
      }}
    >
      <i className={`${node.icon} ${node.color} text-lg mb-2`} />
      <div className="font-display font-bold text-white">{node.label}</div>
      <div className="text-xs text-k8s-200">{node.sub}</div>
      {node.isLast && (
        <div className="glow-blue absolute inset-0 rounded-xl pointer-events-none" />
      )}
    </div>
  );
}

export default function ArchitectureSection() {
  const headerRef = useScrollReveal();
  const [visibleLines, setVisibleLines] = useState(new Set());

  function handleNodeVisible(index) {
    if (index > 0) {
      setVisibleLines(prev => {
        const next = new Set(prev);
        next.add(index - 1);
        return next;
      });
    }
  }

  return (
    <section id="architecture" className="relative py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div ref={headerRef} className="text-center mb-16 reveal">
          <span className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-4 block">
            System Design
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Kubernetes <span className="text-k8s-400">Architecture</span>
          </h2>
          <p className="text-k8s-200 text-base md:text-lg max-w-2xl mx-auto">
            How a request flows through the Kubernetes system from user to
            container.
          </p>
        </div>

        <div className="flex flex-col items-center">
          {archNodes.map((node, i) => (
            <div key={node.label} className="contents">
              <ArchNode node={node} index={i} onVisible={handleNodeVisible} />
              {i < archNodes.length - 1 && (
                <div
                  className={`arch-line ${visibleLines.has(i) ? 'visible' : ''}`}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
