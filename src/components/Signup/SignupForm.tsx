import { FormEvent, useState } from "react";
import { Form as FormType, Signup } from "../../types/data";
import Input from "../Form/Input";
import { Form } from "react-router-dom";

const SignupForm = (props: {
  data: Signup;
  userEmail: string;
  inputData: FormType;
  isCreated: boolean;
  handleCreateAccount: (value: boolean) => void;
  onSubmit: (newData: {
    email: string;
    password: string;
    authorization: boolean;
    plan: number;
  }) => void;
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (value: string) => {
    setEmail(value);
  };
  const handleChangePassword = (value: string) => {
    setPassword(value);
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.onSubmit({
      email: email,
      password: password,
      authorization: false,
      plan: 0,
    });
  };
  return (
    <>
      <div className="flex flex-col mt-12 text-left max-w-[440px] m-auto">
        <p className="text-neutral-800 uppercase text-xs">
          {props.data.stepWord[0]} <span className="font-semibold">1</span>{" "}
          {props.data.stepWord[1]}{" "}
          <span className="font-semibold">{props.data.maxStep}</span>
        </p>
        <h1 className="signup-title mt-1 leading-10 font-bold">
          {props.data.signupTitle}
        </h1>
        <p className="text-lg leading-tight">{props.data.signupDesc}</p>
        <Form
          action="/signup"
          method="post"
          className="flex flex-col mt-6 gap-3"
          onSubmit={(e) => {
            props.handleCreateAccount(true);
            handleSubmit(e);
          }}
        >
          <Input
            type="email"
            label={props.inputData.email}
            error={props.inputData.error}
            value={props.userEmail}
            white={true}
            autocomplete="off"
            onChange={handleChangeEmail}
          />
          <Input
            type="password"
            label={props.inputData.password}
            error={props.inputData.error}
            value=""
            white={true}
            autocomplete="off"
            onChange={handleChangePassword}
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
          <button
            type="submit"
            className="py-3 w-full text-white text-2xl rounded-md bg-[#e50914] hover:bg-[#f6121d] my-6"
          >
            {props.data.firstButton}
          </button>
        </Form>
      </div>
    </>
  );
};
export default SignupForm;
