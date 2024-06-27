import React from "react";
import bizdesk21 from "../assets/bizdesk21.jpg";

export default function Vid() {
  return (
    <>
      <section
        className="relative"
        style={{
          backgroundImage: `url(${bizdesk21})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "700px",
          padding: "50px",
        }}
      >
        <div className="absolute left-1/4 top-full transform -translate-x-1/2 -translate-y-[400px]">
        <a href="#" className="max-w-3xl pt-44 text-6xl font-bold text-[#1A237E] leading-none">
          <i className="far fa-circle-play animate-ping"></i>
        </a>
      </div>
      </section>
      
    </>
  );
}
