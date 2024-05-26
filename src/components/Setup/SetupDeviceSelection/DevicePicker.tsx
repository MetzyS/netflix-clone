import { DeviceOption } from "../../../types/data";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { BsModem } from "react-icons/bs";
import {
  IoTvOutline,
  IoPhonePortraitOutline,
  IoLaptopOutline,
  IoGameControllerOutline,
} from "react-icons/io5";
import { MdOutlineSettingsRemote } from "react-icons/md";

import Device from "./Device";
import { ReactElement, useState } from "react";

const DevicePicker = (props: {
  addDevice: (value: string) => void;
  removeDevice: (value: string) => void;
  devices: DeviceOption[];
  otherDevices: { name: string; desc: string };
  buttonText: string;
  selectedDevices: string[];
  children?: ReactElement;
}) => {
  // Icons
  const icons: ReactElement[] = [
    <IoTvOutline className="size-16 m-auto" />,
    <IoPhonePortraitOutline className="size-16 m-auto" />,
    <IoLaptopOutline className="size-16 m-auto" />,
    <IoGameControllerOutline className="size-16 m-auto" />,
    <MdOutlineSettingsRemote className="size-16 m-auto" />,
    <BsModem className="size-16 m-auto" />,
  ];

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
    <div className="flex gap-2 flex-wrap mt-6 max-w-[500px] m-auto">
      {props.devices.map((item, index) => (
        <Device
          name={item.name}
          desc={item.desc}
          key={`device-${index}`}
          checkedIcon={
            <IoIosCheckmarkCircle className="size-6 text-red-600 bg-white" />
          }
          selectedDevices={props.selectedDevices}
          addDevice={props.addDevice}
          removeDevice={props.removeDevice}
          icon={icons[index]}
        />
      ))}
      <div
        className={`flex flex-col border text-center rounded-md cursor-pointer  p-2 select-none relative w-full ${
          isSelected ? "border-red-600" : ""
        }`}
      >
        {isSelected && (
          <span
            className={`absolute -top-2 -right-2 transition-opacity ${opacity} `}
          >
            <IoIosCheckmarkCircle className="size-6 text-red-600 bg-white" />
          </span>
        )}
        <p
          className={`font-semibold mb-1 ${
            isSelected ? "text-black" : "text-stone-600"
          }`}
        >
          {props.otherDevices.name}
        </p>
        <p className="text-xs text-neutral-400">{props.otherDevices.desc}</p>
        <input
          type="checkbox"
          name={props.otherDevices.name}
          id="device-other"
          className="absolute top-0 bottom-0 right-0 left-0 appearance-none cursor-pointer"
          onChange={() => handleSelected(props.otherDevices.name)}
        />
      </div>
      {props.children}
    </div>
  );
};

export default DevicePicker;
