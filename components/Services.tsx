import Image from "next/image";

export default function Services() {
  return (
    <section className="w-full bg-[#efe9e1] py-20 md:py-28 px-6">

      {/* Container */}
      <div className="max-w-6xl mx-auto">

        {/* Section Title */}
        <div className="flex items-center justify-center gap-4 md:gap-6 mb-14 md:mb-20">
          <div className="h-[1px] w-10 md:w-16 bg-[#D8D0C9]" />
          <h2 className="text-[clamp(26px,4vw,38px)] font-[var(--font-cormorant)] text-[#6C6259] text-center">
            Our Services
          </h2>
          <div className="h-[1px] w-10 md:w-16 bg-[#D8D0C9]" />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">

          {[
            {
              img: "/service1.jpg",
              title: "Swedish Full Body Massage",
              duration: "60 – 90 min · Flexible session",
              price: "₹ 2,000",
            },
            {
              img: "/service2.jpg",
              title: "Lomi Lomi Full Body Massage",
              duration: "60 – 90 min · Flexible session",
              price: "₹ 2,500",
            },
            {
              img: "/service3.jpg",
              title: "Head and Neck Massage",
              duration: "60 min session",
              price: "₹ 1,500",
            },
          ].map((service, index) => (
            <div
  key={index}
  className="bg-[#F4F1EC] rounded-2xl border border-[#E8E3DA] overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)]"
>
  {/* Image */}
  <div className="relative h-[220px] sm:h-[240px] md:h-[260px]">
    <Image
      src={service.img}
      alt={service.title}
      fill
      className="object-cover"
    />
  </div>

              {/* Content */}
              <div className="px-6 pt-8 pb-10 text-center">

                <h3 className="text-[clamp(18px,2.5vw,22px)] font-medium font-[var(--font-cormorant)] text-[#5C534A]">
                  {service.title}
                </h3>

                <p className="mt-3 text-[14px] font-[var(--font-montserrat)] text-[#9B9488] tracking-wide">
                  {service.duration}
                </p>

                {/* Gold Accent Line */}
                <div className="mx-auto mt-6 mb-4 h-[1px] w-12 bg-[#C6A45F]" />

                {/* Price */}
                <p className="text-[24px] font-[var(--font-cormorant)] text-[#4F5552]">
                  {service.price}
                </p>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}