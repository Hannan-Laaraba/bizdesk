import React, { useState } from "react";
import Bizdesk from "../assets/bizdesk.png" ;
import "../App.css";


export default function Navbar() {
  const [dropdown, setDropdown] = useState(null);

  //function for item hover
  const handleMouseEnter = (item) => {
    setDropdown(item);
  }

  //function for leaving item 
  const handleMouseLeave = () => {
    setDropdown(null);
  };

  return (
    <>
      <div class="sticky top-0 z-50 text-white bg-white border-b px-4">
        <div class="grid min-h-[100px] w-full place-items-center  rounded-lg p-6 ">
          <div class="-m-6 max-h-[768px] w-[calc(100%+48px)] ">
            <nav>
              <div class="flex items-center justify-between text-blue-gray-900">
                <a href="#" class="mr-4 cursor-pointer">
                  <img src={Bizdesk} alt="bizdesk" className="h-14" />
                </a>
                <div class="flex items-center text-lg text-black gap-4">
                  <div class="hidden mr-4 lg:block">
                    <ul class="flex flex-col gap-2 mt-2 mb-4 font-semibold lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                      <li class="text-blue-gray-900 hover:text-[#388E3C] "
                      onMouseEnter={() => handleMouseEnter("home")}
                      onMouseLeave= {handleMouseLeave}>
                        <a href="#"> HOME </a>
                        <span><i class="fa-solid fa-chevron-down text-sm"></i></span>
                        {dropdown === "home" && (
                        <div className=" grid grid-cols-3 gap-4 absolute top-full left-30 bg-[#388E3C] text-white border border-gray-200 shadow-lg rounded-lg py-2 px-4">
                         <a href="#">Home1</a>
                         <a href="#">Home2</a>
                         <a href="#">Home3</a>
                        </div>
                        )}
                      </li>
                      <li class="text-blue-gray-900 hover:text-[#388E3C] ">
                        <a href="#">
                          ABOUT US
                        </a>
                      </li>
                      <li class=" text-blue-gray-900 hover:text-[#388E3C] ">
                        <a href="#" >PAGES</a> {}
                        <span><i class="fa-solid fa-chevron-down text-sm"></i></span>
                      </li>
                      <li class=" text-blue-gray-900 hover:text-[#388E3C] ">
                      <a href="#" >PORTFOLIO</a> {}
                      <span><i class="fa-solid fa-chevron-down text-sm"></i></span>
                      </li>
                      <li class="text-blue-gray-900 hover:text-[#388E3C] ">
                        <a href="#" >BLOG</a> {} 
                        <span><i class="fa-solid fa-chevron-down text-sm"></i></span>
                        </li>
                      <li class=" text-blue-gray-900 hover:text-[#388E3C]">
                        <a href="#" class="flex items-center">
                          CONTACT
                        </a>
                      </li>
                      <li>
                        <i class="fa-solid fa-magnifying-glass font-semibold"></i>
                      </li>
                    </ul>
                  </div>
                  <div class="flex items-center gap-x-1 pr-6">
                    <button
                      class="hidden select-none border-[3px] rounded border-color:inherit bg-white py-4 px-10 text-center align-middle font-sans text-l font-semibold  text-black text-lg  transition-all hover:bg-[#388E3C] hover:text-white active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
                      type="button"
                      id="button-hover-effect"
                    >
                      <span>Get Started</span>
                      <i id="arrow-icon" class="fa-solid fa-arrow-right pl-4 text-l font-semibold"></i>
                    </button>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
