import { MapPin } from "lucide-react";
import { useInView } from "../useInView";
import bg from "../img/bg.avif";

export default function Presence() {
  const [ref, visible] = useInView({ threshold: 0.3 });

  return (
    <section
      ref={ref}
      className="relative min-h-[70vh] flex items-center justify-center text-center overflow-hidden"
    >

      {/* 🔥 BACKGROUND (FIXED - NO SHAKE) */}
      <div className="absolute inset-0">
        <img
          src={bg}
          alt="cafe"
          className="w-full h-full object-cover brightness-[0.4] scale-105 will-change-transform"
        />
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* GOLD GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(200,169,106,0.12),transparent_60%)]"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-[900px] px-6">

        {/* SMALL TITLE */}
        <span
          className={`text-[#C8A96A] text-[12px] tracking-[4px] uppercase transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Our Presence
        </span>

        {/* HEADING */}
        <h2
          className={`text-[34px] md:text-[52px] font-serif text-white mt-4 mb-5 leading-tight transition-all duration-1000 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
        >
          Expanding Across{" "}
          <span className="text-[#C8A96A]">Delhi NCR</span>
        </h2>

        {/* DESCRIPTION */}
        <p
          className={`text-white/70 max-w-[600px] mx-auto leading-[1.8] mb-8 text-[15px] md:text-[16px] transition-all duration-1000 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
        >
          From Ghaziabad to Delhi NCR, Brewfield is expanding into premium
          destinations — blending elegance, comfort, and refined café culture.
        </p>

        {/* LOCATIONS */}
        <div
          className={`flex flex-wrap justify-center gap-4 transition-all duration-1000 delay-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
        >
          {["Ghaziabad", "Delhi", "Noida", "More Coming"].map((place, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-4 py-2 border border-[#C8A96A]/30 rounded-full text-white/80 text-[13px] backdrop-blur-md bg-[rgba(20,15,10,0.5)] hover:border-[#C8A96A] hover:shadow-[0_0_20px_rgba(200,169,106,0.4)] transition"
            >
              <MapPin size={14} className="text-[#C8A96A]" />
              {place}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}