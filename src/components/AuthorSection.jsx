import useScrollReveal from '../hooks/useScrollReveal';

const socials = [
  { icon: 'fa-brands fa-github', label: 'GitHub' },
  { icon: 'fa-brands fa-linkedin-in', label: 'LinkedIn' },
  { icon: 'fa-brands fa-x-twitter', label: 'Twitter / X' },
  { icon: 'fa-solid fa-envelope', label: 'Email' },
];

export default function AuthorSection() {
  const headerRef = useScrollReveal();
  const cardRef = useScrollReveal();

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 bg-gradient-radial-cyan"
    >
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <div ref={headerRef} className="text-center mb-12 reveal">
          <span className="text-k8s-400 text-sm font-medium tracking-widest uppercase mb-4 block">
            Creator
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Author
          </h2>
        </div>

        <div ref={cardRef} className="author-card reveal-scale">
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <div className="w-32 h-32 rounded-2xl overflow-hidden border-2 border-k8s-500/30 glow-blue">
                <img
                  src="https://picsum.photos/seed/emam-saimon-k8s/256/256.jpg"
                  alt="Emam Saimon"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Info */}
            <div className="text-center md:text-left">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">
                Emam Saimon
              </h3>
              <p className="text-k8s-200 text-base leading-relaxed mb-6 max-w-md">
                Passionate developer and Kubernetes enthusiast dedicated to
                helping learners understand cloud-native technologies through
                practical examples and modern web experiences.
              </p>

              <div className="flex items-center gap-4 justify-center md:justify-start">
                {socials.map(s => (
                  <a
                    key={s.label}
                    href="#"
                    className="w-10 h-10 rounded-xl bg-k8s-500/10 border border-k8s-500/20 flex items-center justify-center text-k8s-300 hover:text-white hover:bg-k8s-500/20 hover:border-k8s-500/40 transition-all"
                    aria-label={s.label}
                  >
                    <i className={s.icon} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
