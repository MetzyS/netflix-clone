import { MdArrowForwardIos } from "react-icons/md";
import { useDataContext } from "../../layouts/RootLayout";
import DefaultButton from "../ui/DefaultButton";
import { Form, useNavigate } from "react-router-dom";
import Input from "../Form/Input";
import { FormEvent, useState } from "react";

const FormRegister = (props: {
  to: string;
  method: "get" | "post" | "put" | "delete" | "patch";
}) => {
  const {
    user,
    data,
    isLoading,
    userEmail,
    isCreatingAccount,
    handleSubmitRegister,
    handleUserEmail,
  } = useDataContext();
  const navigate = useNavigate();
  const [email, setEmail] = useState(user ? user.email : "");
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
          <h3 className="text-lg lg:text-xl leading-normal text-center">
            {data.form.text}
          </h3>
          <div
            className={`flex flex-col sm:flex-row justify-center ${
              isCreatingAccount ? "" : "sm:justify-normal"
            } mt-4 gap-4`}
          >
            {isCreatingAccount ? (
              ""
            ) : (
              <Input
                type="email"
                label={data.form.email}
                onChange={handleChangeInputEmail}
                error={data.form.error}
                value={userEmail}
                isLoading={isLoading}
                errorPositionAbsolute={true}
              />
            )}

            {isCreatingAccount ? (
              <DefaultButton
                type="button"
                onClick={() => {
                  navigate("/signup");
                }}
                text={data.form.finishSignup}
                primary={true}
                className="flex gap-3 text-xl items-center justify-between min-w-fit self-center md:text-2xl"
                icon={<MdArrowForwardIos className="size-5" />}
              />
            ) : (
              <DefaultButton
                type="submit"
                text={data.form.button}
                primary={true}
                className="flex gap-3 text-xl items-center justify-between min-w-fit self-center md:text-2xl"
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
