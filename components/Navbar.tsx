export default function Navbar() {
  return (
    <header className="w-full bg-[#F5F2ED] border-b border-[#E8E3DC]">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-[#A3A391] text-xl tracking-wide font-medium">
          Soft Hour
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-6">
          <span className="text-sm text-[#6D6D6D]">
            BAG : EN
          </span>

          <button className="bg-[#B89B5E] hover:bg-[#A98C4F] text-white text-sm px-5 py-2 rounded-full transition duration-300">
            Book Now
          </button>
        </div>

      </div>
    </header>
  );
}
