"use client";
import React from "react";
import PriceTable from "./PriceTable";
import ImageGallery from "./ImageGallery";
import FloorPlan from "./FloorPlan";
import GalleryTwo from "./GalleryTwo";
import Location from "./Location";
import VirtualTour from "./VirtualTour";
import About from "./About";
import Footer from "./Footer";
import MainContent from "./MainContent";
import Slider from "./Slider";
// import SideBar from "./SideBar";
import Nav from "./Nav";

const Navbar = () => {
  return (
    <div className="flex h-screen">
      <div className="w-4/5 flex flex-col bg-gray-200">
        <Nav />
        <Slider />
        <MainContent />
        <PriceTable />
        <FloorPlan />
        <div className="bg-gray-200 p-4">
          <div className="bg-white p-4">
            <div className="flex flex-row justify-between mb-4">
              <h2 className="font-bold text-green-800 text-2xl">
                Amenities Of Godrej Ananda
              </h2>
              <button className="bg-green-800 text-white px-6 py-2 rounded">
                Download Amenities
              </button>
            </div>
            <ImageGallery />
          </div>
        </div>
        <GalleryTwo />
        <Location />
        <VirtualTour />
        <About />
        <Footer />
      </div>
      {/* <SideBar /> */}
    </div>
  );
};

export default Navbar;
