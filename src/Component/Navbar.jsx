import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../img/Logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const leftItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Menu", path: "/menu" },
  ];

  const rightItems = [
    { name: "Franchise", path: "/franchise" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[1000] flex items-center justify-between px-[60px] transition-all duration-500
      ${
        scrolled
          ? "py-[18px] bg-[rgba(10,8,6,0.95)] backdrop-blur-xl border-b border-[#C8A96A]/20 shadow-[0_10px_40px_rgba(0,0,0,0.6)]"
          : "py-[32px] bg-gradient-to-b from-black/70 to-transparent"
      }`}
    >

      {/* LEFT LINKS */}
      <div className="hidden lg:flex gap-[102px] pl-30">
        {leftItems.map((item) => (
          <NavLink key={item.name} item={item} location={location} />
        ))}
      </div>

      {/* LOGO */}
      <Link
        to="/"
        className="lg:absolute lg:left-1/2 lg:-translate-x-1/2"
      >
        <img
          src={logo}
          alt="logo"
          className="h-[60px] lg:h-[75px] transition duration-500 hover:scale-[1.05] hover:drop-shadow-[0_0_12px_rgba(200,169,106,0.5)] pt-2"
        />
      </Link>

      {/* RIGHT LINKS */}
      <div className="hidden lg:flex gap-[102px] items-center pr-10">
        {rightItems.map((item) => (
          <NavLink key={item.name} item={item} location={location} />
        ))}

        {/* 🔥 WHATSAPP CTA (same design) */}
        <a
          href="https://wa.me/919876543210?text=Hi%20I%20am%20interested%20in%20Brewfield%20Franchise"
          target="_blank"
          rel="noopener noreferrer"
          className="relative border border-[#C8A96A] text-[#C8A96A] px-[30px] py-[12px] text-[13px] tracking-[2px] uppercase overflow-hidden group transition"
        >
          <span className="relative z-10">Get Consult</span>

          <span className="absolute inset-0 bg-[#C8A96A] scale-x-0 origin-left transition duration-300 group-hover:scale-x-100"></span>

          <span className="absolute inset-0 flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition duration-300">
            Chat Now
          </span>
        </a>
      </div>

      {/* MOBILE TOGGLE */}
      <div
        className="lg:hidden flex flex-col gap-1 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <span className={`w-6 h-[2px] bg-[#C8A96A] transition ${open ? "rotate-45 translate-y-[6px]" : ""}`} />
        <span className={`w-6 h-[2px] bg-[#C8A96A] transition ${open ? "opacity-0" : ""}`} />
        <span className={`w-6 h-[2px] bg-[#C8A96A] transition ${open ? "-rotate-45 -translate-y-[6px]" : ""}`} />
      </div>

      {/* MOBILE MENU */}
      <div
        className={`absolute top-full left-0 w-full bg-[rgba(10,8,6,0.97)] backdrop-blur-xl flex flex-col items-center gap-6 py-8 transition-all duration-300
        ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"}`}
      >
        {[...leftItems, ...rightItems].map((item) => (
          <Link
            key={item.name}
            to={item.path}
            onClick={() => setOpen(false)}
            className="text-white text-[16px] tracking-[2px] hover:text-[#C8A96A]"
          >
            {item.name}
          </Link>
        ))}

        {/* 🔥 MOBILE WHATSAPP CTA */}
        <a
          href="https://wa.me/919876543210?text=Hi%20I%20am%20interested%20in%20Brewfield%20Franchise"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-[#C8A96A] text-[#C8A96A] px-6 py-2 mt-2"
        >
          Get Consult
        </a>
      </div>
    </nav>
  );
}

/* NAV LINK */
function NavLink({ item, location }) {
  const active = location.pathname === item.path;

  return (
    <Link
      to={item.path}
      className={`relative text-[14px] tracking-[2.5px] transition duration-300 group
      ${active ? "text-[#C8A96A]" : "text-white/80 hover:text-[#C8A96A]"}`}
    >
      {item.name}

      <span
        className={`absolute left-0 bottom-[-5px] h-[1px] bg-[#C8A96A] transition-all duration-300
        ${active ? "w-full" : "w-0 group-hover:w-full"}`}
      />

      {active && (
        <span className="absolute inset-0 blur-md opacity-30 bg-[#C8A96A]/20 -z-10"></span>
      )}
    </Link>
  );
}