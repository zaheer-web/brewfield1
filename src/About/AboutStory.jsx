import { Coffee, Gem, Landmark } from "lucide-react";
import { useInView } from "../useInView";
import img from "../img/bg.avif";

export default function AboutStory() {
  const [ref, visible] = useInView({ threshold: 0.3 });

  return (
    <section className="relative bg-black py-[120px] px-6 md:px-16 overflow-hidden">

      {/* GOLD GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(200,169,106,0.08),transparent_60%)] pointer-events-none" />

      <div
        ref={ref}
        className="relative z-10 max-w-[1200px] mx-auto grid md:grid-cols-2 gap-16 items-center"
      >

        {/* LEFT CONTENT */}
        <div
          className={`transition-all duration-1000 ${
            visible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-20"
          }`}
        >
          <h2 className="text-[36px] md:text-[60px] font-serif text-white mb-3 leading-tight">
            Our <span className="text-[#C8A96A]">Story</span>
          </h2>

          <div className="w-[100px] h-[2px] bg-[#C8A96A] mb-6 "></div>

          {/* ✨ IMPROVED TEXT */}
          <p className="text-white/70 leading-[1.9] mb-6 text-[15px] md:text-[18px]">
            Born from a passion for refined coffee culture, 
            <span className="text-[#C8A96A]"> Cafe Brewfield</span> brings the timeless elegance of Italian cafés 
            into the modern lifestyle of India. Every detail — from our beans to our ambiance — is crafted to deliver 
            a truly elevated experience.
          </p>

          {/* ICON FEATURES */}
          <div className="grid grid-cols-3 gap-6 border-y border-[#C8A96A]/20 py-6 mb-6">

            {[
              {
                icon: <Coffee size={30} />,
                title: "Signature Blends",
                desc: "Handcrafted Italian-style coffee"
              },
              {
                icon: <Landmark size={30} />,
                title: "Luxury Space",
                desc: "Elegant & immersive interiors"
              },
              {
                icon: <Gem size={30} />,
                title: "Premium Quality",
                desc: "Crafted with finest ingredients"
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`text-center transition-all duration-700 ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="flex justify-center mb-3 text-[#C8A96A]">
                  {item.icon}
                </div>
                <p className="text-white text-[15px] font-medium">
                  {item.title}
                </p>
                <p className="text-white/50 text-[13px] mt-1">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <p className="text-white/70 leading-[1.9] text-[15px] md:text-[16px]">
            At Brewfield, we go beyond serving coffee — we create an atmosphere of comfort, elegance, and indulgence. 
            A place where every cup tells a story and every visit feels timeless.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div
          className={`relative transition-all duration-1000 ${
            visible
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-20"
          }`}
        >
          <div className="relative overflow-hidden rounded-xl border border-[#C8A96A]/20 shadow-[0_30px_80px_rgba(0,0,0,0.9)] group">

            <img
              src={img}
              alt="coffee"
              className="w-full h-full object-cover transition duration-[1200ms] group-hover:scale-110 brightness-[0.85]"
            />

            {/* GOLD LIGHT */}
            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(200,169,106,0.12),transparent_50%)] opacity-70"></div>
          </div>

          <p
            className={`text-white/60 text-[13px] mt-5 leading-[1.7] transition-all duration-1000 delay-300 ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Inspired by European café traditions, Brewfield offers a refined escape 
            where design, flavor, and experience come together beautifully.
          </p>
        </div>

      </div>
    </section>
  );
}