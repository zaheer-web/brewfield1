import { useEffect, useState, useRef } from "react";
import bgVideo from "../img/ha-2.mp4";
import { useInView } from "../useInView";

export default function AboutHero() {
  const [typedText, setTypedText] = useState("");
  const [count, setCount] = useState(0);
  const sectionRef = useRef(null);

  const [ref, visible] = useInView({ threshold: 0.4 });

  const fullText = "Experience Luxury In Every Sip";

  // ✅ Typing Effect
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  // ✅ Counter Animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const end = 12000;
          const duration = 2000;
          const step = end / (duration / 16);

          const counter = setInterval(() => {
            start += step;
            if (start >= end) {
              setCount(end);
              clearInterval(counter);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // ✅ Parallax Scroll
  useEffect(() => {
    const handleScroll = () => {
      const video = document.getElementById("bgVideo");
      if (video) {
        video.style.transform = `scale(1.1) translateY(${window.scrollY * 0.12}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden"
    >
      {/* 🎥 VIDEO */}
      <video
        id="bgVideo"
        src={bgVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover brightness-[0.3]"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 "></div>

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-[800px] px-6">

        <div ref={ref}>

          {/* 🔥 HEADING */}
          <h1
            className={`text-[34px] md:text-[64px] font-serif text-white leading-tight transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              visible
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-20 scale-95"
            }`}
          >
            {typedText}
            <span className="text-[#C8A96A] animate-pulse">|</span>
          </h1>

          {/* SUBTITLE */}
          <p
            className={`text-[#C8A96A] mt-5 text-[18px] md:text-[22px] tracking-wide transition-all duration-1000 delay-200 ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
            }`}
          >
            Welcome to Cafe Brewfield
          </p>

          {/* DESCRIPTION */}
          <p
            className={`text-white/70 mt-4 mb-8 text-[15px] md:text-[16px] leading-relaxed transition-all duration-1000 delay-300 ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
            }`}
          >
            Step into a world where coffee meets craftsmanship. Experience
            Italian elegance blended with modern cafe culture.
          </p>

          {/* BUTTON */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              visible
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-20 scale-90"
            }`}
          >
            <a
              href="/franchise"
              className="inline-block bg-[#C8A96A] text-black px-8 py-3 text-[12px] tracking-[2px] uppercase hover:scale-105 transition hover:shadow-[0_0_25px_rgba(200,169,106,0.6)]"
            >
              Explore Franchise
            </a>
          </div>

          {/* STATS */}
          <div
            className={`flex justify-center gap-10 mt-10 transition-all duration-1000 delay-700 ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
            }`}
          >
            <div>
              <h2 className="text-[26px] md:text-[30px] font-bold text-[#C8A96A]">
                {count}+
              </h2>
              <p className="text-xs md:text-sm text-white/60">
                Happy Customers
              </p>
            </div>

            <div>
              <h2 className="text-[26px] md:text-[30px] font-bold text-[#C8A96A]">
                15+
              </h2>
              <p className="text-xs md:text-sm text-white/60">
                Locations
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}