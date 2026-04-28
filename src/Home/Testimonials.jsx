export default function Testimonials() {
  const data = [
    {
      name: "Radhika Mehrotra",
      role: "Interior Designer, Delhi",
      avatar: "R",
      quote:
        "Walking into Brewfield feels like stepping into a caffè in Milan. The espresso is transcendent, the ambience even more so. This is what coffee culture should look like in India.",
    },
    {
      name: "Vikram Nanda",
      role: "Franchise Partner, Noida",
      avatar: "V",
      quote:
        "As a franchise investor who has evaluated over 30 F&B concepts, Brewfield's combination of brand positioning, unit economics, and operational support is genuinely exceptional.",
    },
    {
      name: "Aanya Khanna",
      role: "Architect, Gurugram",
      avatar: "A",
      quote:
        "The latte art alone is worth the visit. But what keeps me coming back is the ritual — the unhurried pace, the craft, the feeling that someone truly cared about your experience.",
    },
  ];

  return (
    <section className="relative bg-black py-[120px] px-[60px]">

      {/* ✨ GOLD GLOW */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(200,169,106,0.06),transparent_70%)]" />

      {/* HEADER */}
      <div className="relative z-[2] text-center mb-[70px]">
        <span className="text-[#C8A96A] tracking-[2px] text-[12px]">
          Social Proof
        </span>

        <h2 className="text-[42px] text-white font-serif mt-2 leading-tight">
          Words from Those Who<br />
          <em className="text-[#C8A96A] not-italic">Know Luxury</em>
        </h2>
      </div>

      {/* GRID */}
      <div className="relative z-[2] max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[28px]">

        {data.map((item, i) => (
          <div
            key={i}
            className="relative p-[44px_34px] bg-[rgba(10,8,6,0.9)] border border-[rgba(200,169,106,0.2)] backdrop-blur-md overflow-hidden transition duration-300 hover:-translate-y-[10px] hover:border-[#C8A96A] hover:bg-[rgba(15,10,8,0.95)] hover:shadow-[0_25px_70px_rgba(0,0,0,0.9),0_0_20px_rgba(200,169,106,0.15)] group"
          >

            {/* GOLD LIGHT */}
            <span className="absolute inset-0 bg-[linear-gradient(120deg,rgba(200,169,106,0.1),transparent_50%)] opacity-0 group-hover:opacity-100 transition duration-300"></span>

            {/* GOLD LINE */}
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#C8A96A] to-transparent scale-x-0 origin-left transition duration-300 group-hover:scale-x-100"></span>

            {/* STARS */}
            <div className="text-[#C8A96A] text-[14px] tracking-[3px] mb-[22px]">
              ★★★★★
            </div>

            {/* QUOTE */}
            <p className="text-[17px] italic leading-[1.8] text-white/85 mb-[30px]">
              "{item.quote}"
            </p>

            {/* AUTHOR */}
            <div className="flex items-center gap-[14px]">

              {/* AVATAR */}
              <div className="w-[46px] h-[46px] rounded-full flex items-center justify-center text-[#C8A96A] text-[18px] border border-[rgba(200,169,106,0.4)] bg-[rgba(200,169,106,0.08)] transition duration-300 group-hover:scale-[1.12] group-hover:shadow-[0_0_18px_rgba(200,169,106,0.5)]">
                {item.avatar}
              </div>

              <div>
                <div className="text-[13px] text-white">
                  {item.name}
                </div>
                <div className="text-[11px] text-white/45 tracking-[1px]">
                  {item.role}
                </div>
              </div>

            </div>

          </div>
        ))}

      </div>

      {/* 📱 RESPONSIVE */}
      <style jsx>{`
        @media (max-width: 900px) {
          section {
            padding: 80px 30px;
          }
        }

        @media (max-width: 600px) {
          section {
            padding: 60px 20px;
          }
        }
      `}</style>

    </section>
  );
}