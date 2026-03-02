export default function BottomCTA() {
  return (
    <section className="w-full bg-[#ECE7DF] py-28 px-6">

      <div className="max-w-3xl mx-auto text-center">

        {/* Heading */}
        <h2 className="
          text-[clamp(28px,4vw,44px)]
          font-[var(--font-cormorant)]
          text-[#4F5552]
          leading-[1.15]
        ">
          Choose Calm
        </h2>

        {/* Subheading */}
        <p className="
          mt-6
          text-[clamp(16px,2vw,19px)]
          font-[var(--font-montserrat)]
          text-[#5A605D]
          tracking-wide
        ">
          Your space. Your time. Fully yours.
        </p>

        {/* Button */}
        <div className="mt-14">
          <a
            href="https://wa.me/917539924301"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-block
              bg-[#C2A15F]
              hover:bg-[#B28F4D]
              text-white
              text-[16px] sm:text-[18px]
              font-[var(--font-montserrat)]
              px-12
              py-5
              rounded-full
              shadow-[0_10px_30px_rgba(0,0,0,0.12)]
              transition-all
              duration-300
            "
          >
            Book Your Private Session
          </a>
        </div>

      </div>
    </section>
  );
}