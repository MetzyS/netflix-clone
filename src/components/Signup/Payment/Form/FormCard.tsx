import { Form } from "react-router-dom";
import { CreditCardOption } from "../../../../types/data";
import { ChangeEvent, FormEvent, ReactElement, useState } from "react";
import ExpDateAndCVV from "./ExpDateAndCVV";
import InputCreditCard from "./InputCreditCard";
import { Inputs, InputsBooleanValues } from "../../../../types/inputs";

const FormCard = (props: { content: CreditCardOption }): ReactElement => {
  let inputColor = "input-white";
  let inputRing = "ring-white";
  const [CreditCardNumber, setCreditCardNumber] = useState<string>("");
  const [CreditCardDetails, setCreditCardDetails] = useState<Inputs>({
    expdate: "",
    cvv: "",
  });
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

  return (
    <Form>
      <>
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
      </>
    </Form>
  );
};

export default FormCard;
