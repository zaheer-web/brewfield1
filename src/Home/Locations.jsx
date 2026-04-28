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
    <section className="relative bg-black py-[100px] md:py-[120px] px-5 md:px-[60px] overflow-hidden">

      {/* GOLD GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,169,106,0.08),transparent_70%)]" />

      <div className="relative z-[2] max-w-[1200px] mx-auto">

        {/* HEADER */}
        <div className="text-center mb-[60px]">
          <span className="text-[#C8A96A] tracking-[3px] text-[11px] uppercase">
            Our Presence
          </span>

          <h2 className="text-[30px] md:text-[42px] text-white font-serif mt-3 leading-tight">
            Find Us Where<br />
            <span className="text-[#C8A96A]">Luxury Lives</span>
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">

          {locations.map((loc, i) => (
            <div
              key={i}
              className={`group relative p-[30px] md:p-[38px] backdrop-blur-md border transition-all duration-500 overflow-hidden
              ${loc.dim
                ? "opacity-50 border-dashed border-[#C8A96A]/20"
                : "bg-[rgba(12,9,7,0.9)] border-[#C8A96A]/20 hover:-translate-y-2 hover:border-[#C8A96A] hover:shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_25px_rgba(200,169,106,0.15)]"
              }`}
            >

              {/* ✨ GRADIENT BORDER EFFECT */}
              {!loc.dim && (
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[linear-gradient(120deg,rgba(200,169,106,0.1),transparent_60%)]" />
              )}

              {/* DOT */}
              <div
                className={`w-[8px] h-[8px] rounded-full mb-[18px]
                ${loc.dim
                  ? "bg-[#C8A96A]/30"
                  : "bg-[#C8A96A] shadow-[0_0_15px_rgba(200,169,106,0.9)] animate-[pulse_2s_infinite]"
                }`}
              />

              {/* CITY */}
              <h3 className="text-[22px] md:text-[26px] text-white mb-[6px] group-hover:text-[#C8A96A] transition">
                {loc.city}
              </h3>

              {/* DETAILS */}
              <p className="text-[13px] text-white/60">{loc.area}</p>
              <p className="text-[13px] text-white/60">{loc.time}</p>

              {/* STATUS BADGE */}
              <div
                className={`inline-block mt-[18px] px-3 py-1 text-[10px] tracking-[2px] uppercase border
                ${loc.dim
                  ? "text-[#C8A96A]/40 border-[#C8A96A]/20"
                  : "text-[#C8A96A] border-[#C8A96A]/40 bg-[#C8A96A]/5"
                }`}
              >
                {loc.status}
              </div>

            </div>
          ))}

        </div>

      </div>

      {/* ANIMATION */}
      <style jsx>{`
        @keyframes pulse {
          0% { box-shadow: 0 0 0 rgba(200,169,106,0.5); }
          50% { box-shadow: 0 0 25px rgba(200,169,106,1); }
          100% { box-shadow: 0 0 0 rgba(200,169,106,0.5); }
        }
      `}</style>

    </section>
  );
}