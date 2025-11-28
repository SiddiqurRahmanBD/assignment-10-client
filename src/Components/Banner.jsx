import React from "react";
import banner from "../assets/banner.png";

const Banner = () => {
  return (
    <div>
      <section
        className="relative w-full h-100 md:h-140 bg-cover bg-center bg-no-repeat text-white py-20 px-6 rounded-2xl shadow-xl"
        style={{
          backgroundImage:
            "url('https://i.ibb.co/6chh0xJY/plate-biryani-with-bowl-rice-bowl-food-table.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm rounded-2xl"></div>

  
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 max-w-6xl mx-auto">
    
          <div className="text-center md:text-left max-w-xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Find Fresh & Free Food Near You
            </h1>

            <p className="text-lg md:text-xl mb-6 opacity-90">
              A community-driven platform where donors share food and you can
              easily find available meals around you.
            </p>

            <button className="mt-4 bg-white text-green-600 font-semibold px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition-all">
              View All Foods
            </button>
          </div>

         
          <div className="w-full hidden md:block md:w-1/2">
            <img
              src={banner}
              alt="banner"
              className="w-120 h-120 bg-blend-overlay rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
