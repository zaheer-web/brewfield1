import img from "../img/bg.avif";
import { Link } from "react-router-dom";

export default function Franchise() {
  return (
    <section className="relative py-[100px] md:py-[140px] px-5 md:px-[60px] overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src={img}
          alt="background"
          className="w-full h-full object-cover brightness-[0.7] contrast-[1.1] scale-[1.05]"
        />
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60 z-[1]" />

      {/* GOLD GRID */}
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_top_right,rgba(200,169,106,0.08),transparent_70%)]" />

      {/* CONTENT WRAPPER */}
      <div className="relative z-[2] max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[60px] md:gap-[90px] items-center">

        {/* LEFT CONTENT */}
        <div className="max-w-[560px] mx-auto md:mx-0 text-center md:text-left space-y-5">

          {/* QUOTE */}
          <div className="text-[60px] md:text-[90px] text-[#C8A96A] opacity-[0.08] leading-none">
            “
          </div>

          {/* LABEL */}
          <span className="text-[#C8A96A] tracking-[3px] text-[11px] uppercase">
            Franchise Opportunity
          </span>

          {/* TITLE */}
          <h2 className="text-[32px] md:text-[60px] font-serif text-white leading-tight">
            Own a Piece of <br />
            <span className="text-[#C8A96A]">Italian Elegance</span>
          </h2>

          {/* DIVIDER */}
          <div className="w-[50px] md:w-[60px] h-[2px] bg-[#C8A96A] mx-auto md:mx-0" />

          {/* TEXT */}
          <p className="text-white/70 text-[14px] md:text-[15px] leading-[1.8]">
            Brewfield Cafe isn't just a business — it's a legacy investment.
            Partner with a brand that blends luxury, consistency, and growth.
          </p>

          {/* LIST */}
          <ul className="space-y-3 text-left mt-6">
            {[
              "Exclusive territory rights across Delhi NCR",
              "Turnkey setup with Italian interior standards",
              "Certified barista training programme",
              "Central supply chain & vendor support",
              "Marketing & brand growth assistance",
              "Strong ROI & repeat customer base",
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-white/70 text-[14px]">
                <span className="text-[#C8A96A]">—</span>
                {item}
              </li>
            ))}
          </ul>

          {/* BUTTON */}
          <div className="pt-4">
            <Link
              to="/franchise"
              className="inline-block bg-[#C8A96A] text-black px-8 py-3 text-[11px] tracking-[2px] uppercase transition 
              hover:scale-105 hover:shadow-[0_0_25px_rgba(200,169,106,0.6)]"
            >
              Explore Franchise
            </Link>
          </div>

        </div>

        {/* RIGHT CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

          {[
            {
              title: "Exclusive Zones",
              desc: "Protected premium territory with zero overlap.",
            },
            {
              title: "Fast Launch",
              desc: "Operational within 45–60 days.",
            },
            {
              title: "Transparent P&L",
              desc: "Real-time performance dashboard.",
            },
            {
              title: "Brand Power",
              desc: "Leverage a premium cafe identity.",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="p-6 border border-[#C8A96A]/20 bg-[rgba(10,8,6,0.75)] backdrop-blur-md transition 
              hover:border-[#C8A96A] hover:-translate-y-[4px] hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
            >
              <h3 className="text-[#C8A96A] text-[18px] mb-2">
                {card.title}
              </h3>
              <p className="text-white/65 text-[13px]">
                {card.desc}
              </p>
            </div>
          ))}

          {/* FEATURED CARD */}
          <div className="sm:col-span-2 p-6 border border-[#C8A96A]/25 bg-[linear-gradient(135deg,rgba(200,169,106,0.15),rgba(0,0,0,0.85))] flex flex-col md:flex-row gap-5 items-center text-center md:text-left">

            <div className="w-[100px] h-[100px] rounded-full border-2 border-[#C8A96A] flex flex-col items-center justify-center">
              <span className="text-[#C8A96A] text-[26px]">28%</span>
              <span className="text-white text-[10px] uppercase">
                Avg ROI
              </span>
            </div>

            <div>
              <h4 className="text-[#C8A96A] text-[18px] mb-1">
                Investment Overview
              </h4>
              <p className="text-white/65 text-[13px]">
                Investment ₹25–50 Lakhs with break-even in 18–24 months.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}