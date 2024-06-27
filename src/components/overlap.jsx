import React from "react";
import bizdesk4 from "../assets/bizdesk4.png";

export default function Overlap() {
  return (
    <div className="relative w-full">
    <img
      src={bizdesk4}
      alt="bizdesk"
      className="absolute top-0 right-10 w-2/3"
      style={{ maxWidth: "26%", transform: "translateY(-105%)" }}
    />
  </div>
  
  );
}
