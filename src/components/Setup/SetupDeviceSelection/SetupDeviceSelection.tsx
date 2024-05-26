import { useState } from "react";
import { DeviceSelectionType } from "../../../types/data";
import BackButton from "../../Signup/BackButton";
import DefaultContainer from "../../ui/DefaultContainer";
import DevicePicker from "./DevicePicker";
import { useDataContext } from "../../../layouts/RootLayout";
import DefaultButton from "../../ui/DefaultButton";

const SetupDeviceSelection = (props: {
  backButtonFunc: () => void;
  content: DeviceSelectionType;
  submitFunc: () => void;
}) => {
  const { handleCreateUser } = useDataContext();
  const [selectedDevices, setSelectedDevices] = useState<string[]>([]);

  const addDevice = (device: string) => {
    setSelectedDevices((prevState) => [...prevState, device]);
  };

  const removeDevice = (device: string) => {
    setSelectedDevices(
      selectedDevices.filter((item) => {
        return item !== device;
      })
    );
  };

  const handleSaveDevices = () => {
    handleCreateUser([{ key: "preferedDevices", value: selectedDevices }]);
    handleCreateUser([{ key: "setupStep", value: 3 }]), props.submitFunc();
  };
  return (
    <DefaultContainer>
      <div className="block lg:flex max-w-[1000px] m-auto">
        <div className="lg:w-1/3">
          <BackButton onClick={props.backButtonFunc} />
          <p className="flex gap-1 uppercase mt-4 text-sm text-neutral-800">
            {props.content.stepWord}
            <span className="font-semibold">{props.content.step}</span>
            {props.content.ofWord}
            <span className="font-semibold">{props.content.maxStep}</span>
          </p>
          <h1 className="signup-title font-bold lg:text-4xl">
            {props.content.title}
          </h1>
          <p className="xs:text-lg">
            {props.content.desc[0]}{" "}
            <span className="font-semibold">{props.content.desc[1]}</span>
          </p>
        </div>
        <DevicePicker
          devices={props.content.deviceOptions}
          otherDevices={props.content.otherDevice}
          buttonText={props.content.button}
          addDevice={addDevice}
          removeDevice={removeDevice}
          selectedDevices={selectedDevices}
        >
          <DefaultButton
            text={props.content.button}
            primary={true}
            className="w-full m-8 p-4 rounded-sm"
            onClick={handleSaveDevices}
          />
        </DevicePicker>
      </div>
    </DefaultContainer>
  );
};

export default SetupDeviceSelection;
