import React from "react";
import "../App.css";

export default function WhyUs() {
  return (
    <>
      <section className="text-[#061430] pt-[120px] pb-[50px]">
        <div className="flex justify-between pr-6">
          <div>
            <h1 className="text-[42px] font-bold   pl-16">
              Some Reasons To Count On Us <br />
            </h1>
            <p className="text-xl pt-4 pl-16">
              Your trust is our most valuable asset. Count on us for unwavering
              reliability knowing
              <br />{" "}
              <span> that we are committed to delivering on our promises.</span>
            </p>
          </div>
          <div className="pt-12 ">
            <button
              className="inline-flex items-center bg-[#388E3C] rounded-md justify-center mt-2 px-8 py-5 font-medium text-center text-white rounded text-lg "
              id="button-hover-effect"
            >
              Get Free Consultation
              <i
                id="arrow-icon"
                className="fa-solid fa-arrow-right pl-4 text-l font-semibold"
              ></i>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 pl-8 pt-32 text-lg">
          <div>
            <i class="fa-solid fa-bolt text-3xl pr-4 "></i>
            <div>
              <h2 className="font-semibold text-xl py-2.5">Quick Services</h2>
            </div>
            <p className="pb-12">
              Podcasting operational
              <br /> <span>change management inside.</span>
            </p>
          </div>
          <div>
            <i class="fa-regular fa-id-card text-3xl pr-4 "></i>
            <div>
              <h2 className="font-semibold text-xl py-2.5">
                Dedicated Team Member
              </h2>
            </div>
            <p className="pb-12">
              Interactively coordinate proactive
              <br /> <span>commerce via process.</span>
            </p>
          </div>
          <div>
            <i class="fa-solid fa-timeline text-3xl pr-4 "></i>
            <div>
              <h2 className="font-semibold text-xl py-2.5">
                Fast Working Process{" "}
              </h2>
            </div>
            <p className="pb-12">
              Holisticly predominate extensible testing procedures.
            </p>
          </div>
          <div>
            <i class="fa-solid fa-flag text-3xl pr-4"></i>
            <div>
              <h2 className="font-semibold text-xl py-2.5">24/7 Support </h2>
            </div>
            <p className="pb-12">
              Seamlessly visualize intellectual superior capital without.
            </p>
          </div>
        </div>

        <div class="container px-2 py-16 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className=" bg-[#F7F9FE] border-1 border-gray-100 px-4 pt-12 pb-6 rounded-lg" style={{ height: "220px" }}>
                <i className="top-1/2 right-0 fa-solid fa-building-shield text-5xl text-[#061430] mt-4 mr-4"></i>
                <h2 className="font-bold text-5xl pr-20">35K+</h2>
                <p className="pt-3 leading-relaxed text-lg">
                  Projects have been completed
                </p>
              </div>
            </div>

            <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div class="bg-[#F8F8F9] border-1 border-gray-100 px-4 pt-12 pb-6 rounded-lg ">
                <i class="fa-solid fa-flag text-3xl pl-52 mb-6 inline-block"></i>
                <h2 class="font-bold text-5xl pr-40">14K+</h2>
                <p class="pt-3 leading-relaxed text-lg">
                  Have been satisfied Client
                </p>
              </div>
            </div>
            <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div class="bg-[#F7F9FE] border-1 border-gray-100 px-4 pt-12 pb-6 rounded-lg ">
                <i class="fa-solid fa-flag text-3xl pl-52 mb-6 inline-block"></i>
                <h2 class="font-bold text-5xl pr-40">30K+</h2>
                <p class="pt-3 leading-relaxed text-lg">
                  Years of experience in this role
                </p>
              </div>
            </div>
            <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div class="bg-[#F8F8F9] border-1 border-gray-100 px-4 pt-12 pb-6 rounded-lg ">
                <i class="fa-solid fa-flag text-3xl pl-52 mb-6 inline-block"></i>
                <h2 class="font-bold text-5xl pr-40">100K+</h2>
                <p class="pt-3 leading-relaxed text-lg">
                  We have skilled members
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
