export default function Navbar() {
  return (
    <header className="w-full bg-[#efe9e1] border-b border-[#E8E3DC]">
      <div className="max-w-6xl mx-auto px-6 h-[88px] flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-[#7E8A83] text-[22px] tracking-[0.04em] font-medium font-[var(--font-cormorant)]">
          Soft Hour
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-8">
          <span className="text-sm text-[#6D6D6D] tracking-wide">
            BAG : EN
          </span>

          <button className="bg-[#B89B5E] hover:bg-[#A98C4F] text-white text-sm px-6 py-2.5 rounded-full transition-all duration-300 ease-in-out">
            Book Now
          </button>
        </div>

      </div>
    </header>
  );
}
