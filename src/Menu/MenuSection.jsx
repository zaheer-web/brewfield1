import { useState } from "react";
import { useInView } from "../useInView";

const menuData = {
  coffees: [
    {
      name: "Espresso",
      desc: "Rich and intense Italian espresso shot.",
      price: "₹120",
      img: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
    },
    {
      name: "Cafe Latte",
      desc: "Espresso with steamed milk and light foam.",
      price: "₹160",
      img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
    },
    {
      name: "Cappuccino",
      desc: "Espresso, steamed milk, and creamy foam.",
      price: "₹170",
      img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
    },
    {
      name: "Americano",
      desc: "Smooth espresso diluted with hot water.",
      price: "₹140",
      img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735",
    },
  ],

  teas: [
    {
      name: "Green Tea",
      desc: "Refreshing and antioxidant-rich blend.",
      price: "₹110",
      img: "https://images.unsplash.com/photo-1523906630133-f6934a1ab2b9",
    },
    {
      name: "Masala Chai",
      desc: "Traditional Indian spiced tea.",
      price: "₹90",
      img: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7",
    },
  ],

  delights: [
    {
      name: "Croissant",
      desc: "Flaky buttery French delight.",
      price: "₹180",
      img: "https://images.unsplash.com/photo-1509440159596-0249088772ff",
    },
    {
      name: "Tiramisu",
      desc: "Classic Italian dessert with coffee flavor.",
      price: "₹250",
      img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9",
    },
  ],
};

export default function MenuSection() {
  const [active, setActive] = useState("coffees");
  const [ref, visible] = useInView({ threshold: 0.2 });

  return (
    <section className="relative bg-black py-[110px] px-6 md:px-16 overflow-hidden">

      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,169,106,0.06),transparent_70%)]"></div>

      <div ref={ref} className="relative z-10 max-w-[1400px] mx-auto">

        {/* 🔥 TABS */}
        <div className="flex justify-center mb-16 flex-wrap gap-3">
          {Object.keys(menuData).map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`relative px-6 py-2 text-[11px] tracking-[2px] uppercase border transition-all duration-300 overflow-hidden
              ${
                active === cat
                  ? "text-black bg-[#C8A96A] border-[#C8A96A]"
                  : "border-[#C8A96A]/30 text-white/70 hover:border-[#C8A96A]"
              }`}
            >
              {cat}

              {/* 🔥 ACTIVE UNDERLINE */}
              <span className={`absolute left-0 bottom-0 h-[2px] bg-[#C8A96A] transition-all duration-500 ${
                active === cat ? "w-full" : "w-0"
              }`}></span>
            </button>
          ))}
        </div>

        {/* TITLE */}
        <div className="text-center mb-12">
          <h2 className="text-[32px] md:text-[38px] font-serif text-white mb-2">
            {active.toUpperCase()}
          </h2>
          <div className="w-[70px] h-[2px] bg-[#C8A96A] mx-auto"></div>
        </div>

        {/* 🔥 MENU LIST */}
        <div className="space-y-10">

          {menuData[active].map((item, i) => (
            <div
              key={i}
              className={`group flex gap-5 items-start pb-6 border-b border-[#C8A96A]/10 transition-all duration-700 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >

              {/* IMAGE */}
              <div className="relative overflow-hidden rounded-md">
                <img
                  src={item.img}
                  className="w-[90px] h-[90px] object-cover transition duration-500 group-hover:scale-110 brightness-[0.9]"
                />

                {/* IMAGE GLOW */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle,rgba(200,169,106,0.15),transparent_70%)]"></div>
              </div>

              {/* TEXT */}
              <div className="flex-1">

                <div className="flex justify-between items-center">

                  <h3 className="relative text-white text-[18px] font-medium group-hover:text-[#C8A96A] transition">

                    {item.name}

                    {/* 🔥 UNDERLINE ANIMATION */}
                    <span className="absolute left-0 bottom-[-4px] h-[2px] bg-[#C8A96A] w-0 group-hover:w-full transition-all duration-500"></span>

                  </h3>

                  {/* 🔥 PRICE GLOW */}
                  <span className="text-[#C8A96A] text-[14px] group-hover:scale-110 transition">
                    {item.price}
                  </span>

                </div>

                {/* PREMIUM DIVIDER */}
                <div className="h-[1px] bg-gradient-to-r from-[#C8A96A]/40 to-transparent my-2"></div>

                <p className="text-white/60 text-[13px] leading-[1.7]">
                  {item.desc}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}