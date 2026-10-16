/**
 * Reusable section header with eyebrow text, main title, and subtitle.
 *
 * @param {{ eyebrow: string, title: React.ReactNode, subtitle?: string, align?: 'left'|'center' }} props
 */
export default function SectionHeader({ eyebrow, title, subtitle, align = 'center' }) {
  const textAlign = align === 'left' ? 'text-left' : 'text-center';
  const maxWidth  = align === 'left' ? '' : 'max-w-2xl mx-auto';

  return (
    <div className={`${textAlign} mb-14`}>
      {eyebrow && (
        <span className="inline-block px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-semibold uppercase tracking-widest mb-4">
          {eyebrow}
        </span>
      )}
      <h2 className={`font-display font-black text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-4 ${maxWidth}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-white/50 text-base md:text-lg leading-relaxed ${maxWidth}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
