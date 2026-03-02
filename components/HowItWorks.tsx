import Image from "next/image";

export default function HowItWorks() {
  return (
    <section className="bg-[#F4F1EC] py-16 sm:py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Heading */}
       <div className="text-center mb-16">
  <h2
    className="
      text-[clamp(30px,3vw,42px)]
      font-[var(--font-cormorant)]
      font-semibold
      text-[#4F5552]
      leading-[1.2]
    "
  >
    How It Works
  </h2>

  <div className="mt-6 h-px bg-[#E5DFD6] w-full max-w-4xl mx-auto" />
</div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-10 text-center">

          {/* Step 1 */}
          <div className="flex flex-col items-center px-4">
            <h3 className="
              text-[18px] md:text-[20px]
              font-[var(--font-montserrat)]
              font-medium
              text-[#4F5552]
              mb-6
            ">
              1. Book Your Time
            </h3>

            <div className="mb-6">
              <Image
                src="/step-book.png"
                alt="Book your time"
                width={150}
                height={150}
              />
            </div>

            <p className="
              text-[#5A605D]
              text-[15px] sm:text-[16px]
              leading-relaxed
              font-[var(--font-montserrat)]
              max-w-xs
            ">
              Click “Book Your Private Session” and schedule your preferred
              time via WhatsApp.
            </p>
          </div>

          {/* Divider 1 */}
          <div className="hidden md:block absolute left-1/3 top-10 bottom-10 w-px bg-[#E5DFD6]" />

          {/* Step 2 */}
          <div className="flex flex-col items-center px-4">
            <h3 className="
              text-[18px] md:text-[20px]
              font-[var(--font-montserrat)]
              font-medium
              text-[#4F5552]
              mb-6
            ">
              2. We Arrive Discreetly
            </h3>

            <div className="mb-6">
              <Image
                src="/step-arrive.png"
                alt="Therapist arrives discreetly"
                width={170}
                height={170}
              />
            </div>

            <p className="
              text-[#5A605D]
              text-[15px] sm:text-[16px]
              leading-relaxed
              font-[var(--font-montserrat)]
              max-w-xs
            ">
              Our licensed therapist arrives at your home and sets up a fully
              private session in your space.
            </p>
          </div>

          {/* Divider 2 */}
          <div className="hidden md:block absolute left-2/3 top-10 bottom-10 w-px bg-[#E5DFD6]" />

          {/* Step 3 */}
          <div className="flex flex-col items-center px-4">
            <h3 className="
              text-[18px] md:text-[20px]
              font-[var(--font-montserrat)]
              font-medium
              text-[#4F5552]
              mb-6
            ">
              3. Relax & Recharge
            </h3>

            <div className="mb-6">
              <Image
                src="/step-relax.png"
                alt="Relax and recharge"
                width={200}
                height={200}
              />
            </div>

            <p className="
              text-[#5A605D]
              text-[15px] sm:text-[16px]
              leading-relaxed
              font-[var(--font-montserrat)]
              max-w-xs
            ">
              Enjoy uninterrupted rest. We pack up quietly when finished —
              payment is completed after the session.
            </p>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="mt-16 h-px bg-[#E5DFD6] w-full max-w-4xl mx-auto" />

        {/* Benefits */}
        <div className="
          mt-12
          flex flex-col
          items-center
          space-y-5
          font-[var(--font-montserrat)]
        ">
          <div className="flex items-center gap-3 text-[#4F5552] text-[16px]">
            <span className="text-[#7E8C7A]">✓</span>
            Private In-Home Setup
          </div>

          <div className="flex items-center gap-3 text-[#4F5552] text-[16px]">
            <span className="text-[#7E8C7A]">✓</span>
            No Shared Spaces
          </div>

          <div className="flex items-center gap-3 text-[#4F5552] text-[16px]">
            <span className="text-[#7E8C7A]">✓</span>
            Payment After Session
          </div>
        </div>

      </div>

<div className="mt-16 md:mt-20 text-center">
  <h2
    className="
      text-[clamp(26px,4vw,48px)]
      font-[var(--font-cormorant)]
      leading-[1.15]
      tracking-[-0.01em]
      text-[#4F5552]
    "
  >
    Ready to rest — fully on your terms?
  </h2>
</div>





{/* CTA */}
<div className="mt-12 text-center">
  <a
    href="https://wa.me/917539924301"
    target="_blank"
    rel="noopener noreferrer"
    className="
      inline-block
      bg-[#C2A15F]
      hover:bg-[#B8954E]
      text-white
      text-[15px]
      px-10
      py-4
      rounded-full
      transition
      duration-300
      shadow-[0_4px_14px_rgba(0,0,0,0.12)]
    "
  >
    Book Your Private Session
  </a>
</div>
      
    </section>
  );
}