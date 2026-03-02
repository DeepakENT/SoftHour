export default function Navbar() {
  return (
    <header className="w-full bg-[#F4F1EC] border-b border-[#E8E3DC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-[70px] sm:h-[80px] flex items-center justify-between">

        {/* Logo Section */}
        <div className="flex items-center gap-2 sm:gap-4">

          {/* SVG Logo */}
          <svg
            viewBox="0 0 100 100"
            className="w-[40px] h-[40px] sm:w-[56px] sm:h-[56px] shrink-0"
          >
            <rect
              x="12"
              y="12"
              width="76"
              height="76"
              fill="none"
              stroke="#5A5550"
              strokeWidth="1.8"
            />

            <line x1="50" y1="14" x2="50" y2="22" stroke="#5A5550" strokeWidth="1.5" />
            <line x1="50" y1="78" x2="50" y2="86" stroke="#5A5550" strokeWidth="1.5" />
            <line x1="14" y1="50" x2="22" y2="50" stroke="#5A5550" strokeWidth="1.5" />
            <line x1="78" y1="50" x2="86" y2="50" stroke="#5A5550" strokeWidth="1.5" />

            <text
              x="50"
              y="62"
              textAnchor="middle"
              fontSize="48"
              fontFamily="Cormorant, serif"
              fill="#5A5550"
              letterSpacing="3"
            >
              SH
            </text>

            <circle cx="50" cy="45" r="4" fill="#C6A45F" />

            <line
              x1="50"
              y1="45"
              x2="66"
              y2="28"
              stroke="#C6A45F"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>

          {/* Brand Text */}
          <div className="leading-tight">
            <span className="block text-[18px] sm:text-[26px] font-[var(--font-cormorant)] text-[#4F5552] tracking-[0.04em]">
              Soft Hour
            </span>
            <span className="hidden sm:block text-[10px] uppercase tracking-[0.25em] text-[#9B9488]">
              In-Home Massage
            </span>
          </div>
        </div>

        {/* CTA Button */}
        <a
  href="https://wa.me/917539924301?text=Hi%20I%20want%20to%20book%20a%20massage"
  target="_blank"
  rel="noopener noreferrer"
  className="
    bg-[#B89B5E]
    hover:bg-[#A98C4F]
    text-white
    text-[13px] sm:text-sm
    px-4 sm:px-6
    py-2 sm:py-2.5
    rounded-full
    transition-all
    duration-300
    ease-in-out
    hover:scale-105
    hover:shadow-lg
    active:scale-95
  "
>
  Book Now
</a>

      </div>
    </header>
  );
}