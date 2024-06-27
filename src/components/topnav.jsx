import React from "react";

export default function TopNav(){
    return(
     <>
     <nav className="bg-[#1A237E] p-4 flex justify-between ">
        <ul className="flex ml-2">
        <li> <i class="fa-solid fa-location-dot text-white pr-2"></i>
        <span className="text-white pr-6">Mon-Sat:9.00am To 7.00pm</span></li>
        <div className="h-3/4 border-l border-gray-600 pr-4 mt-1"></div>

        <li><i class="fa-regular fa-envelope text-white pr-2"></i>
        <span className="text-white pr-6">bizdesk@domain.com</span>
        </li>
        <div className="h-3/4 border-l border-gray-600 pr-4 mt-1"></div>

        <li><i class="fa-solid fa-phone text-white pr-2"></i>
        <span className="text-white pr-6">+00 9800 7804</span>
        </li>
        
        </ul>
        <ul className="flex text-white pr-4">
            <h4 className="pr-2">Follow on:</h4>
            <li><i class="fa-brands fa-facebook-f pr-4"></i></li>
            <li><i class="fa-brands fa-twitter pr-4"></i></li>
            <li><i class="fa-brands fa-linkedin-in pr-4"></i></li>
            <li><i class="fa-brands fa-pinterest-p pr-4"></i></li>
        </ul>

     </nav>
     </>
    )
}