import img from "../img/bg.avif";
import { Mail, Phone, MapPin } from "lucide-react";
import { useInView } from "../useInView";

export default function ContactSection() {
  const [ref, visible] = useInView({ threshold: 0.2 });

  return (
    <section className="relative bg-black py-[120px] px-6 md:px-16 overflow-hidden">

      {/* ✨ BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,169,106,0.06),transparent_70%)]"></div>

      <div
        ref={ref}
        className="relative z-10 max-w-[1200px] mx-auto grid md:grid-cols-2 gap-16 items-start"
      >

        {/* 🔥 LEFT - FORM */}
        <div
          className={`transition-all duration-1000 ${
            visible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-16"
          }`}
        >

          <h2 className="text-[32px] md:text-[40px] font-serif text-white mb-8">
            Get In <span className="text-[#C8A96A]">Touch</span>
          </h2>

          {/* FORM BOX */}
          <div className="p-6 md:p-8 border border-[#C8A96A]/20 bg-[rgba(20,15,10,0.7)] backdrop-blur-xl">

            <form className="grid gap-5">

              {/* NAME + PHONE */}
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="inputStyle"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="inputStyle"
                />
              </div>

              {/* EMAIL */}
              <input
                type="email"
                placeholder="Email Address"
                className="inputStyle"
              />

              {/* MESSAGE */}
              <textarea
                rows="5"
                placeholder="Your Message"
                className="inputStyle"
              ></textarea>

              {/* BUTTON */}
              <button className="mt-3 bg-[#C8A96A] text-black px-8 py-3 text-[12px] tracking-[2px] uppercase transition hover:scale-105 hover:shadow-[0_0_25px_rgba(200,169,106,0.6)]">
                Send Message
              </button>

            </form>
          </div>

        </div>

        {/* 🖼 RIGHT - INFO */}
        <div
          className={`transition-all duration-1000 ${
            visible
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-16"
          }`}
        >

          {/* IMAGE */}
          <div className="relative overflow-hidden border border-[#C8A96A]/20 mb-6 group">
            <img
              src={img}
              alt="contact"
              className="w-full h-[300px] object-cover transition duration-700 group-hover:scale-110 brightness-[0.85]"
            />

            {/* GOLD OVERLAY */}
            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(200,169,106,0.12),transparent_60%)]"></div>
          </div>

          {/* INFO CARD */}
          <div className="p-6 border border-[#C8A96A]/20 bg-[rgba(20,15,10,0.7)] backdrop-blur-xl">

            <h3 className="text-white text-[18px] mb-2">
              Visit Our Cafes in{" "}
              <span className="text-[#C8A96A]">Delhi NCR</span>
            </h3>

            <p className="text-white/60 text-[13px] mb-5">
              Cafe Brewfield
            </p>

            {/* CONTACT ITEMS */}
            <div className="space-y-4 text-white/70 text-[14px]">

              <div className="flex items-center gap-3 group">
                <MapPin size={16} className="text-[#C8A96A]" />
                <span className="group-hover:text-[#C8A96A] transition">
                  Ghaziabad, Delhi NCR
                </span>
              </div>

              <div className="flex items-center gap-3 group">
                <Mail size={16} className="text-[#C8A96A]" />
                <span className="group-hover:text-[#C8A96A] transition">
                  info@cafebrewfield.com
                </span>
              </div>

              <div className="flex items-center gap-3 group">
                <Phone size={16} className="text-[#C8A96A]" />
                <span className="group-hover:text-[#C8A96A] transition">
                  +91 9876543210
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* 🔧 INPUT STYLE */}
      <style jsx>{`
        .inputStyle {
          width: 100%;
          background: transparent;
          border: 1px solid rgba(200, 169, 106, 0.3);
          padding: 12px 14px;
          color: white;
          outline: none;
          transition: all 0.3s ease;
        }

        .inputStyle:focus {
          border-color: #c8a96a;
          box-shadow: 0 0 10px rgba(200, 169, 106, 0.3);
        }
      `}</style>

    </section>
  );
}