import { SPONSORS } from '../../constants/data';
import SectionHeader from '../UI/SectionHeader';
import { useAnimateOnScroll } from '../../hooks/useAnimateOnScroll';

const TIER_CONFIG = {
  platinum: {
    label: 'Platinum Partners',
    textSize: 'text-xl sm:text-2xl md:text-3xl',
    colClass: 'grid-cols-1 sm:grid-cols-2',
    cardClass: 'py-6 px-6 sm:py-8 sm:px-10',
    borderClass: 'border-amber-400/30',
    badgeBg: 'bg-amber-400/10',
    badgeText: 'text-amber-300',
  },
  gold: {
    label: 'Gold Sponsors',
    textSize: 'text-lg sm:text-xl md:text-2xl',
    colClass: 'grid-cols-1 sm:grid-cols-3',
    cardClass: 'py-5 px-6 sm:py-6 sm:px-8',
    borderClass: 'border-yellow-400/20',
    badgeBg: 'bg-yellow-400/10',
    badgeText: 'text-yellow-300',
  },
  silver: {
    label: 'Silver Sponsors',
    textSize: 'text-base sm:text-lg',
    colClass: 'grid-cols-2 sm:grid-cols-4',
    cardClass: 'py-4 px-4 sm:py-5 sm:px-6',
    borderClass: 'border-slate-400/20',
    badgeBg: 'bg-slate-400/10',
    badgeText: 'text-slate-300',
  },
};

/**
 * Sponsor tier row component.
 */
function SponsorTier({ tier, sponsors, inView, delay }) {
  const cfg = TIER_CONFIG[tier];
  return (
    <div
      className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: inView ? `${delay}ms` : '0ms' }}
    >
      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${cfg.badgeBg} border ${cfg.borderClass} mb-5`}>
        <span className={`text-xs font-semibold uppercase tracking-widest ${cfg.badgeText}`}>{cfg.label}</span>
      </div>

      <div className={`grid ${cfg.colClass} gap-4 mb-10`}>
        {sponsors.map((s) => (
          <div
            key={s.name}
            className={`glass-card rounded-2xl ${cfg.cardClass} border ${cfg.borderClass} flex items-center justify-center
              hover:border-indigo-500/30 hover:-translate-y-1 transition-all duration-300 group cursor-pointer`}
          >
            <span className={`font-display font-black ${cfg.textSize} text-white/20 group-hover:text-white/50 transition-colors tracking-tight`}>
              {s.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * Sponsors section with tiered partner logos.
 */
export default function Sponsors() {
  const { ref: headerRef, inView: headerIn } = useAnimateOnScroll();
  const { ref: bodyRef,   inView: bodyIn   } = useAnimateOnScroll();

  return (
    <section id="sponsors" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500/30 to-transparent" />
      <div className="absolute -left-64 top-1/3 w-[400px] h-[400px] rounded-full opacity-8 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #7c3aed 0%, transparent 70%)' }} />

      <div className="container-max">
        <div
          ref={headerRef}
          className={`transition-all duration-700 ${headerIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <SectionHeader
            eyebrow="Our Sponsors"
            title={<>Backed by <span className="text-gradient">Industry Leaders</span></>}
            subtitle="Stage-X Enterprise AI Summit is powered by the world's most forward-thinking technology organizations."
          />
        </div>

        <div ref={bodyRef}>
          {Object.entries(SPONSORS).map(([tier, sponsors], i) => (
            <SponsorTier
              key={tier}
              tier={tier}
              sponsors={sponsors}
              inView={bodyIn}
              delay={i * 150}
            />
          ))}
        </div>

        {/* Become a sponsor CTA */}
        <div className={`text-center transition-all duration-700 ${bodyIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: bodyIn ? '450ms' : '0ms' }}>
          <div className="glass-card rounded-2xl p-8 inline-block max-w-md">
            <p className="text-white/60 text-sm mb-4">
              Interested in becoming a sponsor? Join the world's most exclusive AI event.
            </p>
            <a href="mailto:sponsors@stage-x.space" className="btn-primary text-sm px-6 py-3 inline-flex items-center gap-2">
              Partner With Us →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
