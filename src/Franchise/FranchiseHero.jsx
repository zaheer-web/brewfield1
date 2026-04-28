import { useInView } from "../useInView";
import bgVideo from "../img/ha-1.mp4";

export default function FranchiseHero() {
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
        className="absolute inset-0 w-full h-full object-cover brightness-[0.9]"
      />

      {/* ✅ LIGHT GRADIENT BLACK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/30"></div>

      {/* ✨ GOLD GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,169,106,0.15),transparent_60%)]"></div>

      {/* CONTENT */}
      <div className="relative z-10 w-full px-6 md:px-16">

        {/* CENTER WRAPPER */}
        <div className="max-w-[900px] mx-auto">

          {/* INNER BOX (WIDTH CONTROL) */}
          <div className="max-w-[600px] mx-auto">

            {/* LABEL */}
            <span
              className={`text-[#C8A96A] text-[11px] tracking-[4px] uppercase transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Franchise Opportunity
            </span>

            {/* HEADING */}
            <h1
              className={`text-[34px] md:text-[60px] font-serif text-white mt-4 mb-4 leading-tight transition-all duration-700 delay-100 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              Own a Premium <br />
              <span className="text-[#C8A96A]">
                Cafe Brewfield Franchise
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p
              className={`text-white/85 max-w-[520px] mx-auto mb-7 leading-[1.8] text-[15px] md:text-[17px] transition-all duration-700 delay-200 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              Build a profitable business with one of the fastest-growing
              Italian café brands. Premium experience, strong identity,
              and scalable growth.
            </p>

            {/* BUTTONS */}
            <div
              className={`flex justify-center gap-4 flex-wrap transition-all duration-700 delay-300 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >

              <a
                href="/contact"
                className="bg-[#C8A96A] text-black px-7 py-3 text-[12px] tracking-[2px] uppercase transition hover:scale-105 hover:shadow-[0_0_25px_rgba(200,169,106,0.6)]"
              >
                Apply Now
              </a>

              <a
                href="#"
                className="border border-white/40 text-white px-7 py-3 text-[12px] tracking-[2px] uppercase transition hover:border-[#C8A96A] hover:text-[#C8A96A]"
              >
                Download Brochure
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}