import { useState } from 'react';
import { Check, Zap, Star, Building2 } from 'lucide-react';
import { TICKETS } from '../../constants/data';
import SectionHeader from '../UI/SectionHeader';
import { useAnimateOnScroll } from '../../hooks/useAnimateOnScroll';

const TIER_ICONS = { standard: Zap, professional: Star, enterprise: Building2 };

/**
 * Individual ticket card.
 */
function TicketCard({ ticket, index, inView }) {
  const [hovered, setHovered] = useState(false);
  const Icon = TIER_ICONS[ticket.id] || Zap;

  return (
    <div
      className={`relative transition-all duration-500 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: inView ? `${index * 120}ms` : '0ms' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Popular badge */}
      {ticket.badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
          <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 text-white text-xs font-bold shadow-glow-indigo whitespace-nowrap">
            {ticket.badge}
          </span>
        </div>
      )}

      <div
        className={`relative h-full glass-card rounded-2xl overflow-hidden transition-all duration-300 ${
          ticket.highlight
            ? 'border-indigo-500/40 shadow-glow-indigo'
            : 'border-white/5'
        } ${hovered ? '-translate-y-2 shadow-card-hover' : ''}`}
      >
        {/* Gradient header */}
        <div className={`bg-gradient-to-br ${ticket.gradient} p-6`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
              <Icon size={18} className="text-white" />
            </div>
            <div>
              <div className="text-white/70 text-xs uppercase tracking-wider">Ticket</div>
              <div className="font-display font-bold text-white">{ticket.name}</div>
            </div>
          </div>
          <div className="font-display font-black text-4xl text-white">{ticket.price}</div>
          <div className="text-white/50 text-xs mt-1">per person · incl. GST</div>
        </div>

        {/* Features */}
        <div className="p-6">
          <ul className="space-y-3 mb-8">
            {ticket.features.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-indigo-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check size={10} className="text-indigo-400" />
                </div>
                <span className="text-white/60 text-sm">{f}</span>
              </li>
            ))}
          </ul>

          <button
            className={`w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
              ticket.highlight
                ? 'btn-primary'
                : 'btn-outline'
            }`}
          >
            {ticket.highlight ? '⚡ Get This Pass' : 'Select Pass'}
          </button>
        </div>

        {/* Shimmer overlay on hover */}
        {hovered && (
          <div
            className="absolute inset-0 pointer-events-none rounded-2xl opacity-30"
            style={{
              background: 'linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.03) 50%, transparent 60%)',
              backgroundSize: '200% 200%',
              animation: 'shimmer 1.5s ease infinite',
            }}
          />
        )}
      </div>
    </div>
  );
}

/**
 * Registration / Ticket section.
 */
export default function Registration() {
  const { ref: headerRef, inView: headerIn } = useAnimateOnScroll();
  const { ref: cardsRef,  inView: cardsIn  } = useAnimateOnScroll();
  const { ref: formRef,   inView: formIn   } = useAnimateOnScroll();
  const [form, setForm] = useState({ name: '', email: '', company: '', tier: 'professional' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email) setSubmitted(true);
  };

  return (
    <section id="register" className="section-padding relative overflow-hidden">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full opacity-15 blur-3xl"
          style={{ background: 'radial-gradient(ellipse, #4f46e5 0%, transparent 70%)' }} />
      </div>

      <div className="container-max">
        <div
          ref={headerRef}
          className={`transition-all duration-700 ${headerIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <SectionHeader
            eyebrow="Register Now"
            title={<>Secure Your <span className="text-gradient">Spot Today</span></>}
            subtitle="Early-bird pricing available for a limited time. Join 2,500+ AI leaders at the most anticipated event of 2026."
          />
        </div>

        {/* Ticket Cards */}
        <div
          ref={cardsRef}
          className="grid sm:grid-cols-3 gap-6 mb-20 items-end"
        >
          {TICKETS.map((ticket, i) => (
            <TicketCard key={ticket.id} ticket={ticket} index={i} inView={cardsIn} />
          ))}
        </div>

        {/* Quick Registration Form */}
        <div
          ref={formRef}
          className={`max-w-xl mx-auto transition-all duration-700 ${formIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="glass-card rounded-3xl p-8 border border-indigo-500/20">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-indigo-500/20 flex items-center justify-center mx-auto mb-4 animate-bounce">
                  <Check size={32} className="text-indigo-400" />
                </div>
                <h3 className="font-display font-bold text-white text-2xl mb-2">You're on the list! 🎉</h3>
                <p className="text-white/50">We'll send your confirmation to <strong className="text-white">{form.email}</strong></p>
              </div>
            ) : (
              <>
                <h3 className="font-display font-bold text-white text-xl mb-1">Reserve Your Pass</h3>
                <p className="text-white/40 text-sm mb-6">Fill in your details and we'll get back to you within 24 hours.</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {[
                    { name: 'name',    label: 'Full Name',        type: 'text',  placeholder: 'Jane Doe' },
                    { name: 'email',   label: 'Work Email',       type: 'email', placeholder: 'jane@company.com' },
                    { name: 'company', label: 'Company (optional)', type: 'text', placeholder: 'Acme Corp' },
                  ].map((field) => (
                    <div key={field.name}>
                      <label className="block text-white/50 text-xs mb-1.5 font-medium">{field.label}</label>
                      <input
                        type={field.type}
                        name={field.name}
                        value={form[field.name]}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        required={field.name !== 'company'}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/20
                          focus:outline-none focus:border-indigo-500/60 focus:bg-indigo-500/5 transition-all duration-200"
                      />
                    </div>
                  ))}

                  <div>
                    <label className="block text-white/50 text-xs mb-1.5 font-medium">Ticket Tier</label>
                    <select
                      name="tier"
                      value={form.tier}
                      onChange={handleChange}
                      className="w-full bg-dark-800 border border-white/10 rounded-xl px-4 py-3 text-white text-sm
                        focus:outline-none focus:border-indigo-500/60 transition-all duration-200 appearance-none cursor-pointer"
                    >
                      {TICKETS.map((t) => (
                        <option key={t.id} value={t.id}>
                          {t.name} — {t.price}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button type="submit" className="btn-primary w-full text-base mt-2">
                    Reserve My Spot →
                  </button>

                  <p className="text-center text-white/30 text-xs">
                    No spam. Unsubscribe anytime. Your data is safe with us.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
