import { ReactElement, useState } from "react";

const Device = (props: {
  name: string;
  desc: string;
  checkedIcon: ReactElement;
  selectedDevices: string[];
  addDevice: (device: string) => void;
  removeDevice: (device: string) => void;
  icon: ReactElement;
}) => {
  const [isSelected, setIsSelected] = useState(false);
  const [opacity, setOpacity] = useState("opacity-0");
  const handleSelected = (device: string) => {
    if (isSelected == false) {
      setOpacity("opacity-0");
      props.addDevice(device);
    } else {
      props.removeDevice(device);
    }
    setIsSelected(!isSelected);
    setTimeout(() => {
      setOpacity("opacity-100");
    });
  };
  return (
    <div
      className={`flex flex-col border text-center rounded-md cursor-pointer flex-[1_1_30%] max-w-[180px] p-2 select-none relative ${
        isSelected ? "border-red-600" : ""
      }`}
    >
      {isSelected && (
        <span
          className={`absolute -top-2 -right-2 transition-opacity ${opacity} `}
        >
          {props.checkedIcon}
        </span>
      )}
      <div
        className={`my-8 mx-0 ${
          isSelected ? "text-red-600" : "text-stone-300"
        }`}
      >
        {props.icon}
      </div>
      <p
        className={`font-semibold mb-1 ${
          isSelected ? "text-black" : "text-stone-600"
        }`}
      >
        {props.name}
      </p>
      <p className="text-xs text-neutral-400">{props.desc}</p>
      <input
        type="checkbox"
        name={props.name}
        id={`device-${props.name}`}
        className="absolute top-0 bottom-0 right-0 left-0 appearance-none cursor-pointer"
        onChange={() => handleSelected(props.name)}
      />
    </div>
  );
};

export default Device;
