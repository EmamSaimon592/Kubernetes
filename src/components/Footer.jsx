function K8sLogo() {
  return (
    <svg
      className="w-7 h-7"
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
    >
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
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-k8s-500/10 py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <K8sLogo />
            <span className="font-display text-lg font-bold text-white">
              Kingfisher
            </span>
          </div>
          <p className="text-sm text-k8s-200 text-center">
            Built with passion for Kubernetes learners.
          </p>
          <div className="text-sm text-k8s-200 text-center md:text-right">
            <span>&copy; 2026 Kingfisher. All Rights Reserved.</span>
            <br className="md:hidden" />
            <span className="ml-0 md:ml-2">By Emam Saimon</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
