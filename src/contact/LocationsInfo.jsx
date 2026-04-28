import { MapPin, Mail, Phone } from "lucide-react";
import { useInView } from "../useInView";

export default function LocationsInfo() {
  const [ref, visible] = useInView({ threshold: 0.2 });

  return (
    <section className="relative bg-black py-[110px] px-6 md:px-16 overflow-hidden">

      {/* ✨ BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,169,106,0.06),transparent_70%)]"></div>

      <div
        ref={ref}
        className="relative z-10 max-w-[1400px] mx-auto text-center"
      >

        {/* TITLE */}
        <h2
          className={`text-[30px] md:text-[50px] font-serif text-white mb-14 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Our <span className="text-[#C8A96A]">Locations</span>
        </h2>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-8 mb-10">

          {/* CARD 1 */}
          <div
            className={`p-6 border border-[#C8A96A]/20 bg-[rgba(20,15,10,0.7)] backdrop-blur-xl text-left transition-all duration-700 group ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >

            <div className="flex items-center gap-3 mb-3 text-[#C8A96A]">
              <MapPin size={18} />
              <h3 className="text-white text-[19px] group-hover:text-[#C8A96A] transition">
                Ghaziabad
              </h3>
            </div>

            <p className="text-white/60 text-[16px] leading-[1.7]">
              Shop No. 5, RDC Main Road, Raj Nagar District Center,
              Ghaziabad Uttar Pradesh, 201002
            </p>

          </div>

          {/* CARD 2 */}
          <div
            className={`p-6 border border-[#C8A96A]/20 bg-[rgba(20,15,10,0.7)] backdrop-blur-xl text-left transition-all duration-700 group ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "120ms" }}
          >

            <div className="flex items-center gap-3 mb-3 text-[#C8A96A]">
              <MapPin size={18} />
              <h3 className="text-white text-[18px] group-hover:text-[#C8A96A] transition">
                Delhi
              </h3>
            </div>

            <p className="text-white/60 text-[16px] leading-[1.7]">
              M-Block Market, Greater Kailash II,
              New Delhi, Delhi 110048
            </p>

          </div>

        </div>

        {/* DIVIDER */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#C8A96A]/40 to-transparent mb-6"></div>

        {/* CONTACT INFO */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-white/70 text-[14px]">

          <div className="flex items-center gap-2 group">
            <Mail size={16} className="text-[#C8A96A]" />
            <span className="group-hover:text-[#C8A96A] transition">
              info@cafebrewfield.com
            </span>
          </div>

          <div className="flex items-center gap-2 group">
            <Phone size={16} className="text-[#C8A96A]" />
            <span className="group-hover:text-[#C8A96A] transition">
              +91 9876543210
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}