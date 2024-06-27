import React from "react";
import TopNav from "../components/topnav";
import Hero from "../components/hero";
import About from "../components/about";
import Navbar from "../components/navbar";
import Services from "../components/services";
import Overlap from "../components/overlap";
import Footer from "../components/footer";
import Vid from "../components/vid";
import WhyUs from "../components/whyus";




export default function HomePage(){
    
    return(
        <>
        <TopNav/>
        <Navbar/>
        <Hero/>
        <About/>
        <Overlap/>
        <Services/>
        <Vid/>
        <WhyUs/>
        <Footer/>
        </>
    )
}