import React from "react";
import "../App.css";

export default function Footer() {
  return (
    <section className="bg-[#1A237E] text-white px-8 pt-24  ">
      <div className="bg-[#388E3C] w-full px-6 py-6 text-white rounded-md">
        <div className="px-4 lg:px-12 grid lg:grid-cols-2 gap-4 lg:gap-8 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl lg:text-4xl font-bold py-2">
              Subscribe To Our Newsletter!
            </h1>
          </div>
          <div className="flex flex-col lg:flex-row items-center">
            <input
              className="p-4 w-full lg:w-[400px] rounded-md text-black mb-4 lg:mb-0 lg:mr-4"
              type="email"
              placeholder="Email Address..."
            />
            <button
              id="button-hover-effect"
              className="inline-flex items-center bg-[#1A237E] rounded-md justify-center px-6 lg:px-8 py-3 lg:py-4 font-medium text-white text-base"
            >
              Subscribe Now
              <i id="arrow-icon" className="fas fa-arrow-right pl-2"></i>
            </button>
          </div>
        </div>
      </div>

      <footer className="w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4 xl:flex xl:flex-row pt-14 pb-14">
            {/* Contact Us */}
            <div className="w-full text-left">
              <h4 className="text-2xl font-medium mb-7">Contact Us</h4>
              <ul className="transition-all duration-500 font-semibold">
                <li className="pb-4">
                  <i class="fa-solid fa-map text-white pr-2"></i>
                  <span className="text-white pr-6">
                    House No 20 Link Road, Odoi Beyeden St, Accra
                  </span>
                </li>
                <li className="py-4">
                  <i className="fa-solid fa-phone text-white pr-2"></i>
                  <span className="text-white pr-6">+00 9800 7804</span>
                </li>
                <li className="py-4">
                  <i className="fa-regular fa-envelope text-white pr-2"></i>
                  <span className="text-white pr-6">bizdesk@domain.com</span>
                </li>
                <li className="py-4">
                  <i className="fa-solid fa-location-dot text-white pr-2"></i>
                  <span className="text-white pr-6">9:00am - 7:00pm</span>
                </li>
              </ul>
            </div>

            {/* Our Services */}
            <div className="w-full text-left">
              <h4 className="text-2xl font-medium mb-7">Our Services</h4>
              <ul className="transition-all duration-500 font-semibold">
                <li className="mb-6">
                  <i className="fa-solid fa-arrow-right pr-2 text-l font-semibold"></i>
                  <a href="#" className="hover:text-[#388E3C]">
                    Business Analysis
                  </a>
                </li>
                <li className="mb-6">
                  <i className="fa-solid fa-arrow-right pr-2 text-l font-semibold"></i>
                  <a href="#" className="hover:text-[#388E3C]">
                    Report Analysis
                  </a>
                </li>
                <li className="mb-6">
                  <i className="fa-solid fa-arrow-right pr-2 text-l font-semibold"></i>
                  <a href="#" className="hover:text-[#388E3C]">
                    Project Reporting
                  </a>
                </li>
                <li className="mb-6">
                  <i className="fa-solid fa-arrow-right pr-2 text-l font-semibold"></i>
                  <a href="#" className="hover:text-[#388E3C]">
                    Security Enhanced
                  </a>
                </li>
                <li className="">
                  <i className="fa-solid fa-arrow-right pr-2 text-l font-semibold"></i>
                  <a href="#" className="hover:text-[#388E3C]">
                    SEO Optimised
                  </a>
                </li>
              </ul>
            </div>

            <div className="h-fullborder-l border-gray-600  mt-1"></div>

            <div className="w-full text-left">
              <h4 className="text-2xl font-medium mb-7">Useful Links</h4>
              <ul className="transition-all duration-500 font-semibold">
                <li className="mb-6">
                  <i className="fa-solid fa-arrow-right pr-2 text-l font-semibold"></i>
                  <a href="#" className="hover:text-[#388E3C]">
                    About Us
                  </a>
                </li>
                <li className="mb-6">
                  <i className="fa-solid fa-arrow-right pr-2 text-l font-semibold"></i>
                  <a href="#" className="hover:text-[#388E3C]">
                    Our Services
                  </a>
                </li>
                <li className="mb-6">
                  <i className="fa-solid fa-arrow-right pr-2 text-l font-semibold"></i>
                  <a href="#" className="hover:text-[#388E3C]">
                    Our Team
                  </a>
                </li>
                <li className="mb-6">
                  <i className="fa-solid fa-arrow-right pr-2 text-l font-semibold"></i>
                  <a href="#" className="hover:text-[#388E3C]">
                    Testimonials
                  </a>
                </li>
                <li className="">
                  <i className="fa-solid fa-arrow-right pr-2 text-l font-semibold"></i>
                  <a href="#" className="hover:text-[#388E3C]">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Latest Posts */}
            <div className="w-full text-left">
              <h4 className="text-2xl font-medium mb-7">Latest Posts</h4>
              <ul className="transition-all duration-500">
                <li className="mb-6">
                  <div class="">
                    <div class="flex gap-3 px-8 bg-blue-800 border border-gray-300 rounded-xl overflow-hidden items-center justify-start">
                      <div class="relative w-12 h-12 flex-shrink-0">
                        <img
                          class="absolute left-0 top-0 w-full h-full object-cover object-center transition duration-50"
                          loading="lazy"
                          src="https://via.placeholder.com/150"
                        />
                      </div>

                      <div class="flex flex-col gap-2 py-2">
                        <p class="text-xl font-bold">Avenue money and make you very</p>

                        <p class="text-gray-500">
                          Description of your post/article, Description of your
                          post/article,
                        </p>

                        
                      </div>
                    </div>
                  </div>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Tips & Tricks
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    New Updates
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="javascript:;"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Events
                  </a>
                </li>
                <li className="">
                  <a
                    href="javascript:;"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Editorial
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="py-7 border-t border-gray-200 text-white">
            <div className="flex items-center justify-center flex-col sm:justify-between sm:flex-row">
              <span className="text-sm">
                © copyright 2024, BizDesk. Designed by{" "}
                <a
                  className="hover:text-[#388E3C] font-semibold"
                  href="https://my-portfolio-sigma-bice-18.vercel.app/"
                >
                  Hannan
                </a>
                .
              </span>
              <div className="flex mt-6 space-x-4 sm:justify-center sm:mt-0">
                <a href="#" className="hover:text-[#388E3C]">
                  Privacy Policy
                </a>
                <div className="">
                  <p className="relative inline-flex rounded-full h-2 w-2 bg-white pt"></p>
                </div>
                <a
                  href="https://maps.app.goo.gl/vTxn2hvCEwTtddcs6
                "
                  className="hover:text-[#388E3C]"
                >
                  View on Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
