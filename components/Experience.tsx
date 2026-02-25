import Image from "next/image";

export default function Experience() {
  return (
    <section className="relative w-full h-[380px] md:h-[440px] overflow-hidden">

      {/* Background Image */}
      <Image
        src="/experience-image.jpg"
        alt="Spa candles and relaxation setup"
        fill
        priority
        className="object-cover"
      />

      {/* Soft Top Gradient Transition */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#B1A79E] via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-start justify-center pt-[110px] text-center px-6">

        <div>
          <h2 className="text-[30px] md:text-[38px] italic font-[var(--font-cormorant)] text-[#7A6F64] leading-[1.25]">
            Experience True Relaxation
          </h2>

          <p className="mt-5 text-[17px] md:text-[19px] font-[var(--font-montserrat)] text-[#7A6F64]">
            Healing touch, soothing oils, tranquil ambiance
          </p>
        </div>

      </div>

    </section>
  );
}