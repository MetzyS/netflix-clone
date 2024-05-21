import { Form } from "react-router-dom";
import { CreditCardOption } from "../../../../types/data";
import { ChangeEvent, ReactElement, useState } from "react";
import ExpDateAndCVV from "./ExpDateAndCVV";
import InputCreditCard from "./InputCreditCard";
import { Inputs, InputsBooleanValues } from "../../../../types/inputs";
import { useDataContext } from "../../../../layouts/RootLayout";

const FormCard = (props: { content: CreditCardOption }): ReactElement => {
  const { user, handleCreateUser } = useDataContext();
  let inputColor = "input-white";
  let inputRing = "ring-white";
  const [CreditCardNumber, setCreditCardNumber] = useState<string>("");
  const [CreditCardDetails, setCreditCardDetails] = useState<Inputs>({
    expdate: "",
    cvv: "",
  });
  const [confirmation, setConfirmation] = useState<boolean | undefined>(
    undefined
  );
  const [errorStyle, setErrorStyle] = useState<string>("");
  const handleChangeCreditCardNumber = (
    e: ChangeEvent<HTMLInputElement>,
    value: string
  ) => {
    setCreditCardNumber(value);
  };

  const handleChangeCreditCardDetails = (
    e: ChangeEvent<HTMLInputElement>,
    key: keyof Inputs
  ) => {
    setCreditCardDetails((prevState) => ({
      ...prevState,
      [key]: e.target.value,
    }));
  };

  const handleChangePlan = () => {
    handleCreateUser([{ key: "registerStep", value: 3 }]);
  };

  const handleConfirmation = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmation(e.target.checked);
    e.target.checked ? setErrorStyle("") : setErrorStyle("checkbox-error");
    console.log(e.target.checked);
  };

  return (
    <Form>
      <div className="max-w-[500px] m-auto">
        <InputCreditCard
          content={props.content}
          value={CreditCardNumber}
          onChange={handleChangeCreditCardNumber}
          inputColor={inputColor}
          inputRing={inputRing}
        />
        <ExpDateAndCVV
          content={props.content}
          value={CreditCardDetails}
          onChange={handleChangeCreditCardDetails}
          inputColor={inputColor}
          inputRing={inputRing}
        />
        <label htmlFor="registerCc" className="flex">
          <div>
            <input
              type="checkbox"
              name="registerCc"
              id="registerCc"
              className="mr-3 checkbox checkbox-white"
            />
          </div>
          <span className="flex select-none">
            {props.content.allowCardCheckbox}
          </span>
        </label>
        <div className="bg-neutral-100 flex items-center justify-between p-4 rounded-lg mt-3">
          <div className="flex flex-col">
            <span className="font-semibold">19,99€/mois</span>
            <span className="text-neutral-500">Premium</span>
          </div>
          <div>
            <button
              type="button"
              className="text-blue-600 font-semibold hover:underline"
              onClick={handleChangePlan}
            >
              Changer
            </button>
          </div>
        </div>
        <div className="w-11/12 m-auto flex flex-col gap-4 mt-4">
          {!confirmation && confirmation != undefined && (
            <p className="text-red-800">
              {props.content.errorMessageConfirmation}
            </p>
          )}
          <label
            htmlFor="confirmation"
            className="flex items-center text-sm text-neutral-500"
          >
            <div className="self-start aspect-square size-7 mt-1 mr-2">
              <input
                type="checkbox"
                name="confirmation"
                id="confirmation"
                className={`mr-3 checkbox-blue ${errorStyle} size-full`}
                onChange={handleConfirmation}
              />
            </div>
            <span className="flex select-none">
              {props.content.confirmationCheckbox}
            </span>
          </label>
        </div>
      </div>
    </Form>
  );
};

export default FormCard;
