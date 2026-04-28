import { Link } from "react-router-dom";
import bg from "../img/ha-1.mp4";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-black text-[#F5EDE3]">

      {/* 🎥 VIDEO BACKGROUND */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-1/2 left-1/2 w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 z-0"
      >
        <source src={bg} type="video/mp4" />
      </video>

      {/* 🔥 DARK OVERLAY */}
      <div className="absolute inset-0 bg-[rgba(10,6,4,0.6)] z-[1]" />

      {/* ✨ GOLD GLOW */}
      <div className="absolute inset-0 z-[2] bg-[radial-gradient(ellipse_at_60%_40%,rgba(200,169,106,0.08)_0%,transparent_60%),radial-gradient(ellipse_at_20%_80%,rgba(59,42,38,0.5)_0%,transparent_50%)]" />

      {/* 🔵 RINGS */}
      <div className="absolute w-[600px] h-[600px] border border-[#C8A96A]/20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[ringPulse_8s_ease-in-out_infinite]" />
      <div className="absolute w-[900px] h-[900px] border border-[#C8A96A]/20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[ringPulse_8s_ease-in-out_infinite] delay-[1.5s]" />

      {/* ☕ STEAM */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200px] h-[300px] pointer-events-none z-[2]">
        <div className="absolute bottom-0 left-[80px] w-[4px] h-[80px] bg-white/10 rounded-full animate-[steamRise_4s_ease-in_infinite]" />
        <div className="absolute bottom-0 left-[100px] w-[6px] h-[120px] bg-white/10 rounded-full animate-[steamRise_4s_ease-in_infinite] delay-[0.8s]" />
      </div>

      {/* 📝 CONTENT */}
      <div className="relative z-[3] text-center max-w-[900px] px-6">

        <span className="text-[11px] tracking-[5px] uppercase text-[#C8A96A] mb-6 block">
          Est. Milano · Delhi NCR · Dubai
        </span>

        <h1 className="font-serif text-[clamp(42px,8vw,90px)] leading-[1.1] text-white mb-6">
          Crafting <span className="text-[#C8A96A]">Elegance</span>
          <br /> in Every Cup
        </h1>

        <p className="text-[15px] text-white/70 mb-10">
          Italian coffee heritage meets modern luxury — an experience
          crafted for those who demand the extraordinary.
        </p>

        {/* 🔘 BUTTONS */}
        <div className="flex gap-4 justify-center flex-wrap">

          {/* ✅ FRANCHISE */}
          <Link
            to="/franchise"
            className="bg-[#C8A96A] text-black px-8 py-3 text-[11px] tracking-[2px] uppercase transition 
            hover:scale-105 hover:shadow-[0_0_25px_rgba(200,169,106,0.6)]"
          >
            Explore Franchise
          </Link>

          {/* ✅ VISIT CAFE */}
          <Link
            to="/contact"
            className="border border-white/30 text-white px-8 py-3 text-[11px] tracking-[2px] uppercase transition 
            hover:border-[#C8A96A] hover:text-[#C8A96A]"
          >
            Visit Our Café
          </Link>

        </div>

      </div>

      {/* 🎬 ANIMATIONS */}
      <style jsx>{`
        @keyframes ringPulse {
          0%,100% { opacity:0.3; transform:translate(-50%,-50%) scale(1); }
          50% { opacity:0.08; transform:translate(-50%,-50%) scale(1.03); }
        }

        @keyframes steamRise {
          0% { transform:translateY(0); opacity:0; }
          20% { opacity:0.6; }
          80% { opacity:0.2; }
          100% { transform:translateY(-200px); opacity:0; }
        }
      `}</style>

    </section>
  );
}