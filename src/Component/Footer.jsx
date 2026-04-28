import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative bg-[#070403] py-[100px] px-[60px] pb-[40px] overflow-hidden">

      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_20%_20%,rgba(200,169,106,0.05),transparent_60%),radial-gradient(circle_at_80%_80%,rgba(200,169,106,0.04),transparent_60%)]" />

      <div className="relative z-[2] max-w-[1200px] mx-auto">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-[60px] mb-[60px]">

          {/* BRAND */}
          <div>
            <Link to="/" className="block text-[28px] font-semibold text-[#C8A96A] tracking-[3px] uppercase mb-[8px]">
              Brewfield
            </Link>

            <div className="text-[11px] tracking-[3px] uppercase text-white/35 mb-[20px]">
              Italian Coffee & Tea House
            </div>

            <p className="italic text-[15px] text-white/60 leading-[1.7]">
              "Crafting Elegance<br />in Every Cup, Since Always."
            </p>
          </div>

          {/* NAVIGATION */}
          <div>
            <div className="text-[10px] tracking-[4px] uppercase text-[#C8A96A] mb-[24px]">
              Navigate
            </div>

            <ul className="flex flex-col gap-[12px]">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Franchise", path: "/franchise" },
                { name: "Menu", path: "/menu" },
                { name: "Contact", path: "/contact" },
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.path}
                    className="relative text-white/55 text-[13px] transition group"
                  >
                    {item.name}
                    <span className="absolute left-0 bottom-[-2px] w-0 h-[1px] bg-[#C8A96A] transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* FRANCHISE */}
          <div>
            <div className="text-[10px] tracking-[4px] uppercase text-[#C8A96A] mb-[24px]">
              Franchise
            </div>

            <ul className="flex flex-col gap-[12px]">
              {[
                "Why Brewfield",
                "Investment Details",
                "Territory Map",
                "Apply Now",
                "Partner Stories",
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    to="/franchise"
                    className="relative text-white/55 text-[13px] transition group"
                  >
                    {item}
                    <span className="absolute left-0 bottom-[-2px] w-0 h-[1px] bg-[#C8A96A] transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <div className="text-[10px] tracking-[4px] uppercase text-[#C8A96A] mb-[24px]">
              Contact
            </div>

            <div className="flex flex-col gap-[14px] text-[13px] text-white/55">

              <div>
                <strong className="block text-[10px] tracking-[2px] text-white/30 mb-[4px]">
                  Email
                </strong>
                hello@brewfieldcafe.com
              </div>

              <div>
                <strong className="block text-[10px] tracking-[2px] text-white/30 mb-[4px]">
                  Franchise
                </strong>
                franchise@brewfieldcafe.com
              </div>

              <div>
                <strong className="block text-[10px] tracking-[2px] text-white/30 mb-[4px]">
                  Delhi HQ
                </strong>
                Connaught Place, New Delhi
              </div>

            </div>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="h-[1px] mb-[36px] bg-gradient-to-r from-transparent via-[rgba(200,169,106,0.4)] to-transparent" />

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-[20px]">

          <div className="text-[12px] text-white/30">
            © 2025 Brewfield Cafe. All rights reserved. Crafted with intention.
          </div>

          {/* SOCIAL */}
          <div className="flex gap-[16px]">
            {["in", "ig", "fb", "yt"].map((item, i) => (
              <a
                key={i}
                href="#"
                className="w-[38px] h-[38px] flex items-center justify-center text-[13px] text-white/50 border border-[rgba(200,169,106,0.25)] transition hover:text-[#C8A96A] hover:border-[#C8A96A] hover:-translate-y-[3px] hover:shadow-[0_0_12px_rgba(200,169,106,0.4)]"
              >
                {item}
              </a>
            ))}
          </div>

        </div>

      </div>

    </footer>
  );
}