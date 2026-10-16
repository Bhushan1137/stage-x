import { useState } from 'react';
import { Calendar, Clock, Users, Wrench, Mic, Coffee } from 'lucide-react';
import { SCHEDULE, SESSION_TYPE_STYLES } from '../../constants/data';
import SectionHeader from '../UI/SectionHeader';
import { useAnimateOnScroll } from '../../hooks/useAnimateOnScroll';

// Maps session types to icons
const SESSION_ICONS = {
  keynote:  Mic,
  talk:     Mic,
  workshop: Wrench,
  panel:    Users,
  break:    Coffee,
};

/**
 * Schedule section — tabbed day selector with a timeline of sessions.
 */
export default function Schedule() {
  const [activeDay, setActiveDay] = useState(0);
  const { ref: headerRef, inView: headerIn } = useAnimateOnScroll();
  const { ref: contentRef, inView: contentIn } = useAnimateOnScroll();

  const currentDay = SCHEDULE[activeDay];

  return (
    <section id="schedule" className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

      <div className="container-max">
        <div
          ref={headerRef}
          className={`transition-all duration-700 ${headerIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <SectionHeader
            eyebrow="Schedule"
            title={<>Two Days of <span className="text-gradient">Pure Innovation</span></>}
            subtitle="A carefully curated program designed to maximize learning, networking, and inspiration."
          />
        </div>

        {/* Day Tabs */}
        <div className="flex justify-center mb-10">
          <div className="glass rounded-2xl p-1.5 flex gap-1">
            {SCHEDULE.map((day, i) => (
              <button
                key={day.day}
                onClick={() => setActiveDay(i)}
                className={`relative px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  activeDay === i
                    ? 'text-white'
                    : 'text-white/50 hover:text-white/80'
                }`}
              >
                {activeDay === i && (
                  <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600" />
                )}
                <span className="relative z-10">{day.day}</span>
                <span className="relative z-10 text-white/50 text-xs ml-2 hidden sm:inline">
                  {day.date.split(',')[0]}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div
          ref={contentRef}
          className={`max-w-3xl mx-auto transition-all duration-700 ${
            contentIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[88px] sm:left-[100px] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-indigo-500/30 to-transparent hidden sm:block" />

            <div className="space-y-4">
              {currentDay.sessions.map((session, i) => {
                const style = SESSION_TYPE_STYLES[session.type] || SESSION_TYPE_STYLES.break;
                const Icon  = SESSION_ICONS[session.type] || Coffee;
                return (
                  <div
                    key={i}
                    className={`flex gap-4 sm:gap-6 group transition-all duration-300 ${
                      contentIn ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                    }`}
                    style={{ transitionDelay: contentIn ? `${i * 80}ms` : '0ms' }}
                  >
                    {/* Time */}
                    <div className="hidden sm:flex flex-col items-end w-24 pt-4 flex-shrink-0">
                      <span className="text-white/40 text-xs font-mono">{session.time}</span>
                    </div>

                    {/* Dot on timeline */}
                    <div className="hidden sm:flex flex-col items-center flex-shrink-0">
                      <div className={`w-3 h-3 rounded-full border-2 mt-5 ${
                        session.type === 'keynote'
                          ? 'border-violet-400 bg-violet-400/30'
                          : 'border-indigo-500/50 bg-dark-800'
                      }`} />
                    </div>

                    {/* Session Card */}
                    <div className={`flex-1 glass-card rounded-xl p-4 border ${style.border} group-hover:border-indigo-500/30 transition-all duration-300`}>
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1 min-w-0">
                          {/* Mobile time */}
                          <div className="flex items-center gap-2 sm:hidden mb-1">
                            <Clock size={10} className="text-white/30" />
                            <span className="text-white/30 text-xs font-mono">{session.time}</span>
                          </div>
                          <h4 className="font-semibold text-white text-sm leading-snug">{session.title}</h4>
                          {session.speaker && (
                            <p className="text-white/40 text-xs mt-1">{session.speaker}</p>
                          )}
                        </div>
                        <div className={`flex-shrink-0 flex items-center gap-1 px-2 py-1 rounded-lg ${style.bg} border ${style.border}`}>
                          <Icon size={10} className={style.text} />
                          <span className={`text-xs font-medium ${style.text} hidden sm:block`}>{style.label}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
