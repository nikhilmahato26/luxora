/**
 * Logo.jsx
 * ---------------------------------------------------------------------------
 * Brand wordmark for Luxora Holidays. This is an inline SVG so it stays crisp
 * at any size and inherits the brand palette.
 *
 * TO SWAP IN THE REAL LOGO:
 *   1. Drop your file into src/assets/logos/ (e.g. logo.svg or logo.png)
 *   2. `import logoUrl from '../../assets/logos/logo.svg'`
 *   3. Replace the <svg> mark below with <img src={logoUrl} ... />
 * The `light` prop renders a white version for use over dark backgrounds.
 * ---------------------------------------------------------------------------
 */
export default function Logo({ light = false, className = '' }) {
  const wordColor = light ? '#FFFFFF' : '#14532D';
  const subColor = light ? 'rgba(255,255,255,0.7)' : '#5B6B62';

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      {/* Emblem */}
      <span className="relative inline-flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-soft overflow-hidden">
        <img src="/logo-icon.png" alt="Luxora Holidays icon" className="h-20 w-20 object-contain" />
      </span>

      {/* Wordmark */}
      <span className="flex flex-col leading-none">
        <span
          className="font-display text-[1.35rem] font-semibold tracking-tight"
          style={{ color: wordColor }}
        >
          Luxora
          <span className="text-gold"> Holidays</span>
        </span>
        
      </span>
    </span>
  );
}
