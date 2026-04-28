import img from '../img/ha-3.jpg'
import img1 from '../img/ha-4.jpg'
import img2 from '../img/ha-5.jpg'
import img3 from '../img/ha-6.jpg'
import { Link } from "react-router-dom";

export default function Showcase() {
  return (
    <section className="relative bg-black py-[120px] px-[20px] md:px-[60px] overflow-hidden">

      {/* 🔥 EXTRA DARK OVERLAY */}
      <div className="absolute inset-0 bg-black z-[0]" />

      {/* ✨ GOLD GLOW (light subtle) */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(200,169,106,0.05),transparent_60%)] z-[1]" />

      {/* CONTENT */}
      <div className="relative z-[2]">

        {/* HEADER */}
        <div className="max-w-[1200px] mx-auto mb-[60px] flex justify-between items-end flex-wrap gap-6">

          <div>
            <span className="text-[#C8A96A] tracking-[2px] text-[12px]">
              Visual Stories
            </span>

            <h2 className="text-[28px] md:text-[42px] text-white font-serif leading-tight mt-2">
              Where Every Moment<br />
              is <em className="text-[#C8A96A] not-italic">Unforgettable</em>
            </h2>
          </div>

          <Link
            to="/contact"
            className="border border-white/30 text-white px-6 md:px-8 py-2 md:py-3 text-[10px] md:text-[11px] tracking-[2px] uppercase transition hover:border-[#C8A96A] hover:text-[#C8A96A]"
          >
            Visit Our Café
          </Link>

        </div>

        {/* GRID */}
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] lg:grid-rows-[280px_280px] gap-[6px]">

          {/* BIG IMAGE */}
          <div className="relative h-[300px] md:h-auto overflow-hidden border border-[#C8A96A]/20 group lg:row-span-2">

            <img
              src={img}
              className="absolute inset-0 w-full h-full object-cover brightness-[0.75] contrast-[1.05] transition duration-700 group-hover:scale-[1.08]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition" />

            <div className="absolute bottom-0 p-[20px] md:p-[30px]">
              <span className="text-[#C8A96A] text-[16px] md:text-[20px]">
                The Perfect Pour
              </span>
            </div>

          </div>

          {/* CARD FUNCTION */}
          {[
            { img: img1, text: "Latte Art" },
            { img: img2, text: "Single Origin" },
            { img: "https://images.unsplash.com/photo-1521017432531-fbd92d768814", text: "Cozy Corners" },
            { img: img3, text: "Curated Ambience" }
          ].map((item, i) => (

            <div
              key={i}
              className="relative h-[220px] md:h-auto overflow-hidden border border-[#C8A96A]/20 group"
            >

              <img
                src={item.img}
                className="absolute inset-0 w-full h-full object-cover brightness-[0.75] contrast-[1.05] transition duration-700 group-hover:scale-[1.08]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition" />

              <div className="absolute bottom-0 p-[20px] md:p-[30px]">
                <span className="text-[#C8A96A] text-[16px] md:text-[20px]">
                  {item.text}
                </span>
              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}