import Image from "next/image";

export default function Services() {
  return (
    <section className="w-full bg-[#efe9e1] py-20 px-6">

      {/* Container */}
      <div className="max-w-6xl mx-auto">

        {/* Section Title */}
        <div className="flex items-center justify-center gap-6 mb-14">
          <div className="h-[1px] w-16 bg-[#D8D0C9]" />
          <h2 className="text-[30px] md:text-[38px] font-[var(--font-cormorant)] text-[#6C6259]">
            Our Services
          </h2>
          <div className="h-[1px] w-16 bg-[#D8D0C9]" />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.05)] overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]">

            <div className="relative h-[220px]">
              <Image
                src="/service1.jpg"
                alt="Swedish massage"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6 text-center">
              <h3 className="text-[20px] font-medium font-[var(--font-cormorant)] text-[#6C6259]">
                Swedish Full Body Massage
              </h3>
              <p className="mt-2 text-[15px] font-[var(--font-montserrat)] text-[#8B8178]">
                60 - 90 min (Flexi) | ₹2000
              </p>
            </div>

          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.05)] overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]">

            <div className="relative h-[220px]">
              <Image
                src="/service2.jpg"
                alt="Lomi Lomi massage"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6 text-center">
              <h3 className="text-[20px] font-medium font-[var(--font-cormorant)] text-[#6C6259]">
                Lomi Lomi Full Body Massage
              </h3>
              <p className="mt-2 text-[15px] font-[var(--font-montserrat)] text-[#8B8178]">
                60 - 90 min (Flexi) | ₹2500
              </p>
            </div>

          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.05)] overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]">

            <div className="relative h-[220px]">
              <Image
                src="/service3.jpg"
                alt="Head and Neck Massage"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6 text-center">
              <h3 className="text-[20px] font-medium font-[var(--font-cormorant)] text-[#6C6259]">
                Head and Neck Massage
              </h3>
              <p className="mt-2 text-[15px] font-[var(--font-montserrat)] text-[#8B8178]">
                60 min (Flexi) | ₹1500
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}