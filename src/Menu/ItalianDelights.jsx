import { useInView } from "../useInView";

const delights = [
  {
    name: "Tiramisu",
    desc: "Classic Italian dessert made with layers of mascarpone and espresso soaked ladyfingers.",
    price: "₹210",
    img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9",
  },
  {
    name: "Croissant",
    desc: "Buttery, flaky croissant, perfect with your coffee.",
    price: "₹130",
    img: "https://images.unsplash.com/photo-1509440159596-0249088772ff",
  },
  {
    name: "Cannoli",
    desc: "Crispy pastry filled with sweet ricotta cream.",
    price: "₹140",
    img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c",
  },
  {
    name: "Belgian Waffles",
    desc: "Golden waffles topped with syrup and fresh fruits.",
    price: "₹220",
    img: "https://images.unsplash.com/photo-1562376552-0d160a2f238d",
  },
  {
    name: "Cheesecake",
    desc: "Rich and creamy cheesecake with a hint of vanilla.",
    price: "₹230",
    img: "https://images.unsplash.com/photo-1551024601-bec78aea704b",
  },
  {
    name: "Panini",
    desc: "Grilled Italian sandwich with fresh ingredients.",
    price: "₹240",
    img: "https://images.unsplash.com/photo-1550547660-d9450f859349",
  },
];

export default function ItalianDelights() {
  const [ref, visible] = useInView({ threshold: 0.2 });

  return (
    <section className="relative bg-black py-[110px] px-6 md:px-16 overflow-hidden">

      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,169,106,0.06),transparent_70%)]"></div>

      <div ref={ref} className="relative z-10 max-w-[1400px] mx-auto">

        {/* TITLE */}
        <div className="text-center mb-14">
          <h2 className="text-[34px] md:text-[42px] font-serif text-white mb-3">
            Italian <span className="text-[#C8A96A]">Delights</span>
          </h2>

          <div className="w-[70px] h-[2px] bg-[#C8A96A] mx-auto mb-3"></div>

          <p className="text-white/60 text-[14px]">
            Authentic Italian treats crafted for indulgence.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-10">

          {delights.map((item, i) => (
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
                  className="w-[95px] h-[95px] object-cover transition duration-500 group-hover:scale-110 brightness-[0.9]"
                />

                {/* IMAGE GLOW */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle,rgba(200,169,106,0.15),transparent_70%)]"></div>
              </div>

              {/* CONTENT */}
              <div className="flex-1">

                <div className="flex justify-between items-center">

                  <h3 className="relative text-white text-[17px] font-medium group-hover:text-[#C8A96A] transition">

                    {item.name}

                    {/* UNDERLINE */}
                    <span className="absolute left-0 bottom-[-4px] h-[2px] bg-[#C8A96A] w-0 group-hover:w-full transition-all duration-500"></span>

                  </h3>

                  {/* PRICE */}
                  <span className="text-[#C8A96A] text-[14px] group-hover:scale-110 transition">
                    {item.price}
                  </span>

                </div>

                {/* DIVIDER */}
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