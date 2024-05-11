import { Signup } from "../../types/data";

const SignupBack = (props: {
  data: Signup;
  userData: { email: string; password: string };
  handleFormStep: (value: number) => void;
}) => {
  return (
    <div className="flex flex-col mt-12 text-left max-w-[440px] m-auto">
      <p className="text-neutral-800 uppercase text-xs">
        {props.data.stepWord[0]} <span className="font-semibold">1</span>{" "}
        {props.data.stepWord[1]}{" "}
        <span className="font-semibold">{props.data.maxStep}</span>
      </p>
      <h1 className="signup-title mt-1 leading-10 font-bold">
        {props.data.secondStepBackTitle}
      </h1>
      <p className="text-lg leading-tight">{props.data.secondStepBackDesc}</p>
      <p className="text-xl font-semibold text-center mt-8 mb-4">
        {props.userData.email}
      </p>
      <button
        type="button"
        className="py-3 w-full text-white text-2xl rounded-md bg-[#e50914] hover:bg-[#f6121d] my-6"
        onClick={() => props.handleFormStep(3)}
      >
        {props.data.firstButton}
      </button>
    </div>
  );
};

export default SignupBack;
