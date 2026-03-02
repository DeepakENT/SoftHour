import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">

      {/* Background Image */}
      <Image
        src="/hero-image_1.jpg"
        alt="Professional in-home relaxation massage"
        fill
        priority
        quality={100}
        sizes="100vw"
        className="
          object-cover
          object-[80%_center]
          sm:object-[75%_center]
          md:object-center
        "
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/30 sm:bg-white/20 md:bg-white/10" />

      {/* Content */}
      <div className="relative flex items-center min-h-screen">

        <div className="w-full max-w-6xl mx-auto px-6 md:px-10">

          <div className="max-w-2xl text-left">

            {/* Headline */}
            <h1
              className="
                text-[clamp(30px,6vw,64px)]
                font-[var(--font-cormorant)]
                leading-[1.08]
                tracking-[-0.015em]
                text-[#4F5552]
              "
            >
              Deep rest at home —
              <span className="block">
                fully private,
              </span>
              <span className="block">
                Fully yours.
              </span>
            </h1>

            {/* Subtext */}
            <p
              className="
                mt-6
                text-[clamp(15px,2.2vw,20px)]
                font-[var(--font-montserrat)]
                text-[#5A605D]
                leading-relaxed
              "
            >
              Professional in-home relaxation massage
            </p>

            {/* CTA */}
            <div className="mt-10">
              <a
                href="https://wa.me/917539924301?text=Hi%20I%20want%20to%20book%20a%20massage"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  justify-center
                  bg-[#C2A15F]
                  hover:bg-[#B8954E]
                  text-white
                  text-[16px]
                  sm:text-[18px]
                  px-10
                  sm:px-12
                  py-4
                  sm:py-5
                  rounded-full
                  transition-all
                  duration-300
                  ease-out
                  hover:scale-105
                  hover:shadow-2xl
                  active:scale-95
                "
              >
                Book Your Private Session
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}