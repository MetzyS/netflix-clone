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
        <form action="" className="flex flex-col mt-6 gap-3">
          <Input
            type="email"
            label={props.inputData.email}
            error={props.inputData.error}
            value={props.userEmail}
            white={true}
            autocomplete="off"
          />
          <Input
            type="password"
            label={props.inputData.password}
            error={props.inputData.error}
            value=""
            white={true}
            autocomplete="off"
          />
          <label htmlFor="mailinglist">
            <input
              type="checkbox"
              name="mailinglist"
              id="mailinglist"
              className="mr-3 checkbox checkbox-white inline"
            />
            <span>{props.inputData.specialOfferEmailCheckbox}</span>
          </label>
        </form>
      </div>
    </>
  );
};
export default SignupForm;
