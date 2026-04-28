export default function Experience() {
  return (
    <section className="relative bg-black py-[120px] px-[60px] overflow-hidden">

      {/* ✨ GOLD GLOW */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-[radial-gradient(circle,rgba(200,169,106,0.08),transparent_70%)]" />

      {/* HEADER */}
      <div className="relative z-[2] max-w-[1200px] mx-auto text-center mb-[70px]">

        <span className="text-[#C8A96A] tracking-[2px] text-[12px]">
          The Brewfield Difference
        </span>

        <h2 className="text-[42px] text-white font-serif mt-2 leading-tight">
          Four Pillars of<br />
          <em className="text-[#C8A96A] not-italic">
            Uncompromising Excellence
          </em>
        </h2>

      </div>

      {/* GRID */}
      <div className="relative z-[2] max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[25px]">

        {/* CARD 1 */}
        <div className="relative p-[48px_32px] bg-[rgba(20,15,10,0.95)] border border-[rgba(200,169,106,0.25)] backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.6)] transition-all duration-400 group hover:-translate-y-[10px] hover:border-[#C8A96A] hover:shadow-[0_25px_70px_rgba(0,0,0,0.8)]">

          <span className="absolute top-[20px] right-[20px] text-[60px] text-[rgba(251,249,243,0.5)]">
            01
          </span>

          <span className="block text-[30px] mb-[20px] text-[rgba(200,169,106,0.08)]">
            .
          </span>

          <h3 className="text-[22px] text-[#C8A96A] mb-[15px]">
            Premium Italian Beans
          </h3>

          <p className="text-[13px] text-white/65 leading-[1.8]">
            Single-origin Arabica sourced from Italy's finest roasters. Each batch is cupped and graded before it reaches your cup — no compromises, ever.
          </p>

          {/* GOLD LINE */}
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#C8A96A] to-transparent scale-x-0 origin-left transition duration-400 group-hover:scale-x-100"></span>

          {/* LIGHT */}
          <span className="absolute inset-0 bg-[linear-gradient(120deg,rgba(200,169,106,0.1),transparent_40%)]"></span>

        </div>

        {/* CARD 2 */}
        <div className="relative p-[48px_32px] bg-[rgba(20,15,10,0.95)] border border-[rgba(200,169,106,0.25)] backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.6)] transition-all duration-400 group hover:-translate-y-[10px] hover:border-[#C8A96A] hover:shadow-[0_25px_70px_rgba(0,0,0,0.8)]">

          <span className="absolute top-[20px] right-[20px] text-[60px] text-[rgba(251,249,243,0.5)]">
            02
          </span>

          <span className="block text-[30px] mb-[20px] text-[rgba(200,169,106,0.08)]">
            .
          </span>

          <h3 className="text-[22px] text-[#C8A96A] mb-[15px]">
            Luxury Ambience
          </h3>

          <p className="text-[13px] text-white/65 leading-[1.8]">
            Every Brewfield outlet is designed as a sanctuary — marble surfaces, warm amber lighting, and handcrafted furniture that invites you to stay longer.
          </p>

          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#C8A96A] to-transparent scale-x-0 origin-left transition duration-400 group-hover:scale-x-100"></span>
          <span className="absolute inset-0 bg-[linear-gradient(120deg,rgba(200,169,106,0.1),transparent_40%)]"></span>

        </div>

        {/* CARD 3 */}
        <div className="relative p-[48px_32px] bg-[rgba(20,15,10,0.95)] border border-[rgba(200,169,106,0.25)] backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.6)] transition-all duration-400 group hover:-translate-y-[10px] hover:border-[#C8A96A] hover:shadow-[0_25px_70px_rgba(0,0,0,0.8)]">

          <span className="absolute top-[20px] right-[20px] text-[60px] text-[rgba(251,249,243,0.5)]">
            03
          </span>

          <span className="block text-[30px] mb-[20px] text-[rgba(200,169,106,0.08)]">
            .
          </span>

          <h3 className="text-[22px] text-[#C8A96A] mb-[15px]">
            Curated Menu
          </h3>

          <p className="text-[13px] text-white/65 leading-[1.8]">
            Our menu is a love letter to Italian café culture — from ristretto to affogato, each item is an invitation to slow down and savour the extraordinary.
          </p>

          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#C8A96A] to-transparent scale-x-0 origin-left transition duration-400 group-hover:scale-x-100"></span>
          <span className="absolute inset-0 bg-[linear-gradient(120deg,rgba(200,169,106,0.1),transparent_40%)]"></span>

        </div>

        {/* CARD 4 */}
        <div className="relative p-[48px_32px] bg-[rgba(20,15,10,0.95)] border border-[rgba(200,169,106,0.25)] backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.6)] transition-all duration-400 group hover:-translate-y-[10px] hover:border-[#C8A96A] hover:shadow-[0_25px_70px_rgba(0,0,0,0.8)]">

          <span className="absolute top-[20px] right-[20px] text-[60px] text-[rgba(251,249,243,0.5)]">
            04
          </span>

          <span className="block text-[30px] mb-[20px] text-[rgba(200,169,106,0.08)]">
            .
          </span>

          <h3 className="text-[22px] text-[#C8A96A] mb-[15px]">
            Consistent Experience
          </h3>

          <p className="text-[13px] text-white/65 leading-[1.8]">
            Whether in Connaught Place or Dubai Marina, every Brewfield experience is identical in its pursuit of perfection — warmth, craft, and elegance without variation.
          </p>

          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#C8A96A] to-transparent scale-x-0 origin-left transition duration-400 group-hover:scale-x-100"></span>
          <span className="absolute inset-0 bg-[linear-gradient(120deg,rgba(200,169,106,0.1),transparent_40%)]"></span>

        </div>

      </div>

      {/* 📱 RESPONSIVE */}
      <style jsx>{`
        @media (max-width: 1000px) {
          section {
            padding: 100px 40px;
          }
        }

        @media (max-width: 600px) {
          section {
            padding: 80px 20px;
          }
        }
      `}</style>

    </section>
  );
}