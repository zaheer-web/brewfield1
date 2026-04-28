import { Coffee, Sparkles, Crown, HeartHandshake } from "lucide-react";
import { useInView } from "../useInView";

export default function WhyChoose() {
  const [ref, visible] = useInView();

  const cards = [
    {
      icon: <Coffee size={24} />,
      title: "Signature Blends",
      desc: "Rich Italian beans crafted for a refined taste."
    },
    {
      icon: <Sparkles size={24} />,
      title: "Luxury Ambience",
      desc: "Designed for elegance and comfort."
    },
    {
      icon: <Crown size={24} />,
      title: "Premium Experience",
      desc: "Every detail crafted with perfection."
    },
    {
      icon: <HeartHandshake size={24} />,
      title: "Customer First",
      desc: "Hospitality that feels personal."
    }
  ];

  return (
    <section className="relative bg-black py-[120px] px-6 md:px-16 overflow-hidden">

      {/* GOLD GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,169,106,0.08),transparent_70%)]" />

      <div ref={ref} className="relative z-10 max-w-[1200px] mx-auto">

        {/* TITLE */}
        <h2
          className={`text-[34px] md:text-[48px] font-serif text-white text-center mb-16 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Why <span className="text-[#C8A96A]">Choose Us?</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* 🔥 LEFT (CARDS) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            {cards.map((item, i) => (
              <div
                key={i}
                className={`relative p-6 border border-[#C8A96A]/20 bg-[rgba(20,15,10,0.7)] backdrop-blur-xl overflow-hidden group transition-all duration-700 ${
                  visible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-20"
                }`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >

                {/* 🔥 HOVER GLOW */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_center,rgba(200,169,106,0.15),transparent_70%)]" />

                <div className="relative z-10">
                  <div className="text-[#C8A96A] mb-3">
                    {item.icon}
                  </div>

                  <h3 className="text-white text-[16px] md:text-[18px] mb-2">
                    {item.title}
                  </h3>

                  <p className="text-white/60 text-[13px] leading-[1.7]">
                    {item.desc}
                  </p>
                </div>

                {/* BORDER ANIMATION */}
                <div className="absolute inset-0 border border-transparent group-hover:border-[#C8A96A] transition duration-500" />
              </div>
            ))}

          </div>

          {/* 🖼 RIGHT (PREMIUM IMAGE STACK) */}
          <div
            className={`grid grid-cols-2 gap-5 transition-all duration-1000 ${
              visible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-20"
            }`}
          >

            {/* BIG IMAGE */}
            <div className="col-span-2 relative group overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
                className="w-full h-[260px] object-cover transition duration-700 group-hover:scale-110 brightness-[0.85]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(200,169,106,0.15),transparent)]"></div>
            </div>

            {/* SMALL IMAGES */}
            {[
              "https://images.unsplash.com/photo-1511920170033-f8396924c348",
              "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
            ].map((src, i) => (
              <div key={i} className="relative group overflow-hidden">
                <img
                  src={src}
                  className="w-full h-[160px] object-cover transition duration-700 group-hover:scale-110 brightness-[0.85]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(200,169,106,0.15),transparent)]"></div>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}