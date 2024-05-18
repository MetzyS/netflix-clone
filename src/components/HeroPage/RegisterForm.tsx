import { MdArrowForwardIos } from "react-icons/md";
import DefaultButton from "../ui/DefaultButton";
import Input from "../Form/Input";
import { Form, FormMethod, useNavigate } from "react-router-dom";
import { Form as FormType } from "../../types/data";
import { useDataContext } from "../../layouts/RootLayout";
import { FormEvent } from "react";
import { UserType } from "../../types/user";

const RegisterForm = (props: {
  data: FormType;
  to: string;
  method?: FormMethod;
  userEmail?: string;
  onChange?: (value: string) => void;
  isCreatingAccount: boolean;
}) => {
  // Recup infos si utilisateur est en cours de création
  const { isCreatingAccount } = useDataContext();
  let parsedUser: UserType;
  let registerStep: number | undefined | null;
  if (isCreatingAccount) {
    let user: string | UserType | null = localStorage.getItem("user");
    if (user) {
      parsedUser = JSON.parse(user);
      if (parsedUser.registerStep) {
        registerStep = parsedUser.registerStep;
        console.log("register step: " + registerStep);
      }
    }
  }
  const navigate = useNavigate();
  const { isLoading, handleSubmitRegister } = useDataContext();
  const onSubmitFunc = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (props.userEmail) {
      const test = await handleSubmitRegister(props.userEmail);
      {
        test ? navigate("/login") : navigate("/signup");
      }
    }
  };

  return (
    <div className="mt-6 mx-auto px-8 max-w-[770px]">
      <Form
        action={props.to}
        method={props.method ? props.method : undefined}
        onSubmit={onSubmitFunc}
      >
        <h3 className="text-base leading-normal">{props.data.text}</h3>
        <div
          className={`flex flex-col sm:flex-row justify-center ${
            isCreatingAccount ? "" : "sm:justify-normal"
          }  mt-4 gap-4`}
        >
          {isCreatingAccount ? (
            ""
          ) : (
            <Input
              type="email"
              label={props.data.email}
              onChange={props.onChange ? props.onChange : undefined}
              error={props.data.error}
              value={props.userEmail}
              isLoading={isLoading}
            />
          )}

          {isCreatingAccount ? (
            <DefaultButton
              type="button"
              onClick={() => {
                navigate("/signup");
              }}
              text={props.data.finishSignup}
              primary={true}
              className="flex gap-3 text-xl items-center justify-between min-w-fit self-center md:text-2xl"
              icon={<MdArrowForwardIos className="size-5" />}
            />
          ) : (
            <DefaultButton
              type="submit"
              text={props.data.button}
              primary={true}
              className="flex gap-3 text-xl items-center justify-between min-w-fit self-center md:text-2xl"
              icon={<MdArrowForwardIos className="size-5" />}
            />
          )}
        </div>
      </Form>
    </div>
  );
};

export default RegisterForm;
