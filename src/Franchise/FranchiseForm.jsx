import { useInView } from "../useInView";

export default function FranchiseForm() {
  const [ref, visible] = useInView({ threshold: 0.2 });

  return (
    <section className="relative bg-black py-[120px] px-6 md:px-16 overflow-hidden">

      {/* ✨ BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,169,106,0.06),transparent_70%)]"></div>

      <div
        ref={ref}
        className="relative z-10 max-w-[1000px] mx-auto"
      >

        {/* TITLE */}
        <h2
          className={`text-center text-[32px] md:text-[40px] font-serif text-white mb-14 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Apply for <span className="text-[#C8A96A]">Franchise</span>
        </h2>

        {/* FORM BOX */}
        <div
          className={`p-8 md:p-10 border border-[#C8A96A]/20 bg-[rgba(20,15,10,0.7)] backdrop-blur-xl transition-all duration-1000 ${
            visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >

          <form className="grid md:grid-cols-2 gap-6">

            {/* INPUT STYLE */}
            {[
              { label: "Full Name", type: "text", placeholder: "Enter your name" },
              { label: "Phone Number", type: "text", placeholder: "Enter phone number" },
              { label: "Email", type: "email", placeholder: "Enter email" },
            ].map((field, i) => (
              <div key={i} className="group">
                <label className="text-white/60 text-[11px] mb-2 block tracking-[1px]">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  className="w-full bg-transparent border border-[#C8A96A]/30 px-4 py-3 text-white outline-none transition-all duration-300 
                  focus:border-[#C8A96A] focus:shadow-[0_0_10px_rgba(200,169,106,0.3)]"
                />
              </div>
            ))}

            {/* CITY */}
            <div>
              <label className="text-white/60 text-[11px] mb-2 block tracking-[1px]">
                City
              </label>
              <select className="w-full bg-black border border-[#C8A96A]/30 px-4 py-3 text-white outline-none focus:border-[#C8A96A]">
                <option>Select city</option>
                <option>Delhi</option>
                <option>Noida</option>
                <option>Gurgaon</option>
              </select>
            </div>

            {/* INVESTMENT */}
            <div>
              <label className="text-white/60 text-[11px] mb-2 block tracking-[1px]">
                Investment Budget
              </label>
              <select className="w-full bg-black border border-[#C8A96A]/30 px-4 py-3 text-white outline-none focus:border-[#C8A96A]">
                <option>Select budget</option>
                <option>₹10–15 Lakhs</option>
                <option>₹15–25 Lakhs</option>
                <option>₹25–50 Lakhs</option>
              </select>
            </div>

            {/* MESSAGE */}
            <div className="md:col-span-2">
              <label className="text-white/60 text-[11px] mb-2 block tracking-[1px]">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full bg-transparent border border-[#C8A96A]/30 px-4 py-3 text-white outline-none transition-all duration-300 
                focus:border-[#C8A96A] focus:shadow-[0_0_10px_rgba(200,169,106,0.3)]"
              ></textarea>
            </div>

            {/* BUTTON */}
            <div className="md:col-span-2 text-center mt-4">
              <button
                type="submit"
                className="relative bg-[#C8A96A] text-black px-10 py-3 text-[12px] tracking-[2px] uppercase transition 
                hover:scale-105 hover:shadow-[0_0_25px_rgba(200,169,106,0.6)]"
              >
                Submit Application

                {/* GLOW EFFECT */}
                <span className="absolute inset-0 bg-[#C8A96A]/30 blur-xl opacity-0 hover:opacity-100 transition"></span>
              </button>
            </div>

          </form>

        </div>

      </div>
    </section>
  );
}