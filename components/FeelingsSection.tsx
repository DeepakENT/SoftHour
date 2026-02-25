export default function FeelingTense() {
  return (
    <section className="bg-[#efe9e1] py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* SECTION TITLE */}
        <div className="text-center">
          <h2 className="text-[32px] md:text-[40px] font-medium font-[var(--font-cormorant)] text-[#6D6D62]">
            Feeling Tense?
          </h2>

          <p className="mt-4 text-[16px] md:text-[18px] font-[var(--font-montserrat)] text-[#5A605D] max-w-2xl mx-auto leading-relaxed">
            Long days, tight muscles, mental fatigue — your body deserves a private moment of care.
          </p>
        </div>

        {/* PROBLEM GRID */}
        <div className="mt-16 grid md:grid-cols-3 gap-12 text-center">

          {/* ITEM 1 */}
          <div className="space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-white flex items-center justify-center shadow-sm">
              💆
            </div>
            <h3 className="text-lg font-medium font-[var(--font-montserrat)] text-[#4F5552]">
              Sore Muscles
            </h3>
            <p className="text-sm text-[#5A605D] leading-relaxed">
              Ease physical tension and restore flexibility in the comfort of your home.
            </p>
          </div>

          {/* ITEM 2 */}
          <div className="space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-white flex items-center justify-center shadow-sm">
              🌿
            </div>
            <h3 className="text-lg font-medium font-[var(--font-montserrat)] text-[#4F5552]">
              Stress & Fatigue
            </h3>
            <p className="text-sm text-[#5A605D] leading-relaxed">
              Release mental pressure and reconnect with calm through professional touch.
            </p>
          </div>

          {/* ITEM 3 */}
          <div className="space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-white flex items-center justify-center shadow-sm">
              🕯️
            </div>
            <h3 className="text-lg font-medium font-[var(--font-montserrat)] text-[#4F5552]">
              Need to Unwind
            </h3>
            <p className="text-sm text-[#5A605D] leading-relaxed">
              Experience a private in-home massage designed for deep relaxation.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}