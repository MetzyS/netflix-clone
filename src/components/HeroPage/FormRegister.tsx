import { MdArrowForwardIos } from "react-icons/md";
import { useDataContext } from "../../layouts/RootLayout";
import DefaultButton from "../ui/DefaultButton";
import { Form, useNavigate } from "react-router-dom";
import Input from "../Form/Input";
import { FormEvent, useState } from "react";
import { Form as FormType } from "../../types/data";

const FormRegister = (props: {
  content: FormType;
  to: string;
  method: "get" | "post" | "put" | "delete" | "patch";
  bottom?: boolean;
  isConfigured: boolean;
  isRegistered: boolean;
}) => {
  const { user, isLoading, userEmail, handleSubmitRegister, handleUserEmail } =
    useDataContext();
  const navigate = useNavigate();
  const [email, setEmail] = useState(user ? user.email : "");
  const [isValid, setIsValid] = useState(false);
  const onSubmitFunc = async (e: FormEvent<HTMLFormElement>, email: string) => {
    e.preventDefault();
    handleUserEmail(email);
    const load = await handleSubmitRegister(userEmail);
    load ? navigate("/login") : navigate("/signup");
  };

  const handleChangeInputEmail = (email: string) => {
    setEmail(email);
  };

  return (
    <>
      <div className="mt-6 mx-auto px-8 max-w-[770px]">
        <Form
          action={props.to}
          method={props.method}
          onSubmit={(e) => onSubmitFunc(e, email)}
          className="md:mb-8 max-w-[600px] m-auto"
        >
          <h3
            className={`text-lg lg:text-xl leading-normal text-center ${
              !props.bottom ? props.isRegistered && "hidden" : ""
            }`}
          >
            {props.content.text}
          </h3>

          <div
            className={`flex flex-col sm:flex-row justify-center ${
              props.isRegistered ? "" : "sm:justify-normal"
            } mt-4 gap-4`}
          >
            {props.isRegistered ? (
              <></>
            ) : (
              <Input
                type="email"
                label={props.content.email}
                onChange={handleChangeInputEmail}
                error={props.content.error}
                value={email}
                isLoading={isLoading}
                errorPositionAbsolute={true}
                setIsValid={setIsValid}
              />
            )}

            {props.isRegistered ? (
              <DefaultButton
                type="button"
                onClick={() => {
                  navigate("/signup");
                }}
                text={props.content.finishSignup}
                primary={true}
                className="flex gap-3 text-xl items-center justify-between min-w-fit pl-6 self-center md:text-2xl"
                icon={<MdArrowForwardIos className="size-5" />}
              />
            ) : (
              <DefaultButton
                disabled={!isValid}
                type="submit"
                text={props.content.button}
                primary={true}
                className="flex gap-3 text-xl items-center justify-between min-w-fit self-center md:text-2xl disabled:cursor-default disabled:hover:bg-[#e50914]"
                icon={<MdArrowForwardIos className="size-5" />}
              />
            )}
          </div>
        </Form>
      </div>
    </>
  );
};

export default FormRegister;
