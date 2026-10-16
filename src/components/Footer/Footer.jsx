import { Globe, Share2, ExternalLink, Mail, Zap, ArrowRight } from 'lucide-react';
import { EVENT, NAV_LINKS } from '../../constants/data';

const SOCIAL_LINKS = [
  { icon: Globe,        href: '#', label: 'Website' },
  { icon: Share2,       href: '#', label: 'Social' },
  { icon: ExternalLink, href: '#', label: 'Connect' },
  { icon: Mail,         href: 'mailto:hello@stage-x.space', label: 'Email' },
];

const FOOTER_LINKS = {
  Event: ['About', 'Speakers', 'Schedule', 'Sponsors'],
  Resources: ['Press Kit', 'Brochure', 'Travel Guide', 'FAQ'],
  Company: ['Stage-X Space', 'Contact', 'Privacy Policy', 'Terms'],
};

/**
 * Site footer with newsletter sign-up, nav links, social icons, and copyright.
 */
export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5">
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-indigo-500/50 to-transparent" />
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-40 rounded-full blur-3xl opacity-10"
        style={{ background: 'radial-gradient(circle, #4f46e5 0%, transparent 70%)' }} />

      <div className="container-max px-4 md:px-8 lg:px-16 py-16">
        {/* Upper footer */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 shadow-glow-indigo">
                <Zap size={18} className="text-white" />
              </span>
              <span className="font-display font-bold text-lg tracking-tight">
                <span className="text-gradient">Stage-X</span>
                <span className="text-white/60 text-sm font-medium ml-1">Space</span>
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-6 max-w-xs">
              Shaping the future of enterprise intelligence through world-class events, community, and innovation.
            </p>

            {/* Newsletter */}
            <div>
              <p className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-3">Stay Updated</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm placeholder:text-white/20
                    focus:outline-none focus:border-indigo-500/60 transition-all duration-200 min-w-0"
                />
                <button className="btn-primary px-4 py-2.5 flex items-center gap-1 text-sm">
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Social */}
            <div className="flex items-center gap-3 mt-6">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-white/40
                    hover:text-white hover:bg-indigo-500/20 hover:border-indigo-500/30 transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav Columns */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/40 text-sm hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs">
            © 2026 {EVENT.organizer}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-white/30 hover:text-white/60 text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/30 hover:text-white/60 text-xs transition-colors">Terms of Service</a>
            <a href="#" className="text-white/30 hover:text-white/60 text-xs transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
