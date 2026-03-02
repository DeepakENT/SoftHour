export default function Stakes() {
  return (
    <section className="relative bg-[#ECE7DF] py-16 sm:py-20 md:py-28 overflow-hidden">

      {/* Subtle Background Texture */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(circle_at_20%_30%,#000_1px,transparent_1px)] bg-[length:40px_40px]" />

      <div className="relative max-w-6xl mx-auto px-6">

        <div className="rounded-2xl overflow-hidden border border-[#E3DBCF]">

          <div className="grid grid-cols-1 md:grid-cols-2">

            {/* LEFT SIDE — Muted (Tension) */}
            <div className="bg-[#F2EEE7] p-8 sm:p-10 md:p-14 opacity-80 md:opacity-90">
              <h3 className="text-[20px] md:text-[22px] font-[var(--font-cormorant)] text-[#6B6B63] mb-8">
                Still Resting in Shared Spaces?
              </h3>

              <ul className="space-y-6 text-[#7A7A72] text-[15px] sm:text-[16px]">
                {[
                  "You stay slightly guarded.",
                  "Rest feels incomplete.",
                  "Shared spaces interrupt your calm."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-7 h-7 flex items-center justify-center rounded-full bg-[#DDD4C5] text-[#8C8478] text-sm">
                      ›
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT SIDE — Elevated (Relief) */}
            <div className="bg-[#F8F5EE] p-8 sm:p-10 md:p-14 relative">
              <h3 className="text-[20px] md:text-[22px] font-[var(--font-cormorant)] text-[#4F5552] mb-8">
                Experience Deep Rest in Your Own Home
              </h3>

              <ul className="space-y-6 text-[#5A605D] text-[15px] sm:text-[16px]">
                {[
                  "Deep, uninterrupted rest in your own space.",
                  "Total control of your environment.",
                  "Calm that carries into your week."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-7 h-7 flex items-center justify-center rounded-full bg-[#C2A15F] text-white text-sm shadow-sm">
                      ✓
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}