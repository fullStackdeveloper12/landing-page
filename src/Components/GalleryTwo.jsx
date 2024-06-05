import React from "react";

const GalleryTwo = () => {
  return (
    <div className="p-4">
      <div className="mt-2 bg-white">
        <div className="content flex flex-row justify-between p-6">
          <h2 className="font-bold text-green-800 text-2xl ">
            Gallery Of Godrej Ananda
          </h2>
          <button className="mr-2 bg-green-800 text-white px-4 rounded">Download Gallery</button>
        </div>
        <div className="img-div flex flex-row gap-8 p-6 ">
          <div>
            <img src="anandas_g1.webp" alt="" className="rounded-2xl"/>
          </div>
          <div>
            <img src="anandas_g2.webp" alt="" className="rounded-2xl"/>
          </div>
          <div>
            <img src="anandas_g3.webp" alt="" className="rounded-2xl"/>
          </div>
          <div>
            <img src="anandas_g4.webp" alt="" className="rounded-2xl"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryTwo;
