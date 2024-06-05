import React from "react";

const FloorPlan = () => {
  return (
    <div className="bg-gray-200 p-4">
      <div className="floor mt-2 bg-white p-8">
        <h2 className="text-3xl font-bold text-green-800">
          Site & Floor Plan Of Godrej Ananda
        </h2>
        <h3 className="font-bold text-xl mt-4">Master Plan</h3>
        <div>
          <img
            src="anandas_masterplan.webp"
            alt=""
            className="border w-[35%] h-[35%] mx-auto"
          />
        </div>
        <h3 className="font-bold text-xl mt-4">Floor Plan</h3>
        <div>
          <img src="2bhk_1092_1.webp" alt="" className="border w-[35%]" />
          <button className="flex flex-row justify-center p-2 text-white bg-green-800 w-[35%] font-bold text-xl">
            2 BHK-1092 Sq.ft
          </button>
        </div>
      </div>
    </div>
  );
};

export default FloorPlan;
