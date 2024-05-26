import { DeviceOption } from "../../../types/data";
import { IoIosCheckmarkCircle } from "react-icons/io";
import {
  IoTvOutline,
  IoPhonePortraitOutline,
  IoLaptopOutline,
  IoGameControllerOutline,
} from "react-icons/io5";
import { MdOutlineSettingsRemote } from "react-icons/md";

import Device from "./Device";
import { useEffect, useState } from "react";

const DevicePicker = (props: { devices: DeviceOption[] }) => {
  const [selectedDevices, setSelectedDevices] = useState<string[]>([]);

  const addDevice = (device: string) => {
    setSelectedDevices((prevState) => [...prevState, device]);
  };

  const removeDevice = (device: string) => {
    // const indexItemToRemove = selectedDevices.indexOf(device);
    setSelectedDevices(
      selectedDevices.filter((item) => {
        return item !== device;
      })
    );
  };

  useEffect(() => {
    console.log(selectedDevices);
  }, [selectedDevices]);

  // const icons = [];
  return (
    <div className="flex gap-2 flex-wrap mt-6">
      {props.devices.map((item, index) => (
        <Device
          name={item.name}
          desc={item.desc}
          key={`device-${index}`}
          checkedIcon={
            <IoIosCheckmarkCircle className="size-6 text-red-600 bg-white" />
          }
          selectedDevices={selectedDevices}
          addDevice={addDevice}
          removeDevice={removeDevice}
        />
      ))}
    </div>
  );
};

export default DevicePicker;
