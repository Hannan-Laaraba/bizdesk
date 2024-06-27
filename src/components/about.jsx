import React from "react";

export default function About() {
  return (
    <>
      <section className="bg-gray-200 h-[650px] text-[#061430]">
        <div >
          <h1 className="text-[40px] font-bold  pt-40 pl-16">
            Trusted Consulting Company With <br />
            <span>28+ Years Experience.</span>
          </h1>
        </div>
        <div className="flex items-center pl-8 pt-14 text-lg">
          <i class="fa-solid fa-sack-dollar text-4xl pr-4 pb-6"></i>
          <div>
            <h2 className="font-semibold">
              Investor and Customer Loyalty and Confidence
            </h2>
            <p>
              In the competitive landscape of today's business world,
              cultivating and  <br />
              <span>maintaining investor and customer loyalty is essential for sustainable</span>
            </p>
          </div>
        </div>
        <br/>
        <div className="flex items-center pl-8 text-lg">
          <i class="fa-solid fa-chart-line text-4xl pr-4 pb-6"></i>
          <div>
          <h2 className="font-semibold">Generate high performance, revenue and profit </h2>
          <p>
            Achieving high performance, substantial revenue growth, and
            increased <br />{" "}
            <span>
              profitability are common goals for businesses across industries.
            </span>{" "}
          </p>
          </div>
        </div>
      </section>

      <section className="py-8 pl-8 pr-52">
        <div className="grid grid-cols-2 ">
          <div className="">
            <div className="text-[#061430]">
              <h1 className="text-5xl font-bold">90%</h1>
              <p className="text-xl font-semibold py-4">Business Setup Growth</p>
            </div>
            <div className="w-2/4 bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
              <div className="bg-[#061430] h-1.5 rounded-full" style={{ width: `${90}%` }}></div>
            </div>
          </div>
          <div className="">
            <div className="text-[#061430]">
              <h1 className="text-5xl font-bold">80%</h1>
              <p className="text-xl font-semibold py-4">Business Problem Solving</p>
            </div>
            <div className="w-2/4 bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
              <div className="bg-[#061430] h-1.5 rounded-full" style={{ width: `${80}%` }}></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
