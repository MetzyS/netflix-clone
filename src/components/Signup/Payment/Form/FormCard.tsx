import { Form } from "react-router-dom";
import { CreditCardOption } from "../../../../types/data";
import { ChangeEvent, ReactElement, useEffect, useState } from "react";
import InputExpDateAndCVV from "./InputExpDateAndCVV";
import InputCreditCard from "./InputCreditCard";
import { Inputs } from "../../../../types/inputs";
import PlanPicker from "./PlanPicker";
import DefaultButton from "../../../ui/DefaultButton";
import { useDataContext } from "../../../../layouts/RootLayout";
import InputName from "./InputName";
import { GrClose } from "react-icons/gr";
import VisaCVV from "../../../../assets/visa_cvv.png";
import AmexCVV from "../../../../assets/amex_cvv.png";

const FormCard = (props: {
  content: CreditCardOption;
  handleChangePlan: () => void;
}): ReactElement => {
  const { handleCreateUser } = useDataContext();
  let inputColor = "input-white";
  let inputRing = "ring-white";

  const [inputsAreValid, setInputsAreValid] = useState<{
    cardNumber: boolean;
    datecvv: boolean;
    name: boolean;
  }>({ cardNumber: false, datecvv: false, name: false });
  const [isDisabled, setIsDisabled] = useState(true);

  const handleValidInputs = (key: string, value: boolean) => {
    setInputsAreValid((prevState) => ({
      ...prevState,
      [key]: value,
    }));
    console.log(inputsAreValid);
  };

  useEffect(() => {
    if (
      inputsAreValid?.cardNumber == true &&
      inputsAreValid.datecvv == true &&
      inputsAreValid.name == true
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [inputsAreValid]);

  const [creditCardNumber, setCreditCardNumber] = useState<string>("");
  const [creditCardDetails, setCreditCardDetails] = useState<Inputs>({
    expdate: "",
    cvv: "",
  });
  const [name, setName] = useState<string>("");
  const [showPopup, setShowPopup] = useState(false);
  const handleTogglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };
  const handleChangeName = (value: string) => {
    setName(value);
  };
  const [confirmation, setConfirmation] = useState<boolean | undefined>(
    undefined
  );

  const [errorStyle, setErrorStyle] = useState<string>("");
  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
  };
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

  const handleConfirmation = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmation(e.target.checked);
    e.target.checked ? setErrorStyle("") : setErrorStyle("checkbox-error");
  };

  return (
    <Form>
      <div className="max-w-[500px] m-auto">
        <InputCreditCard
          content={props.content}
          value={creditCardNumber}
          onChange={handleChangeCreditCardNumber}
          inputColor={inputColor}
          inputRing={inputRing}
          handleValidInput={handleValidInputs}
        />
        <InputExpDateAndCVV
          content={props.content}
          value={creditCardDetails}
          onChange={handleChangeCreditCardDetails}
          inputColor={inputColor}
          inputRing={inputRing}
          handleValidInput={handleValidInputs}
          togglePopup={handleTogglePopup}
          closePopup={handleClosePopup}
        />
        <InputName
          content={props.content}
          value={name}
          onChange={handleChangeName}
          inputColor={inputColor}
          inputRing={inputRing}
          handleValidInput={handleValidInputs}
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
        <PlanPicker onClick={props.handleChangePlan} />
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
                required
              />
            </div>
            <span className="flex select-none">
              {props.content.confirmationCheckbox}
            </span>
          </label>
        </div>
        <DefaultButton
          type="submit"
          text={props.content.confirmationButton}
          primary={true}
          className="mt-12 w-full py-4 text-2xl disabled:cursor-default"
          onClick={() => {
            console.log(handleSubmit);
          }}
          disabled={isDisabled}
        />
      </div>
      {showPopup && (
        <div className="fixed top-0 bottom-0 right-0 left-0 bg-white/95 z-30">
          <button
            className="absolute top-10 right-10"
            onClick={handleClosePopup}
          >
            <GrClose className="size-6" />
          </button>
          <div className="max-w-[250px] mt-20 mx-auto">
            <p className="text-center">{props.content.cvvPopupText}</p>
            <div className="mt-6">
              <img
                src={VisaCVV}
                alt="illustration carte de crédit"
                className="w-48 m-auto"
              />
            </div>
            <div className="mt-6">
              <img
                src={AmexCVV}
                alt="illustration carte de crédit"
                className="w-48 m-auto"
              />
            </div>
          </div>
        </div>
      )}
    </Form>
  );
};

export default FormCard;
