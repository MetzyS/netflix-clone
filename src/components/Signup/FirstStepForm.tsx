import { Signup } from "../../types/data";
import SingupDevices from "../../assets/signupDevices.png";

const FirstStepForm = (props: { data: Signup; onClick: () => void }) => {
  return (
    <div className="max-w-[340px] m-auto sm:text-center">
      <img
        src={SingupDevices}
        alt=""
        className="mt-[100px] mb-10 mx-auto max-w-[250px]"
      />
      <p className="mt-4 text-xs step mb-4 text-neutral-800 uppercase">
        {props.data.stepWord[0]} <span className="font-semibold">1</span>{" "}
        {props.data.stepWord[1]}{" "}
        <span className="font-semibold">{props.data.maxStep}</span>
      </p>
      <div className="flex flex-col">
        <h1 className="signup-title">{props.data.firstStepTitle}</h1>
        <p className="text-lg text-neutral-800 sm:text-center">
          {props.data.firstStepDesc}
        </p>
      </div>
      <button
        type="button"
        className="py-3 w-full text-white text-2xl rounded-md bg-[#e50914] hover:bg-[#f6121d] my-6"
        onClick={props.onClick}
      >
        {props.data.firstButton}
      </button>
    </div>
  );
};

export default FirstStepForm;
