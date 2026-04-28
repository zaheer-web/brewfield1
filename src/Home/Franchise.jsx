import img from "../img/bg.avif";
import { Link } from "react-router-dom";

export default function Franchise() {
  return (
    <section className="relative py-[100px] md:py-[140px] px-5 md:px-[60px] overflow-hidden">

      {/* 🎥 BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src={img}
          alt="background"
          className="w-full h-full object-cover brightness-[0.7] contrast-[1.1] scale-[1.05]"
        />
      </div>

      {/* 🔥 OVERLAY */}
      <div className="absolute inset-0 bg-black/50 z-[1]" />

      {/* ✨ GOLD GRID */}
      <div className="absolute inset-0 z-[1] bg-[repeating-linear-gradient(0deg,transparent,transparent_60px,rgba(200,169,106,0.02)_60px,rgba(200,169,106,0.02)_61px),repeating-linear-gradient(90deg,transparent,transparent_60px,rgba(200,169,106,0.02)_60px,rgba(200,169,106,0.02)_61px),radial-gradient(circle_at_top_right,rgba(200,169,106,0.08),transparent_70%)]" />

      {/* CONTENT */}
      <div className="relative z-[2] max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[50px] md:gap-[100px] items-start">

        {/* LEFT */}
        <div className="max-w-[600px] mx-auto md:mx-0 text-center md:text-left">

          <div className="text-[60px] md:text-[90px] text-[#C8A96A] opacity-[0.1]">"</div>

          <span className="text-[#C8A96A] tracking-[2px] text-[11px] md:text-[12px]">
            Franchise Opportunity
          </span>

          <h2 className="text-[32px] md:text-[64px] text-white font-serif mt-3 leading-tight">
            Own a Piece of <br />
            <span className="text-[#C8A96A]">Italian Elegance</span>
          </h2>

          <div className="w-[50px] md:w-[60px] h-[2px] bg-[#C8A96A] my-[18px] mx-auto md:mx-0" />

          <p className="text-white/70 text-[14px] md:text-[15px] leading-[1.7] mb-[20px]">
            Brewfield Cafe isn't just a business — it's a legacy investment.
            We invite discerning entrepreneurs to partner with a brand that has
            already mastered the art of luxury hospitality in the Indian market.
          </p>

          {/* LIST */}
          <ul className="flex flex-col gap-[14px] md:gap-[18px] my-[30px] md:my-[36px] text-left">
            {[
              "Exclusive territory rights across Delhi NCR and Tier 1 cities",
              "Complete turnkey setup with Italian interior design standard",
              "Proprietary training programme by certified Italian baristas",
              "Central supply chain for premium ingredients and equipment",
              "Ongoing marketing, digital, and brand support",
              "Proven unit economics with strong repeat customer base",
            ].map((item, i) => (
              <li key={i} className="flex gap-[12px] text-[13px] md:text-[14px] text-white/75">
                <span className="text-[#C8A96A]">—</span>
                {item}
              </li>
            ))}
          </ul>

          {/* BUTTON */}
          <Link
            to="/franchise"
            className="bg-[#C8A96A] text-black px-8 py-3 text-[11px] tracking-[2px] uppercase transition 
            hover:scale-105 hover:shadow-[0_0_25px_rgba(200,169,106,0.6)]"
          >
            Explore Franchise
          </Link>

        </div>

        {/* RIGHT CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px] md:gap-[18px]">

          {[
            {
              title: "Exclusive Zones",
              desc: "Protected territory of 2–5km radius in premium micro-markets. No cannibalisation.",
            },
            {
              title: "Fast Launch",
              desc: "From agreement to opening in 45–60 days. Fully managed setup.",
            },
            {
              title: "Transparent P&L",
              desc: "Monthly reporting dashboard and real-time tracking.",
            },
            {
              title: "Brand Power",
              desc: "Leverage a premium brand with loyal customer base.",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="p-[22px] md:p-[36px_28px] border border-[#C8A96A]/25 bg-[rgba(10,8,6,0.75)] backdrop-blur-md transition duration-300 hover:border-[#C8A96A] hover:-translate-y-[4px] hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
            >
              <div className="text-[#C8A96A] text-[16px] md:text-[20px] mb-[8px]">
                {card.title}
              </div>
              <p className="text-white/65 text-[12px] md:text-[13px]">
                {card.desc}
              </p>
            </div>
          ))}

          {/* FEATURED */}
          <div className="sm:col-span-2 p-[20px] md:p-[36px_28px] border border-[#C8A96A]/25 bg-[linear-gradient(135deg,rgba(200,169,106,0.2),rgba(0,0,0,0.8))] flex flex-col md:flex-row gap-[15px] md:gap-[20px] items-center text-center md:text-left">

            <div className="w-[140px] md:w-[120px] h-[70px] md:h-[80px] rounded-full border-2 border-[#C8A96A] flex flex-col items-center justify-center">
              <span className="text-[#C8A96A] text-[22px] md:text-[30px]">28%</span>
              <span className="text-white text-[9px] uppercase">
                Avg ROI
              </span>
            </div>

            <div>
              <div className="text-[#C8A96A] text-[16px] md:text-[22px] mb-[6px] md:mb-[10px]">
                Investment Overview
              </div>
              <p className="text-white/65 text-[12px] md:text-[13px]">
                Starting investment from ₹25–50 Lakhs with projected break-even
                at 18–24 months.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}