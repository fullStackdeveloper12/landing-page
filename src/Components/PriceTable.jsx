import React from "react";

const PriceTable = () => {
  return (
    <div className="p-4 bg-gray-200 h-[400px]">
      <div className="p-8 bg-white-100 min-h-screen bg-white">
        <h1 className="text-3xl font-bold mb-8 text-green-800">Price</h1>
        <div className="flex justify-between items-start">
          <table className="table-auto bg-white rounded shadow-md w-2/3">
            <thead>
              <tr>
                <th className="px-4 py-2 border">Item</th>
                <th className="px-4 py-2 border">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border">Item 1</td>
                <td className="px-4 py-2 border">$10</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">Item 2</td>
                <td className="px-4 py-2 border">$20</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">Item 2</td>
                <td className="px-4 py-2 border">$20</td>
              </tr>
            </tbody>
          </table>
          <div className="flex flex-col items-center w-1/3 ml-8">
            <img
              src="costing.webp"
              alt="Product"
              className="w-full  [h-200px] object-cover rounded mb-4"
            />
            <button className=" text-white w-full px-4 py-2 rounded bg-green-900">
              Complete Costing Detail
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceTable;
