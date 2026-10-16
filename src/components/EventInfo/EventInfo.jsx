import { MapPin, Calendar, Users, Clock, Shield, Globe, Cpu, Lightbulb } from 'lucide-react';
import { EVENT } from '../../constants/data';
import SectionHeader from '../UI/SectionHeader';
import { useAnimateOnScroll } from '../../hooks/useAnimateOnScroll';

const FEATURES = [
  {
    icon: Cpu,
    title: 'Cutting-Edge Content',
    desc: 'Curated sessions on the latest AI advancements, from LLMs to autonomous agents in enterprise environments.',
    color: 'text-indigo-400',
    bg: 'bg-indigo-500/10',
    border: 'border-indigo-500/20',
  },
  {
    icon: Globe,
    title: 'Global Perspectives',
    desc: 'Speakers and delegates from 40+ countries, bringing diverse insights and cross-industry collaboration.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
  },
  {
    icon: Lightbulb,
    title: 'Hands-On Workshops',
    desc: 'Interactive, deep-dive sessions where you build, experiment, and leave with actionable AI frameworks.',
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
  },
  {
    icon: Shield,
    title: 'Vetted Community',
    desc: 'Connect with pre-vetted enterprise leaders, investors, and AI practitioners — zero noise, all signal.',
    color: 'text-pink-400',
    bg: 'bg-pink-500/10',
    border: 'border-pink-500/20',
  },
];

const EVENT_DETAILS = [
  { icon: Calendar, label: 'Date',      value: EVENT.date,      color: 'text-indigo-400' },
  { icon: MapPin,   label: 'Venue',     value: EVENT.location,  color: 'text-pink-400' },
  { icon: Users,    label: 'Capacity',  value: EVENT.capacity,  color: 'text-cyan-400' },
  { icon: Clock,    label: 'Duration',  value: '2 Full Days',   color: 'text-amber-400' },
];

/**
 * About / Event Information section.
 */
export default function EventInfo() {
  const { ref: headerRef, inView: headerIn } = useAnimateOnScroll();
  const { ref: cardsRef,  inView: cardsIn  } = useAnimateOnScroll();
  const { ref: detailRef, inView: detailIn } = useAnimateOnScroll();

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-indigo-500/50 to-transparent" />
      <div className="absolute -left-64 top-1/2 w-[400px] h-[400px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #4f46e5 0%, transparent 70%)' }} />

      <div className="container-max">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`transition-all duration-700 ${headerIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <SectionHeader
            eyebrow="About the Event"
            title={<>The Premier <span className="text-gradient">AI Gathering</span> of 2026</>}
            subtitle={EVENT.description}
          />
        </div>

        {/* Feature Cards */}
        <div
          ref={cardsRef}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16"
        >
          {FEATURES.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className={`glass-card rounded-2xl p-6 group hover:border-indigo-500/30 hover:-translate-y-1 transition-all duration-300 cursor-default ${f.border} border
                  ${cardsIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: cardsIn ? `${i * 100}ms` : '0ms' }}
              >
                <div className={`w-11 h-11 rounded-xl ${f.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={20} className={f.color} />
                </div>
                <h3 className="font-display font-semibold text-white mb-2">{f.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Event Details Banner */}
        <div
          ref={detailRef}
          className={`glass-card rounded-3xl p-6 md:p-8 transition-all duration-700 ${
            detailIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {EVENT_DETAILS.map((d, i) => {
              const Icon = d.icon;
              return (
                <div key={d.label} className="flex flex-col items-center text-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                    <Icon size={18} className={d.color} />
                  </div>
                  <div className="text-white/40 text-xs uppercase tracking-wider">{d.label}</div>
                  <div className="text-white font-semibold text-sm md:text-base">{d.value}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
