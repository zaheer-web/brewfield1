import img1 from "../img/ha-1.jpg";
import img2 from "../img/ha-2.png";

export default function About() {
  return (
    <section className="relative bg-black py-[100px] px-4 md:px-[60px] overflow-hidden">

      {/* GOLD GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,169,106,0.08),transparent_40%)]" />

      <div className="relative max-w-[1200px] mx-auto grid md:grid-cols-2 gap-[60px] items-center">

        {/* ===== LEFT VISUAL ===== */}
        <div className="relative min-h-[420px] md:min-h-[550px]">

          {/* YEAR */}
          <div className="absolute top-0 left-2 md:left-[5%] text-[50px] md:text-[80px] text-[#C8A96A] opacity-[0.06]">
            1924
          </div>

          {/* BEANS IMAGE */}
          <div className="absolute w-[85%] md:w-[75%] h-[70%] md:h-[80%] top-[10%] right-0 overflow-hidden border border-[#C8A96A]/30">
            <img src={img1} className="w-full h-full object-cover brightness-[0.8]" />
          </div>

          {/* CUP */}
          <div className="absolute w-[65%] md:w-[55%] bottom-[-10px] md:bottom-0 left-[-10px] md:left-0 z-10">
            <img src={img2} className="w-full h-auto object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]" />
          </div>

          {/* BADGE */}
          <div className="absolute right-[5%] bottom-[10%] md:bottom-[15%] w-[80px] h-[80px] md:w-[110px] md:h-[110px] rounded-full bg-[#C8A96A] text-black flex flex-col items-center justify-center shadow-[0_0_30px_rgba(200,169,106,0.4)]">
            <span className="text-[20px] md:text-[28px] font-bold">100</span>
            <span className="text-[8px] md:text-[10px] uppercase text-center leading-tight">
              Year<br />Heritage
            </span>
          </div>

        </div>

        {/* ===== RIGHT CONTENT ===== */}
        <div className="text-center md:text-left max-w-[600px] mx-auto md:mx-0">

          <span className="text-[#C8A96A] tracking-[2px] text-[11px] uppercase">
            Our Heritage
          </span>

          <h2 className="text-[30px] md:text-[44px] text-white mt-[12px] font-serif leading-tight">
            Born from Italian <br />
            <span className="text-[#C8A96A]">Tradition</span>
          </h2>

          <div className="w-[50px] md:w-[60px] h-[2px] bg-[#C8A96A] my-[18px] mx-auto md:mx-0" />

          <p className="text-white/70 text-[14px] md:text-[15px] leading-[1.8] mb-[15px]">
            Brewfield Cafe was conceived with a singular obsession: to bring the soul of an authentic Italian caffè to the streets of Delhi NCR.
          </p>

          <p className="text-white/70 text-[14px] md:text-[15px] leading-[1.8] mb-[15px]">
            From our single-origin Arabica blends to our hand-trained baristas — this is not just coffee, this is heritage.
          </p>

          {/* STATS */}
          <div className="grid grid-cols-2 gap-[20px] md:gap-[30px] mt-[30px]">

            <div>
              <div className="text-[26px] md:text-[38px] text-[#C8A96A]">12+</div>
              <div className="text-[10px] text-white/50 tracking-[2px]">
                Premium Blends
              </div>
            </div>

            <div>
              <div className="text-[26px] md:text-[38px] text-[#C8A96A]">5★</div>
              <div className="text-[10px] text-white/50 tracking-[2px]">
                Experience
              </div>
            </div>

            <div>
              <div className="text-[26px] md:text-[38px] text-[#C8A96A]">3</div>
              <div className="text-[10px] text-white/50 tracking-[2px]">
                Cities
              </div>
            </div>

            <div>
              <div className="text-[26px] md:text-[38px] text-[#C8A96A]">₹Cr+</div>
              <div className="text-[10px] text-white/50 tracking-[2px]">
                ROI
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}