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

const DevicePicker = (props: { devices: DeviceOption[] }) => {
  const icons = [];
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
        />
      ))}
    </div>
  );
};

export default DevicePicker;
