import { useEffect, useRef } from 'react';
import { Calendar, MapPin, ArrowRight, ChevronDown, Play } from 'lucide-react';
import { EVENT, STATS } from '../../constants/data';
import CountUpNumber from '../UI/CountUpNumber';

/**
 * Hero section — full-viewport landing area with animated background,
 * particle grid, headline, CTA buttons, and stat counters.
 */
export default function Hero() {
  const canvasRef = useRef(null);

  // ── Particle canvas animation ─────────────────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animFrameId;
    const particles = [];
    const PARTICLE_COUNT = 80;

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticle = () => ({
      x:     Math.random() * canvas.width,
      y:     Math.random() * canvas.height,
      vx:    (Math.random() - 0.5) * 0.4,
      vy:    (Math.random() - 0.5) * 0.4,
      size:  Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.5 + 0.1,
      color: Math.random() > 0.5 ? '99,102,241' : '236,72,153',
    });

    resize();
    for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(createParticle());

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width)  p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color},${p.alpha})`;
        ctx.fill();

        // Draw lines between nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dist = Math.hypot(p.x - q.x, p.y - q.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(99,102,241,${0.12 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });
      animFrameId = requestAnimationFrame(draw);
    };

    draw();
    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #020617 0%, #0f172a 45%, #1a0533 75%, #020617 100%)' }}
    >
      {/* ── Canvas particles ── */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* ── Radial glow blobs ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl animate-float"
          style={{ background: 'radial-gradient(circle, #4f46e5 0%, transparent 70%)' }} />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full opacity-15 blur-3xl animate-float"
          style={{ background: 'radial-gradient(circle, #db2777 0%, transparent 70%)', animationDelay: '-3s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-5 blur-3xl"
          style={{ background: 'radial-gradient(circle, #06b6d4 0%, transparent 60%)' }} />
      </div>

      {/* ── Grid overlay ── */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* ── Main Content ── */}
      <div className="container-max relative z-10 text-center px-4 py-32 md:py-40">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-medium mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
          {EVENT.organizer} Presents
        </div>

        {/* Headline */}
        <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-none mb-6 animate-fade-in-up animate-delay-100">
          <span className="block text-white">Enterprise</span>
          <span className="block text-gradient">AI Summit</span>
          <span className="block text-white text-3xl sm:text-4xl md:text-5xl mt-2 font-light opacity-70">2026</span>
        </h1>

        {/* Tagline */}
        <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-in-up animate-delay-200">
          {EVENT.tagline} — {EVENT.description.split('.')[0]}.
        </p>

        {/* Event meta pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 animate-fade-in-up animate-delay-300">
          <span className="flex items-center gap-2 px-4 py-2 rounded-full glass text-white/70 text-sm">
            <Calendar size={14} className="text-indigo-400" />
            {EVENT.date}
          </span>
          <span className="flex items-center gap-2 px-4 py-2 rounded-full glass text-white/70 text-sm">
            <MapPin size={14} className="text-pink-400" />
            {EVENT.location}
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in-up animate-delay-400">
          <a href="#register" className="btn-primary flex items-center gap-2 text-base">
            Register Now
            <ArrowRight size={18} />
          </a>
          <a href="#speakers" className="btn-outline flex items-center gap-2 text-base">
            <Play size={16} className="fill-current" />
            Meet the Speakers
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 animate-fade-in-up animate-delay-500">
          {STATS.map((stat, i) => (
            <div key={stat.label} className="glass-card rounded-2xl p-5 text-center">
              <div className="font-display font-black text-3xl md:text-4xl text-gradient mb-1">
                <CountUpNumber value={stat.value} delay={i * 150} />
              </div>
              <div className="text-white/50 text-xs md:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/30 hover:text-white/60 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={16} />
      </button>
    </section>
  );
}
