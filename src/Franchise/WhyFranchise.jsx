import { Coffee, TrendingUp, Users, Handshake } from "lucide-react";
import { useInView } from "../useInView";

export default function WhyFranchise() {
  const [ref, visible] = useInView({ threshold: 0.2 });

  const data = [
    {
      title: "Strong Brand Identity",
      value: "₹15–25 Lakhs",
      icon: <Coffee size={26} />,
    },
    {
      title: "High Growth Potential",
      value: "300–800 sq.ft.",
      icon: <TrendingUp size={26} />,
    },
    {
      title: "Premium Customer Base",
      value: "12–18 Months ROI",
      icon: <Users size={26} />,
    },
    {
      title: "Complete Support",
      value: "End-to-End Assistance",
      icon: <Handshake size={26} />,
    },
  ];

  return (
    <section className="relative bg-black py-[120px] px-6 md:px-16 overflow-hidden">

      {/* ✨ GOLD BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,169,106,0.08),transparent_70%)] pointer-events-none" />

      <div
        ref={ref}
        className="relative z-10 max-w-[1200px] mx-auto text-center"
      >

        {/* TITLE */}
        <h2
          className={`text-[34px] md:text-[44px] font-serif text-white mb-16 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Why Choose{" "}
          <span className="text-[#C8A96A]">Cafe Brewfield?</span>
        </h2>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">

          {data.map((item, i) => (
            <div
              key={i}
              className={`relative p-8 bg-[rgba(20,15,10,0.7)] border border-[#C8A96A]/20 backdrop-blur-xl transition-all duration-700 group ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-16"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >

              {/* 🔥 HOVER GLOW */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_center,rgba(200,169,106,0.15),transparent_70%)]" />

              {/* CONTENT */}
              <div className="relative z-10">

                {/* ICON */}
                <div className="flex justify-center mb-4 text-[#C8A96A] group-hover:scale-110 transition">
                  {item.icon}
                </div>

                {/* TITLE */}
                <h3 className="text-white text-[15px] md:text-[16px] mb-2 group-hover:text-[#C8A96A] transition">
                  {item.title}
                </h3>

                {/* VALUE */}
                <p className="text-[#C8A96A] text-[14px] font-medium">
                  {item.value}
                </p>

              </div>

              {/* BORDER ANIMATION */}
              <div className="absolute inset-0 border border-transparent group-hover:border-[#C8A96A] transition duration-500"></div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}