import { Select } from "antd";
import { FaArrowRightLong } from "react-icons/fa6";

const UnitDropDown = () => {
  const duration = [
    { value: "Kelvin", label: <span>Kelvin</span> },
    { value: "Celsius", label: <span>Celsius</span> },
    { value: "Fahrenheit", label: <span>Fahrenheit</span> },
    { value: "litres", label: <span>litres</span> },
    { value: "tablespoons", label: <span>tablespoons</span> },
    { value: "cups", label: <span>cups</span> },
    { value: "cubic-feet", label: <span>cubic-feet</span> },
    { value: "gallons", label: <span>gallons</span> },
  ];

  return (
    <div className="text-white flex items-center gap-3">
      <div className="w-full">
        <Select
          style={{ width: "100%" }}
          className="mt-2"
          defaultValue="Select Unit"
          options={duration}
        />
      </div>
      <div className="text-black">
        <FaArrowRightLong />
      </div>
      <div className="w-full flex justify-end">
        <Select
          style={{ width: "100%" }}
          className="mt-2"
          defaultValue="Select a target unit"
          options={duration}
        />
      </div>
    </div>
  );
};

export default UnitDropDown;
