import Image from "next/image";

export default function Experience() {
  return (
    <section className="bg-[#F4F1EC] py-16 sm:py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 md:px-10">

        {/* Section Heading */}
        <div className="text-center mb-14 md:mb-20">
         <h2 className="text-[clamp(24px,3vw,36px)] font-[var(--font-cormorant)] text-[#4F5552] leading-[1.2]">
  Private in-home massage for{" "}
  <span>complete peace.</span>
</h2>
        </div>

        {/* Card */}
        <div className="relative bg-[#ECE7DF] rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] p-8 sm:p-10 md:p-16">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">

            {/* LEFT — Empathy */}
            <div className="flex flex-col items-center text-center">

              {/* Icon */}
              <div className="mb-8">
                <Image
                  src="/empathy-icon.png"
                  alt="Empathy"
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>

              {/* Description */}
              <p className="text-[#5A605D] leading-relaxed text-[16px] max-w-md">
                We understand how important privacy is for true relaxation.
                Our in-home massage lets you unwind completely in your own space.
              </p>

              {/* Button */}
              <div className="mt-8">
                <a
                  href="https://wa.me/917539924301"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
  inline-block
  bg-[#B89B5E]
  hover:bg-[#A98C4F]
  text-white
  text-[15px]
  px-9
  py-3.5
  rounded-full
  transition-all
  duration-300
  ease-out
  shadow-[0_4px_14px_rgba(0,0,0,0.15)]
  hover:scale-105
  hover:shadow-[0_8px_20px_rgba(0,0,0,0.25)]
"
                >
                  Book Your Private Session
                </a>
              </div>
            </div>

            {/* RIGHT — Authority */}
            <div className="flex flex-col items-center text-center">

              {/* Icon */}
              <div className="mb-8">
                <Image
                  src="/authority-icon.png"
                  alt="Authority"
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>

              {/* List */}
              <ul className="space-y-4 text-[#5A605D] text-[16px] max-w-md">
                <li className="flex items-start justify-center gap-3">
                  <span className="text-[#D6C49C] mt-[3px]">✓</span>
                  Licensed professionals
                </li>
                <li className="flex items-start justify-center gap-3">
                  <span className="text-[#D6C49C] mt-[3px]">✓</span>
                  Private, in-home setup
                </li>
                <li className="flex items-start justify-center gap-3">
                  <span className="text-[#D6C49C] mt-[3px]">✓</span>
                  Clean equipment and discreet scheduling
                </li>
              </ul>

            </div>

          </div>

          {/* Divider (Desktop Only) */}
          <div className="hidden md:block absolute top-16 bottom-16 left-1/2 w-px bg-[#8E8E85]" />

        </div>

      </div>
    </section>
  );
}