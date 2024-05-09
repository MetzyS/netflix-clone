import { Form as FormType, Signup } from "../../data/DataType";
import Input from "./Input";

const SignupForm = (props: {
  data: Signup;
  userEmail: string;
  inputData: FormType;
}) => {
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
        <form action="" className="mt-6">
          <Input
            label={props.inputData.email}
            type="email"
            value={props.userEmail}
            white={true}
            autocomplete="off"
          />
        </form>
      </div>
    </>
  );
};
export default SignupForm;
