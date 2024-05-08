import HeroDataType from "../../data/HeroDataType";
import SingupDevices from "../../assets/signupDevices.png";

const FirstStepForm = (props: { data: HeroDataType; onClick: () => void }) => {
  return (
    <>
      <img
        src={SingupDevices}
        alt=""
        className="mt-[100px] mb-10 mx-auto max-w-[250px]"
      />
      <p className="mt-4 text-sm step mb-4 text-neutral-800">
        ÉTAPE <span className="font-semibold">1</span> SUR{" "}
        <span className="font-semibold">{props.data.signup.maxStep}</span>
      </p>
      <div className="flex flex-col items-center">
        <h1 className="font-semibold text-3xl mb-4 text-neutral-800">
          {props.data.signup.firstStepTitle}
        </h1>
        <p className="text-lg max-w-[300px] text-neutral-800">
          {props.data.signup.firstStepDesc}
        </p>
      </div>
      <button
        type="button"
        className="py-3 w-full text-white text-2xl rounded-md bg-[#e50914] hover:bg-[#f6121d] my-6"
        onClick={props.onClick}
      >
        {props.data.signup.firstButton}
      </button>
    </>
  );
};

export default FirstStepForm;
