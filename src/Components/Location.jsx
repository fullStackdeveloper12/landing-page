import React from "react";
import { IoLocation } from "react-icons/io5";

const Location = () => {
  return (
    <div className="p-4">
      <div className="bg-white p-8">
        <h2 className="text-green-800 text-2xl">Address Of Godrej Ananda</h2>
        <div className=" mt-4">
          <h3 className="font-bold text-xl">Map View</h3>
          <div className="flex flex-row justify-evenly mt-4">
            <div className="w-[50%]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224567.7202309566!2d76.82493609391429!3d28.423160293047264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1717562310133!5m2!1sen!2sin"
                className="w-full h-full"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="w-[40%]">
              <h3 className="font-bold text-xl">Location Map</h3>
              <div className="border">
                <img src="anandas_locationmap_01.webp" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row mt-8 justify-evenly">
          <div>
            <div className="flex flex-row  items-center mt-4">
              <IoLocation className="text-green-800 text-2xl" />
              <span>Bangalore International Airport - 15 mins</span>
            </div>
            <div className="flex flex-row  items-center mt-4">
              <IoLocation className="text-green-800 text-2xl" />
              <span> Delhi Public School - 12 mins</span>
            </div>
          </div>
          <div>
            <div className="flex flex-row  items-center mt-4">
              <IoLocation className="text-green-800 text-2xl" />
              <span>Cratis Hospital - 21 mins</span>
            </div>
            <div className="flex flex-row  items-center mt-4">
              <IoLocation className="text-green-800 text-2xl" />
              <span>Manyata Tech Park - 26 mins</span>
            </div>
          </div>
          <div>
            <div className="flex flex-row  items-center mt-4">
              <IoLocation className="text-green-800 text-2xl" />
              <span> Oxford Group of Institutions - 15 mins</span>
            </div>
            <div className="flex flex-row  items-center mt-4">
              <IoLocation className="text-green-800 text-2xl" />
              <span> RMZ Galleria Mall - 26 mins</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
