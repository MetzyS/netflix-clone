import { Signup } from "../../data/DataType";

const SignupForm = (props: { data: Signup; userEmail: string }) => {
  return (
    <>
      <div className="flex flex-col mt-12 text-left max-w-[440px] m-auto">
        <p className="text-neutral-800 uppercase text-xs">
          {props.data.stepWord[0]} <span className="font-semibold">1</span>{" "}
          {props.data.stepWord[1]}{" "}
          <span className="font-semibold">{props.data.maxStep}</span>
        </p>
        <h1 className="signup-title mt-1 leading-10 font-bold">
          {props.data.secondStepTitle}
        </h1>
        <p className="text-lg leading-tight">{props.data.secondStepDesc}</p>
      </div>
    </>
  );
};
export default SignupForm;
