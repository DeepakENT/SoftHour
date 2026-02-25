export default function WhyChooseUs() {
  return (
    <section className="w-full py-24 px-6 bg-gradient-to-b from-[#EFE9E1] to-[#E7E2DD]">

      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-[30px] md:text-[38px] font-[var(--font-cormorant)] text-[#6C6259] leading-snug">
          Why Choose Soft Hour
        </h2>

        <p className="mt-4 text-[17px] md:text-[18px] font-[var(--font-montserrat)] text-[#8B8178] max-w-2xl mx-auto">
          A private, refined in-home massage experience designed around comfort, discretion, and complete relaxation.
        </p>

        {/* Features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-14">

          <div>
            <div className="text-[#B9AFA6] text-[18px] font-medium mb-3">01</div>
            <h3 className="text-[20px] font-medium font-[var(--font-cormorant)] text-[#6C6259]">
              Complete Privacy
            </h3>
            <p className="mt-3 text-[15px] font-[var(--font-montserrat)] text-[#8B8178] leading-relaxed">
              Discreet, comfortable sessions within your own personal space.
            </p>
          </div>

          <div>
            <div className="text-[#B9AFA6] text-[18px] font-medium mb-3">02</div>
            <h3 className="text-[20px] font-medium font-[var(--font-cormorant)] text-[#6C6259]">
              Professional Therapists
            </h3>
            <p className="mt-3 text-[15px] font-[var(--font-montserrat)] text-[#8B8178] leading-relaxed">
              Skilled therapists delivering consistent, high-quality care.
            </p>
          </div>

          <div>
            <div className="text-[#B9AFA6] text-[18px] font-medium mb-3">03</div>
            <h3 className="text-[20px] font-medium font-[var(--font-cormorant)] text-[#6C6259]">
              Personalized Experience
            </h3>
            <p className="mt-3 text-[15px] font-[var(--font-montserrat)] text-[#8B8178] leading-relaxed">
              Every session tailored to your comfort and relaxation goals.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}