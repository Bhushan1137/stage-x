import { useState, useEffect, useCallback } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { NAV_LINKS, EVENT } from '../../constants/data';

/**
 * Navbar component — fixed top bar with glass morphism effect.
 * Becomes opaque on scroll, collapses to a hamburger on mobile.
 */
export default function Navbar() {
  const [isOpen, setIsOpen]         = useState(false);
  const [scrolled, setScrolled]     = useState(false);
  const [activeSection, setActive]  = useState('');

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);

    // Determine active section
    const sections = NAV_LINKS.map((l) => l.href.replace('#', ''));
    for (const id of [...sections].reverse()) {
      const el = document.getElementById(id);
      if (el && window.scrollY >= el.offsetTop - 120) {
        setActive(id);
        break;
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const handleNavClick = (href) => {
    setIsOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass border-b border-white/5 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-max flex items-center justify-between px-4 md:px-8 lg:px-16">
        {/* ── Logo ── */}
        <a
          href="#hero"
          onClick={() => handleNavClick('#hero')}
          className="flex items-center gap-2.5 group"
        >
          <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 shadow-glow-indigo">
            <Zap size={18} className="text-white" />
          </span>
          <span className="font-display font-bold text-lg tracking-tight">
            <span className="text-gradient">Stage-X</span>
            <span className="text-white/60 text-sm font-medium ml-1">Space</span>
          </span>
        </a>

        {/* ── Desktop Nav ── */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ label, href }) => {
            const id = href.replace('#', '');
            const isActive = activeSection === id;
            return (
              <li key={href}>
                <button
                  onClick={() => handleNavClick(href)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'text-white'
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 rounded-lg bg-indigo-500/10 border border-indigo-500/20" />
                  )}
                  {label}
                </button>
              </li>
            );
          })}
        </ul>

        {/* ── CTA Button (Desktop) ── */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => handleNavClick('#register')}
            className="btn-primary text-sm px-5 py-2.5"
          >
            Register Now
          </button>
        </div>

        {/* ── Hamburger (Mobile) ── */}
        <button
          className="md:hidden p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition-colors"
          onClick={() => setIsOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* ── Mobile Menu ── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="glass border-t border-white/5 px-4 py-4 flex flex-col gap-1">
          {NAV_LINKS.map(({ label, href }) => (
            <button
              key={href}
              onClick={() => handleNavClick(href)}
              className="text-left px-4 py-3 text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-all"
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('#register')}
            className="btn-primary text-sm mt-2"
          >
            Register Now
          </button>
        </div>
      </div>
    </nav>
  );
}
