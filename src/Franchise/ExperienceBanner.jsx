import bg from "../img/bg.avif";
import { useInView } from "../useInView";

export default function ExperienceBanner() {
  const [ref, visible] = useInView({ threshold: 0.3 });

  return (
    <section
      ref={ref}
      className="relative h-[50vh] md:h-[55vh] flex items-center justify-center text-center overflow-hidden"
    >

      {/* 🔥 BACKGROUND IMAGE (SUBTLE ZOOM) */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={bg}
          alt="banner"
          className="w-full h-full object-cover brightness-[0.7] animate-[zoomBg_20s_linear_infinite]"
        />
      </div>

      {/* LIGHT GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/30"></div>

      {/* GOLD GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,169,106,0.15),transparent_70%)]"></div>

      {/* CONTENT */}
      <div className="relative z-10 px-6 max-w-[800px]">

        <h2
          className={`text-[30px] md:text-[48px] font-serif text-white leading-[1.3] transition-all duration-1000 ${
            visible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-10 scale-95"
          }`}
        >
          Delivering <span className="text-[#C8A96A]">Experiences</span>, <br />
          Not Just Coffee
        </h2>

        {/* OPTIONAL DIVIDER */}
        <div
          className={`w-[70px] h-[2px] bg-[#C8A96A] mx-auto mt-6 transition-all duration-1000 delay-300 ${
            visible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
          }`}
        ></div>

      </div>

      {/* 🎬 ANIMATION */}
      <style jsx>{`
        @keyframes zoomBg {
          0% { transform: scale(1.05); }
          50% { transform: scale(1.15); }
          100% { transform: scale(1.05); }
        }
      `}</style>

    </section>
  );
}