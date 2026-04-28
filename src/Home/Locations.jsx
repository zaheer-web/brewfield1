export default function Locations() {
  const locations = [
    {
      city: "Connaught Place",
      area: "New Delhi, India",
      time: "Mon–Sun: 8am – 11pm",
      status: "Now Open",
      dim: false,
    },
    {
      city: "Sector 18",
      area: "Noida, Delhi NCR",
      time: "Mon–Sun: 9am – 10pm",
      status: "Now Open",
      dim: false,
    },
    {
      city: "Dubai Marina",
      area: "Dubai, UAE",
      time: "Daily: 8am – 12am",
      status: "Now Open",
      dim: false,
    },
    {
      city: "Gurugram",
      area: "Cyber Hub, Haryana",
      time: "Opening Q3 2025",
      status: "Coming Soon",
      dim: true,
    },
    {
      city: "Mumbai",
      area: "Bandra West, Maharashtra",
      time: "Opening Q4 2025",
      status: "Coming Soon",
      dim: true,
    },
    {
      city: "Bengaluru",
      area: "Indiranagar, Karnataka",
      time: "Opening 2026",
      status: "Expanding Soon",
      dim: true,
    },
  ];

  return (
    <section className="relative bg-black py-[120px] px-[60px]">

      {/* ✨ GOLD GLOW */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(200,169,106,0.06),transparent_70%)]" />

      <div className="relative z-[2] max-w-[1200px] mx-auto">

        {/* HEADER */}
        <div className="text-center mb-[70px]">
          <span className="text-[#C8A96A] tracking-[2px] text-[12px]">
            Our Presence
          </span>

          <h2 className="text-[42px] text-white font-serif mt-2 leading-tight">
            Find Us Where<br />
            <em className="text-[#C8A96A] not-italic">Luxury Lives</em>
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">

          {locations.map((loc, i) => (
            <div
              key={i}
              className={`relative p-[42px_32px] backdrop-blur-md border transition duration-400 overflow-hidden
              ${loc.dim
                ? "opacity-55 border-dashed border-[rgba(200,169,106,0.2)]"
                : "bg-[rgba(10,8,6,0.9)] border-[rgba(200,169,106,0.2)] hover:-translate-y-[10px] hover:border-[#C8A96A] hover:bg-[rgba(15,10,8,0.95)] hover:shadow-[0_25px_70px_rgba(0,0,0,0.8),0_0_20px_rgba(200,169,106,0.15)]"
              }`}
            >

              {/* GOLD LIGHT SWEEP */}
              {!loc.dim && (
                <span className="absolute inset-0 bg-[linear-gradient(120deg,rgba(200,169,106,0.1),transparent_50%)] opacity-0 hover:opacity-100 transition duration-400"></span>
              )}

              {/* DOT */}
              <div
                className={`w-[8px] h-[8px] rounded-full mb-[18px]
                ${loc.dim
                  ? "bg-[rgba(200,169,106,0.25)]"
                  : "bg-[#C8A96A] shadow-[0_0_15px_rgba(200,169,106,0.8)] animate-[pulse_2s_infinite]"
                }`}
              />

              {/* TEXT */}
              <div className="text-[26px] text-white mb-[6px] transition group-hover:text-[#C8A96A]">
                {loc.city}
              </div>

              <div className="text-[13px] text-white/60">{loc.area}</div>
              <div className="text-[13px] text-white/60">{loc.time}</div>

              <div
                className={`text-[10px] tracking-[3px] uppercase mt-[18px]
                ${loc.dim ? "text-[rgba(200,169,106,0.4)]" : "text-[#C8A96A]"}`}
              >
                {loc.status}
              </div>

            </div>
          ))}

        </div>

      </div>

      {/* 🎬 ANIMATION */}
      <style jsx>{`
        @keyframes pulse {
          0% { box-shadow: 0 0 0 rgba(200,169,106,0.6); }
          50% { box-shadow: 0 0 25px rgba(200,169,106,1); }
          100% { box-shadow: 0 0 0 rgba(200,169,106,0.6); }
        }

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