import React from "react";
import UnitDropDown from "./UnitDropDown";

const Convertor = () => {
  return (
    <div className="flex justify-center mt-12">
      <div>
        <div className="text-lg font-medium">
          <h1>Unit Convertor</h1>
        </div>
        <div className="mt-6">
          <div className="lg:flex items-center gap-4">
            <div>
              <input
                type="number"
                id="quantity"
                name="quantity"
                className="border border-gray-300 h-10 p-3 rounded-lg"
                placeholder="Enter input value"
              />
            </div>
            <div className="pt-3 lg:pt-0">
              <input
                type="number"
                id="quantity"
                name="quantity"
                className="border border-gray-300 h-10 p-3 rounded-lg"
                placeholder="Enter student value"
              />
            </div>
          </div>
          <div className="pt-1 lg:pt-0">
            <UnitDropDown />
          </div>
        </div>
        <div>
          <button
            type="button"
            className="mt-3 bg-blue-500 text-white px-8 py-2 rounded-md hover:bg-blue-600"
          >
            Convert
          </button>
        </div>
        <div className="w-full mt-3 border border-gray-300 h-32 bg-blue-200 rounded-lg relative">
          <div
            className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
            disabled
          >
            Correct
          </div>
        </div>
      </div>
    </div>
  );
};

export default Convertor;
