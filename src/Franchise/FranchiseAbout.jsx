import { useEffect, useState } from "react";
import { useInView } from "../useInView";

export default function FranchiseAbout() {
  const [ref, visible] = useInView({ threshold: 0.2 });

  // 🔥 IMAGES
  const images = [
    "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
    "https://images.unsplash.com/photo-1511920170033-f8396924c348",
    "https://images.unsplash.com/photo-1461023058943-07fcbe16d735",
  ];

  const [index, setIndex] = useState(0);

  // 🔁 AUTO CHANGE
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-black py-[120px] px-6 md:px-16 overflow-hidden">

      {/* ✨ BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(200,169,106,0.07),transparent_60%)]"></div>

      <div
        ref={ref}
        className="relative z-10 max-w-[1200px] mx-auto grid md:grid-cols-2 gap-16 items-center"
      >

        {/* 🔥 LEFT CONTENT */}
        <div
          className={`transition-all duration-1000 ${
            visible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-16"
          }`}
        >

          <h2 className="text-[34px] md:text-[42px] font-serif text-white mb-4 leading-tight">
            About <span className="text-[#C8A96A]">Cafe Brewfield</span>
          </h2>

          <div className="w-[70px] h-[2px] bg-[#C8A96A] mb-6"></div>

          <p className="text-white/70 leading-[1.9] mb-5 text-[14px] md:text-[15px]">
            Cafe Brewfield is a premium Italian Tea & Coffee House crafted to
            deliver refined café experiences. With a growing presence in
            Ghaziabad and Delhi, we are expanding rapidly across NCR — built on
            quality, consistency, and a luxurious atmosphere.
          </p>

          <div className="relative pl-5 mt-6">
            <div className="absolute left-0 top-0 w-[2px] h-full bg-[#C8A96A]"></div>

            <p className="text-white/90 text-[15px] md:text-[16px] leading-[1.8] font-medium">
              We’re not just opening cafés — we’re building a brand that people
              trust, experience, and return to.
            </p>
          </div>

        </div>

        {/* 🖼 RIGHT IMAGE WITH PREMIUM EFFECT */}
        <div
          className={`relative transition-all duration-1000 ${
            visible
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-16"
          }`}
        >

          <div className="relative w-full h-[420px] overflow-hidden border border-[#C8A96A]/20 group perspective">

            {/* 🔁 IMAGE SWITCH */}
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
                  i === index
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-110"
                } group-hover:scale-110 group-hover:rotate-[1deg] group-hover:-translate-y-2 brightness-[0.9]`}
              />
            ))}

            {/* 🔥 GOLD SWEEP */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -left-full top-0 w-[120%] h-full bg-[linear-gradient(120deg,transparent,rgba(200,169,106,0.25),transparent)] 
              skew-x-[-20deg] group-hover:left-full transition-all duration-1000"></div>
            </div>

            {/* 🔥 GLOW */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle,rgba(200,169,106,0.2),transparent_70%)]"></div>

            {/* SOFT DARK FADE */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-60"></div>

          </div>

          {/* FLOATING FRAME */}
          <div className="absolute -bottom-6 -right-6 w-[80%] h-full border border-[#C8A96A]/10"></div>

        </div>

      </div>

      {/* 🔧 EXTRA CSS */}
      <style jsx>{`
        .perspective {
          perspective: 1000px;
        }
      `}</style>

    </section>
  );
}