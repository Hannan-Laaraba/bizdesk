import React, { useEffect } from "react";
import bizdesk1 from "../assets/bizdesk1.jpg";
import "../App.css";
import sal from "sal.js";

export default function Hero() {
  useEffect(() => {
    sal({
      threshold: 0.5, // Trigger animation when 50% of element is visible
      once: true,     // Animate elements only once
    });
  }, []);

  return (
    <section
      className=""
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bizdesk1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "900px",
        padding: "50px",
      }}
    >
      <div data-sal="slide-up" data-sal-duration="1000" data-sal-easing="ease" className="px-0 py-8 mx-auto">
        <div className="mr-auto lg:col-span-7">
          <h1 className="max-w-3xl pt-44 text-7xl font-bold text-white leading-none">
            We help to build your business
          </h1>
          <p className="max-w-2xl pt-12 font-normal text-white lg:mb-8 md:text-lg lg:text-xl">
            Completely synergize resource taxing relationships via premier niche professionally cultivate one-to-one
            customer service..
          </p>

          <button
            className="inline-flex items-center bg-[#388E3C] rounded-md justify-center mt-2 px-8 py-6 font-medium text-center text-white rounded text-lg"
            id="button-hover-effect"
          >
            Discover More
            <i id="arrow-icon" className="fa-solid fa-arrow-right pl-4 text-l font-semibold"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
