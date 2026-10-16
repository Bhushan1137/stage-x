import { useState } from 'react';
import { ExternalLink, ArrowUpRight, Mic, Globe } from 'lucide-react';
import { SPEAKERS } from '../../constants/data';
import SectionHeader from '../UI/SectionHeader';
import { useAnimateOnScroll } from '../../hooks/useAnimateOnScroll';

/**
 * Individual Speaker Card component.
 */
function SpeakerCard({ speaker, index, inView }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`transition-all duration-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: inView ? `${index * 80}ms` : '0ms' }}
    >
      {/* Flip card container */}
      <div
        className="relative h-80 cursor-pointer group"
        style={{ perspective: '1000px' }}
        onClick={() => setFlipped((v) => !v)}
        onKeyDown={(e) => e.key === 'Enter' && setFlipped((v) => !v)}
        tabIndex={0}
        role="button"
        aria-label={`View details for ${speaker.name}`}
      >
        <div
          className="relative w-full h-full transition-transform duration-500"
          style={{ transformStyle: 'preserve-3d', transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
        >
          {/* ── Front face ── */}
          <div
            className="absolute inset-0 glass-card rounded-2xl overflow-hidden flex flex-col"
            style={{ backfaceVisibility: 'hidden' }}
          >
            {/* Avatar area */}
            <div className={`relative h-44 bg-gradient-to-br ${speaker.gradient} flex items-center justify-center overflow-hidden`}>
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
                  backgroundSize: '20px 20px',
                }} />
              {/* Avatar circle */}
              <div className="relative z-10 w-24 h-24 rounded-full bg-white/20 border-2 border-white/30 flex items-center justify-center backdrop-blur-sm">
                <span className="font-display font-black text-3xl text-white">{speaker.avatar}</span>
              </div>
              {/* "Click to flip" hint */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight size={16} className="text-white/70" />
              </div>
            </div>

            {/* Info */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-display font-bold text-white text-base leading-tight">{speaker.name}</h3>
                <p className="text-white/50 text-xs mt-1">{speaker.role}</p>
                <p className="text-white/30 text-xs">{speaker.company}</p>
              </div>
              <div className="flex items-center gap-2 mt-3 pt-3 border-t border-white/5">
                <Mic size={12} className="text-indigo-400 flex-shrink-0" />
                <span className="text-indigo-300 text-xs font-medium line-clamp-1">{speaker.topic}</span>
              </div>
            </div>
          </div>

          {/* ── Back face ── */}
          <div
            className="absolute inset-0 glass-card rounded-2xl p-6 flex flex-col justify-between"
            style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
          >
            <div>
              <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-gradient-to-r ${speaker.gradient} mb-4`}>
                <span className="text-white text-xs font-bold">{speaker.avatar}</span>
              </div>
              <h3 className="font-display font-bold text-white text-base mb-1">{speaker.name}</h3>
              <p className="text-white/40 text-xs mb-4">{speaker.role} · {speaker.company}</p>
              <p className="text-white/60 text-sm leading-relaxed">{speaker.bio}</p>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4 p-3 rounded-xl bg-white/5 border border-white/5">
                <Mic size={14} className="text-indigo-400 flex-shrink-0" />
                <span className="text-white/70 text-xs">{speaker.topic}</span>
              </div>
              {/* Social links */}
              <div className="flex items-center gap-2">
                <a
                  href={speaker.twitter}
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/50 hover:text-white text-xs transition-all"
                >
                  <Globe size={12} /> Profile
                </a>
                <a
                  href={speaker.linkedin}
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/50 hover:text-white text-xs transition-all"
                >
                  <ExternalLink size={12} /> Connect
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Speakers section with a 3×2 grid of flippable speaker cards.
 */
export default function Speakers() {
  const { ref: headerRef, inView: headerIn } = useAnimateOnScroll();
  const { ref: gridRef,   inView: gridIn   } = useAnimateOnScroll();

  return (
    <section id="speakers" className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute -right-64 top-1/2 w-[500px] h-[500px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #db2777 0%, transparent 70%)' }} />

      <div className="container-max">
        <div
          ref={headerRef}
          className={`transition-all duration-700 ${headerIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <SectionHeader
            eyebrow="Speakers"
            title={<>World-Class <span className="text-gradient">AI Leaders</span></>}
            subtitle="Learn from the brightest minds in enterprise AI. Click any card to discover more about each speaker."
          />
        </div>

        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SPEAKERS.map((speaker, i) => (
            <SpeakerCard key={speaker.id} speaker={speaker} index={i} inView={gridIn} />
          ))}
        </div>

        {/* See all speakers CTA */}
        <div className="text-center mt-12">
          <button className="btn-outline text-sm px-6 py-3">
            View All 50+ Speakers →
          </button>
        </div>
      </div>
    </section>
  );
}
