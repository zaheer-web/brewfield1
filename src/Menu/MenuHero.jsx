import { useInView } from "../useInView";
import bgVideo from "../img/ha-1.mp4";
import { Link } from "react-router-dom";

export default function MenuHero() {
  const [ref, visible] = useInView({ threshold: 0.3 });

  return (
    <section
      ref={ref}
      className="relative h-[70vh] md:h-[105vh] flex items-center justify-center text-center overflow-hidden"
    >

      {/* 🎥 VIDEO */}
      <video
        src={bgVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover brightness-[0.65]"
      />

      {/* LIGHT DARK OVERLAY (reduced) */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* GOLD GLOW (enhanced) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,169,106,0.25),transparent_60%)] animate-[pulseGlow_6s_ease-in-out_infinite]"></div>

      {/* SOFT TOP/BOTTOM FADE */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-[800px] px-6">

        {/* LABEL */}
        <span
          className={`text-[#C8A96A] text-[12px] tracking-[5px] uppercase transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Signature Selection
        </span>

        {/* HEADING */}
        <h1
          className={`text-[34px] md:text-[64px] font-serif text-white mt-4 mb-4 leading-tight transition-all duration-1000 delay-200 ${
            visible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-16 scale-95"
          }`}
        >
          Discover Our{" "}
          <span className="text-[#C8A96A]">Menu</span>
        </h1>

        {/* TEXT */}
        <p
          className={`text-white/80 text-[15px] md:text-[18px] max-w-[600px] mx-auto leading-[1.9] transition-all duration-1000 delay-300 ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-16"
          }`}
        >
          Explore handcrafted coffees, artisanal teas, and curated delights —
          where every sip is a blend of passion, precision, and timeless elegance.
        </p>

        {/* BUTTON */}
        <div
          className={`mt-8 transition-all duration-1000 delay-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
        >
          <Link
            to="/franchise"
            className="bg-[#C8A96A] text-black px-8 py-3 text-[11px] tracking-[2px] uppercase transition 
            hover:scale-105 hover:shadow-[0_0_25px_rgba(200,169,106,0.6)]"
          >
            Explore Franchise
          </Link>
        </div>

        {/* SCROLL INDICATOR */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[-80px] hidden md:flex flex-col items-center gap-2 text-white/60">
          <span className="text-[10px] tracking-[2px]">SCROLL</span>
          <div className="w-[2px] h-[40px] bg-white/30 relative overflow-hidden">
            <div className="w-full h-[10px] bg-[#C8A96A] animate-[scrollDot_2s_infinite]"></div>
          </div>
        </div>

      </div>

      {/* 🎬 ANIMATIONS */}
      <style jsx>{`
        @keyframes pulseGlow {
          0%,100% { opacity: 0.2; }
          50% { opacity: 0.35; }
        }

        @keyframes scrollDot {
          0% { transform: translateY(-10px); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(40px); opacity: 0; }
        }
      `}</style>

    </section>
  );
}