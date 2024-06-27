import React, { useState } from "react";

export default function Services() {

    const [loadBar, setLoadBar] = useState(false);

    //function for progress bar load
    const handleMouseEnter = () => {
        setLoadBar(true);
    };

    const handleMouseLeave = () => {
        setLoadBar(false);
    };


  return (
    <>
      <section className="text-[#061430]">
        <div className="flex justify-between pr-6">
          <div>
            <h1 className="text-[40px] font-bold  pt-[120px] pl-16">
              Inspire You To Reach Your <br />
              <span>Business Goals</span>
            </h1>
          </div>
          <div className=" pt-[120px]">
            <button
              className="inline-flex items-center bg-[#388E3C] rounded-md justify-center mt-2 px-8 py-6 font-medium text-center text-white rounded text-lg "
              id="button-hover-effect"
            >
              Explore All Services
              <i
                id="arrow-icon"
                className="fa-solid fa-arrow-right pl-4 text-l font-semibold"
              ></i>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8 pl-8 pt-20  ">
          <div className="flex flex-wrap text-lg pb-14" onMouseEnter={() => handleMouseEnter} onMouseLeave={() => handleMouseLeave}>
            <i class="fa-solid fa-chart-line text-3xl pr-4 "></i>
            <div>
              <h2 className="font-semibold text-lg">Business Analysis </h2>
            </div>
            <p className="pb-12">
              Business analysis is a crucial discipline that serves as
              <br /> <span>the foundation for informed decision-making.</span>
            </p>
           {loadBar && (
             <div className="w-[400px] bg-gray-200 rounded-full h-[1px] dark:bg-gray-700 relative">
             <div
               className="bg-[#061430] h-[1px] rounded-full "
               style={{ width: `${100}%` }}
             ></div>
           </div>
           )}
          </div>

          <div className="flex flex-wrap text-lg pb-14 ">
            <i class="fa-solid fa-chart-line text-3xl pr-4 "></i>
            <div>
              <h2 className="font-semibold text-lg">Report Analysis </h2>
            </div>
            <p className="pb-12">
              Reports come in a wide range of types, each serving process a
              specific purpose within an organization.
            </p>
            <div className="w-[400px] bg-gray-200 rounded-full h-[1px] dark:bg-gray-700 ">
              <div
                className="bg-[#061430] h-[1px] rounded-full"
                style={{ width: `${100}%` }}
              ></div>
            </div>
          </div>
          <div className="flex flex-wrap text-lg pb-14">
            <i class="fa-solid fa-chart-line text-3xl pr-4 "></i>
            <div>
              <h2 className="font-semibold text-lg">Cloud Computing </h2>
            </div>
            <p className="pb-12">
              Cloud computing is a revolutionary technology that
              <br />{" "}
              <span>has transformed the businesses and individuals.</span>
            </p>
            <div className="w-[400px] bg-gray-200 rounded-full h-[1px] dark:bg-gray-700 ">
              <div
                className="bg-[#061430] h-[1px] rounded-full"
                style={{ width: `${100}%` }}
              ></div>
            </div>
          </div>

          <div className="flex flex-wrap text-lg pb-28">
            <i class="fa-solid fa-chart-line text-3xl pr-4 "></i>
            <div>
              <h2 className="font-semibold text-lg">Project Reporting </h2>
            </div>
            <p className="pb-12">
              Project reporting serves as a compass that guides
              <br /> <span>project stakeholders through the complexities.</span>
            </p>
            <div className="w-[400px] bg-gray-200 rounded-full h-[1px] dark:bg-gray-700 ">
              <div
                className="bg-[#061430] h-[1px] rounded-full"
                style={{ width: `${100}%` }}
              ></div>
            </div>
          </div>

          <div className="flex flex-wrap  text-lg pb-28">
            <i class="fa-solid fa-chart-line text-3xl pr-4 "></i>
            <div>
              <h2 className="font-semibold text-lg">Security Enhanced </h2>
            </div>
            <p className="pb-12">
              Security Enhanced refers to the process of bolstering
              <br />{" "}
              <span>the safety and protection of a system, environment.</span>
            </p>
            <div className="w-[400px] bg-gray-200 rounded-full h-[1px] dark:bg-gray-700 ">
              <div
                className="bg-[#061430] h-[1px] rounded-full"
                style={{ width: `${100}%` }}
              ></div>
            </div>
          </div>

          <div className="flex flex-wrap text-lg pb-28">
            <i class="fa-solid fa-chart-line text-3xl pr-4 "></i>
            <div>
              <h2 className="font-semibold text-lg">SEO Optimised </h2>
            </div>
            <p className="pb-12">
              SEO Optimize signifies meticulous process of tailoring digital
              content and websites or online platforms.
            </p>
            <div className="w-[400px] bg-gray-200 rounded-full h-[1px] dark:bg-gray-700 ">
              <div
                className="bg-[#061430] h-[1px] rounded-full"
                style={{ width: `${100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
