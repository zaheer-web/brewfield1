import { MapPin } from "lucide-react";
import { useInView } from "../useInView";

export default function ContactMap() {
  const [ref, visible] = useInView({ threshold: 0.2 });

  return (
    <section className="relative bg-black py-[120px] px-6 md:px-16 overflow-hidden">

      {/* ✨ BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,169,106,0.06),transparent_70%)]"></div>

      <div
        ref={ref}
        className="relative z-10 max-w-[1200px] mx-auto"
      >

        {/* TITLE */}
        <h2
          className={`text-center text-[32px] md:text-[40px] font-serif text-white mb-12 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Our <span className="text-[#C8A96A]">Locations</span>
        </h2>

        {/* MAP WRAPPER */}
        <div
          className={`relative overflow-hidden border border-[#C8A96A]/20 shadow-[0_25px_80px_rgba(0,0,0,0.8)] group transition-all duration-1000 ${
            visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >

          {/* MAP */}
          <iframe
            title="map"
            src="https://www.google.com/maps?q=Ghaziabad,Delhi&output=embed"
            className="w-full h-[420px] border-0 transition duration-700 group-hover:scale-[1.02]"
            loading="lazy"
          ></iframe>

          {/* GOLD LIGHT OVERLAY */}
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(120deg,rgba(200,169,106,0.12),transparent_60%)]"></div>

          {/* DARK FADE */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/40 to-transparent"></div>

          {/* 📍 LOCATION CARD */}
          <div className="absolute bottom-6 left-6 bg-[rgba(20,15,10,0.8)] backdrop-blur-xl border border-[#C8A96A]/20 px-5 py-4 flex items-center gap-3 shadow-lg">

            <MapPin className="text-[#C8A96A]" size={18} />

            <div>
              <p className="text-white text-[14px] font-medium">
                Cafe Brewfield
              </p>
              <p className="text-white/60 text-[12px]">
                Ghaziabad, Delhi NCR
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}