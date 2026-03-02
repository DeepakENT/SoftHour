import Image from "next/image";

export default function FeelingTense() {
  return (
    <section className="bg-[#ECE7DF] py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* SECTION TITLE */}
        <div className="text-center">
          <h2 className="text-[32px] md:text-[40px] font-medium font-[var(--font-cormorant)] text-[#6D6D62]">
            Hard to relax when others are around?
          </h2>

          <p className="mt-4 text-[16px] md:text-[18px] font-[var(--font-montserrat)] text-[#5A605D] max-w-2xl mx-auto leading-relaxed">
            Spa visits can feel exposing and uneasy. Relaxation shouldn't require exposure.
            <br />
            Enjoy complete privacy and rest in your own space
          </p>
        </div>

        {/* PROBLEM GRID */}
        <div className="mt-16 grid md:grid-cols-3 gap-12 text-center">

          {/* ITEM 1 */}
          <div className="space-y-4">
           <div className="w-16 h-16 mx-auto flex items-center justify-center">
              <Image
                src="/group-icon.png"
                alt="Crowded Spa Environment"
                width={56}
                height={56}
              />
            </div>
            <h3 className="text-lg font-medium font-[var(--font-montserrat)] text-[#4F5552]">
              No Crowded Spaces
            </h3>
            <p className="text-sm text-[#5A605D] leading-relaxed">
              Avoid waiting rooms and shared spa environments.
            </p>
          </div>

          {/* ITEM 2 */}
          <div className="space-y-4">
            <div className="w-16 h-16 mx-auto flex items-center justify-center">
              <Image
                src="/privacy-eye-icon.png"
                alt="Complete Privacy"
                width={56}
                height={56}
              />
            </div>
            <h3 className="text-lg font-medium font-[var(--font-montserrat)] text-[#4F5552]">
              Complete Privacy
            </h3>
            <p className="text-sm text-[#5A605D] leading-relaxed">
              Relax without feeling watched or exposed.
            </p>
          </div>

          {/* ITEM 3 */}
          <div className="space-y-4">
            <div className="w-16 h-16 mx-auto flex items-center justify-center">
              <Image
                src="/secure-door-icon.png"
                alt="Secure Home Environment"
                width={56}
                height={56}
              />
            </div>
            <h3 className="text-lg font-medium font-[var(--font-montserrat)] text-[#4F5552]">
              Safe & Secure
            </h3>
            <p className="text-sm text-[#5A605D] leading-relaxed">
              Stay in your own locked space, fully in control.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}