import { useState } from "react";
import { PasswordRecoveryType } from "../../../types/data";
import DefaultButton from "../../ui/DefaultButton";
import DefaultContainer from "../../ui/DefaultContainer";
import InputNumber from "./InputNumber";
import { useDataContext } from "../../../layouts/RootLayout";

const PasswordRecovery = (props: {
  content: PasswordRecoveryType;
  email: string;
  userNumber: string;
  handleSavePasswordRecovery: (phoneNumber: string) => void;
}) => {
  const { handleCreateUser } = useDataContext();
  const [userNumber, setUserNumber] = useState<string>(props.userNumber);

  const handleUserNumber = (phoneNumber: string) => {
    const number = phoneNumber.replace(/\D/, "");
    setUserNumber(number);
    handleCreateUser([{ key: "number", value: number }]);
  };

  return (
    <DefaultContainer className="max-w-[500px] m-auto">
      <h1 className="signup-title sm:text-4xl">{props.content.title}</h1>
      <div className="xs:text-lg">
        <p className="mt-8">
          {props.content.desc[0]} {props.email}.
        </p>
        <p className="mt-4">{props.content.desc[1]}</p>
      </div>
      <div className="mt-8 p-4 sm:px-8 sm:py-6 rounded-lg bg-stone-200 text-center">
        <h2 className="text-stone-500 font-semibold xs:text-lg">
          {props.content.form.title}
        </h2>
        <div className="xs:text-lg mt-2 mb-6 flex flex-col gap-2">
          <p>{props.content.form.desc[0]}</p>
          <p>{props.content.form.desc[1]}</p>
        </div>
        <InputNumber
          content={props.content.form.input}
          userNumber={userNumber}
          errorMessage={props.content.form.inputError}
          onChange={handleUserNumber}
        />
      </div>
      <DefaultButton
        className="mt-6 w-full p-4 rounded-sm"
        text={props.content.form.button}
        onClick={() => props.handleSavePasswordRecovery(userNumber)}
        primary={true}
      />
    </DefaultContainer>
  );
};

export default PasswordRecovery;
