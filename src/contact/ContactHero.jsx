import { useInView } from "../useInView";
import bgVideo from "../img/ha-1.mp4"; // 👈 apni video

export default function ContactHero() {
  const [ref, visible] = useInView({ threshold: 0.3 });

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden text-center"
    >

      {/* 🎥 BACKGROUND VIDEO */}
      <video
        src={bgVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover brightness-[0.85]"
      />

      {/* 🖤 BLACK GRADIENT OVERLAY (balanced) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60"></div>

      {/* ✨ GOLD GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,169,106,0.18),transparent_60%)]"></div>

      {/* CONTENT */}
      <div className="relative z-10 w-full px-6 md:px-16">

        <div className="max-w-[800px] mx-auto">

          {/* LABEL */}
          <span
            className={`text-[#C8A96A] text-[12px] tracking-[4px] uppercase transition-all duration-1000 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Get In Touch
          </span>

          {/* HEADING */}
          <h1
            className={`text-[36px] md:text-[64px] font-serif text-white mt-4 mb-5 leading-tight transition-all duration-1000 delay-200 ${
              visible
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-16 scale-95"
            }`}
          >
            Contact <span className="text-[#C8A96A]">Us</span>
          </h1>

          {/* TEXT */}
          <p
            className={`text-white/80 max-w-[600px] mx-auto mb-8 leading-[1.9] text-[15px] md:text-[17px] transition-all duration-1000 delay-300 ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-16"
            }`}
          >
            Have questions or planning to start your own Brewfield café?  
            Connect with us and let’s build something exceptional together.
          </p>

          {/* CTA */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
            }`}
          >
            <a
              href="/franchise"
              className="inline-block bg-[#C8A96A] text-black px-10 py-3 text-[12px] tracking-[2px] uppercase transition 
              hover:scale-105 hover:shadow-[0_0_30px_rgba(200,169,106,0.6)]"
            >
              Apply for Franchise
            </a>
          </div>

          {/* OPTIONAL DIVIDER */}
          <div
            className={`w-[70px] h-[2px] bg-[#C8A96A] mx-auto mt-8 transition-all duration-1000 delay-700 ${
              visible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
          ></div>

        </div>

      </div>

    </section>
  );
}