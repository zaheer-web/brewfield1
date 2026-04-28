import { Check } from "lucide-react";
import { useInView } from "../useInView";

export default function FranchiseSupport() {
  const [ref, visible] = useInView({ threshold: 0.2 });

  const features = [
    "Location selection assistance",
    "Interior & setup guidance",
    "Marketing & branding support",
    "Vendor & supply chain management",
    "Staff training programs",
    "Ongoing operational support",
  ];

  return (
    <section className="relative bg-black py-[110px] px-6 md:px-16 overflow-hidden">

      {/* ✨ BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,169,106,0.06),transparent_70%)]"></div>

      <div
        ref={ref}
        className="relative z-10 max-w-[1100px] mx-auto text-center"
      >

        {/* TITLE */}
        <h2
          className={`text-[32px] md:text-[40px] font-serif text-white mb-14 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Complete{" "}
          <span className="text-[#C8A96A]">Franchise Support</span>
        </h2>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">

          {features.map((item, i) => (
            <div
              key={i}
              className={`group flex items-start gap-3 p-4 border border-transparent transition-all duration-500 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >

              {/* ICON */}
              <div className="text-[#C8A96A] mt-[3px] group-hover:scale-110 transition">
                <Check size={16} />
              </div>

              {/* TEXT */}
              <p className="text-white/70 text-[14px] leading-[1.7] group-hover:text-[#C8A96A] transition">
                {item}
              </p>

              {/* UNDERLINE EFFECT */}
              <div className="absolute bottom-0 left-0 h-[1px] bg-[#C8A96A] w-0 group-hover:w-full transition-all duration-500"></div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}