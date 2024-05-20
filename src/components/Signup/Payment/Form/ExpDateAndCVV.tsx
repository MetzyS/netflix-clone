import { ChangeEvent, useState } from "react";
import { Inputs, InputsBooleanValues } from "../../../../types/inputs";
import { CreditCardOption } from "../../../../types/data";
import { creditCardValidation } from "../../../Form/InputValidation";

const ExpDateAndCVV = (props: {
  content: CreditCardOption;
  value: Inputs;
  onChange: (e: ChangeEvent<HTMLInputElement>, key: keyof Inputs) => void;
  inputColor: string;
  inputRing: string;
}) => {
  const [value, setValue] = useState<Inputs>({ expdate: "", cvv: "" });
  const [isFocus, setIsFocus] = useState({ expdate: false, cvv: false });
  const [isEmpty, setIsEmpty] = useState({ expdate: true, cvv: true });
  const [isValid, setIsValid] = useState({
    expdate: undefined,
    cvv: undefined,
  });

  const handleValidate = (
    e: ChangeEvent<HTMLInputElement>,
    key: keyof Inputs
  ) => {
    setIsValid((prevState) => ({
      ...prevState,
      [key]: creditCardValidation(e.target.value),
    }));
  };

  // Fix false
  const handleInputFocus = (key: keyof Inputs) => {
    setIsFocus((prevState) => ({ ...prevState, [key]: false }));
  };

  const handleEmptyInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: keyof Inputs
  ): void => {
    if (e.target.value == null || e.target.value == "") {
      setIsEmpty((prevState) => ({ ...prevState, [key]: true }));
    } else {
      setIsEmpty((prevState) => ({ ...prevState, [key]: false }));
    }
  };

  return (
    <div className="flex gap-2 w-full">
      <input
        type="tel"
        className="basis-full w-full"
        onChange={(e) => props.onChange(e, "expdate")}
      />
      <input
        type="tel"
        className="basis-full w-full"
        onChange={(e) => props.onChange(e, "cvv")}
      />
    </div>
  );
};

export default ExpDateAndCVV;
