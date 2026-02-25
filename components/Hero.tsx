import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[680px] overflow-hidden">

      {/* Background Image */}
      <Image
  src="/hero-image.jpg"
  alt="Professional in-home relaxation massage"
  fill
  priority
  quality={100}
  sizes="100vw"
  className="object-cover"
/>
      {/* Content */}
      <div className="relative h-full flex items-start pt-[140px]">
        <div className="w-full max-w-6xl mx-auto px-10">

          <div className="max-w-xl">

            <h1 className="text-[36px] sm:text-[44px] md:text-[58px] font-normal font-[var(--font-cormorant)] leading-[1.2] text-[#6D6D62]">
              Relax & Unwind <br />
              at Home
            </h1>

            <p className="mt-6 text-[18px] font-[var(--font-montserrat)] leading-relaxed text-[#5A605D]">
              Professional in-home relaxation massage
            </p>

            <div className="mt-8">
              <a
                href="https://wa.me/917539924301"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#C2A15F] hover:bg-[#B8954E] text-white text-[15px] px-9 py-3 rounded-full transition-all duration-300 shadow-[0_3px_8px_rgba(0,0,0,0.08)]"
              >
                Book your private session
              </a>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}