import Image from "next/image";

export default function DeepPrivateCreates() {
  return (
    <section className="relative bg-[#F4F1EC] py-16 sm:py-20 md:py-28 overflow-hidden">

      {/* Subtle texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none 
        bg-[radial-gradient(circle_at_25%_25%,#000_1px,transparent_1px)] 
        bg-[length:60px_60px]"
      />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14 md:mb-20">
          <h2 className="text-[clamp(24px,3vw,36px)] font-[var(--font-cormorant)] text-[#4F5552] leading-[1.2]">
            What Deep Private Rest Creates
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* LEFT SIDE — Benefits */}
          <div>
            <ul className="space-y-6 text-[#5A605D] text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed">

              {[
                "You wake steady and clear.",
                "Your home feels warm and lived-in — not clinical.",
                "Your body feels lighter.",
                "Your week feels more grounded."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-7 h-7 flex items-center justify-center rounded-full bg-[#C2A15F] text-white text-sm shadow-sm mt-[3px]">
                    ✓
                  </div>
                  <span>{item}</span>
                </li>
              ))}

            </ul>
          </div>

          {/* RIGHT SIDE — Image */}
          <div className="relative group">
            <div className="rounded-2xl overflow-hidden shadow-[0_18px_45px_rgba(0,0,0,0.08)]">
              <Image
                src="/deep-rest.jpg"
                alt="Woman waking peacefully at home"
                width={700}
                height={500}
                className="
                  object-cover
                  w-full
                  h-full
                  transition-transform
                  duration-700
                  ease-out
                  md:group-hover:scale-[1.03]
                "
              />
            </div>
          </div>

        </div>

        {/* Closing Identity Line */}
        <div className="mt-16 md:mt-20 text-center">
  <p className="
    text-[clamp(18px,2.5vw,24px)]
    font-[var(--font-cormorant)]
    font-medium
    text-[#4F5552]
    leading-[1.3]
    max-w-2xl
    mx-auto
  ">
    You return to your steady, grounded self.
  </p>
</div>

      </div>
    </section>
  );
}