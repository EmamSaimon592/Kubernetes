import { useState } from 'react';
import useNavbarScroll from '../hooks/useNavbarScroll';
import { navLinks } from '../data/content';

// Reusable K8s wheel SVG logo
function K8sLogo({ className = 'w-7 h-7' }) {
  return (
    <svg
      className={className}
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

export default function Navbar() {
  const scrolled = useNavbarScroll();
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
    document.body.style.overflow = '';
  }

  function openMenu() {
    setMenuOpen(true);
    document.body.style.overflow = 'hidden';
  }

  return (
    <>
      <nav
        className={`navbar fixed top-0 left-0 w-full z-50 px-4 md:px-8 py-4 ${scrolled ? 'scrolled' : ''}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 group"
            aria-label="Kingfisher Home"
          >
            <K8sLogo className="w-10 h-10" />
            <span className="font-display text-xl font-bold tracking-tight text-white group-hover:text-k8s-300 transition-colors">
              Kingfisher
            </span>
          </a>

          {/* Desktop menu */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-k8s-200 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="#kinds"
              className="btn-primary text-sm hidden md:inline-block"
            >
              Start Learning
            </a>
            <button
              className="lg:hidden text-white p-2"
              onClick={openMenu}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`mobile-overlay ${menuOpen ? 'open' : ''}`}
        onClick={closeMenu}
      />

      {/* Mobile drawer */}
      <div
        className={`mobile-menu ${menuOpen ? 'open' : ''}`}
        role="dialog"
        aria-label="Mobile navigation"
      >
        <button
          className="absolute top-6 right-6 text-white p-2"
          onClick={closeMenu}
          aria-label="Close menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <div className="flex flex-col gap-6">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-lg font-display font-medium text-k8s-100 hover:text-white transition-colors"
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
          <div className="mt-4">
            <a
              href="#kinds"
              className="btn-primary text-sm inline-block"
              onClick={closeMenu}
            >
              Start Learning
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
