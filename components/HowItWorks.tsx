export default function HowItWorks() {
  return (
    <section className="w-full bg-[#efe9e1] py-24 px-6">

      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-[30px] md:text-[38px] font-[var(--font-cormorant)] text-[#6C6259]">
          How It Works
        </h2>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-14">

          {/* Step 1 */}
          <div className="flex flex-col items-center">

            <div className="w-12 h-12 rounded-full bg-[#D6CEC5] flex items-center justify-center text-[#fffbf7] font-medium">
              1
            </div>

            <h3 className="mt-6 text-[20px] font-medium font-[var(--font-cormorant)] text-[#6C6259]">
              Book Your Session
            </h3>

            <p className="mt-3 text-[15px] font-[var(--font-montserrat)] text-[#8B8178] max-w-xs">
              Message us on WhatsApp to schedule your preferred time.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center">

            <div className="w-12 h-12 rounded-full bg-[#D6CEC5] flex items-center justify-center text-[#fffbf7] font-medium">
              2
            </div>

            <h3 className="mt-6 text-[20px] font-medium font-[var(--font-cormorant)] text-[#6C6259]">
              Therapist Arrives
            </h3>

            <p className="mt-3 text-[15px] font-[var(--font-montserrat)] text-[#8B8178] max-w-xs">
              A professional therapist arrives at your home fully prepared.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center">

            <div className="w-12 h-12 rounded-full bg-[#D6CEC5] flex items-center justify-center text-[#fffbf7] font-medium">
              3
            </div>

            <h3 className="mt-6 text-[20px] font-medium font-[var(--font-cormorant)] text-[#6C6259]">
              Relax & Recharge
            </h3>

            <p className="mt-3 text-[15px] font-[var(--font-montserrat)] text-[#8B8178] max-w-xs">
              Enjoy a calm and private massage experience.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}