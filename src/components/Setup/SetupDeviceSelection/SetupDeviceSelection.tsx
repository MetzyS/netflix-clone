import { DeviceSelectionType } from "../../../types/data";
import BackButton from "../../Signup/BackButton";
import DefaultContainer from "../../ui/DefaultContainer";
import DevicePicker from "./DevicePicker";

const SetupDeviceSelection = (props: {
  backButtonFunc: () => void;
  content: DeviceSelectionType;
}) => {
  return (
    <DefaultContainer>
      <div>
        <BackButton onClick={props.backButtonFunc} />
        <div>
          <p className="flex gap-1 uppercase mt-4 text-sm text-neutral-800">
            {props.content.stepWord}
            <span className="font-semibold">{props.content.step}</span>
            {props.content.ofWord}
            <span className="font-semibold">{props.content.maxStep}</span>
          </p>
          <h1 className="signup-title">{props.content.title}</h1>
          <p className="xs:text-lg">
            {props.content.desc[0]}{" "}
            <span className="font-semibold">{props.content.desc[1]}</span>
          </p>
        </div>
        <DevicePicker devices={props.content.deviceOptions} />
      </div>
    </DefaultContainer>
  );
};

export default SetupDeviceSelection;
