import { FormEvent, useEffect, useState } from "react";
import { Form as FormType, Signup } from "../../types/data";
import Input from "../Form/Input";
import { Form } from "react-router-dom";
import DefaultContainer from "../ui/DefaultContainer";

const SignupForm = (props: {
  data: Signup;
  userEmail: string;
  inputData: FormType;
  isRegistered: boolean;
  handleRegisterAccount: (value: boolean) => void;
  onSubmit: (newData: {
    email: string;
    password: string;
    authorization: boolean;
    plan: number;
  }) => void;
}) => {
  const [email, setEmail] = useState(props.userEmail);
  const [password, setPassword] = useState("");
  const [inputsAreValid, setInputsAreValid] = useState<{
    email: boolean;
    password: boolean;
  }>({
    email: props.userEmail ? true : false,
    password: false,
  });
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (inputsAreValid.email == true && inputsAreValid.password == true) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [inputsAreValid]);
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

  const handleValidInputs = (key: string, value: boolean) => {
    setInputsAreValid((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  return (
    <>
      <DefaultContainer className="flex flex-col mt-12 text-left max-w-[440px] m-auto">
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
            props.handleRegisterAccount(true);
            handleSubmit(e);
          }}
        >
          <Input
            type="email"
            label={props.inputData.email}
            error={props.inputData.error}
            value={email}
            white={true}
            autocomplete="off"
            onChange={handleChangeEmail}
            customFunc={handleValidInputs}
          />
          <Input
            type="password"
            label={props.inputData.password}
            error={props.inputData.error}
            value={password}
            white={true}
            autocomplete="off"
            onChange={handleChangePassword}
            customFunc={handleValidInputs}
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
            disabled={isDisabled}
          >
            {props.data.firstButton}
          </button>
        </Form>
      </DefaultContainer>
    </>
  );
};
export default SignupForm;
