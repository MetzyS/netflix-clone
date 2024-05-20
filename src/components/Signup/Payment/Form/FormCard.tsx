import { Form } from "react-router-dom";
import { CreditCardOption } from "../../../../types/data";
import { FormEvent, ReactElement, useState } from "react";
import { creditCardValidation } from "../../../Form/InputValidation";
import { GoCreditCard } from "react-icons/go";
import { RxCrossCircled } from "react-icons/rx";
import ExpDateAndCVV from "./ExpDateAndCVV";

const FormCard = (props: { content: CreditCardOption }): ReactElement => {
  let inputColor = "input-white";
  let inputRing = "ring-white";
  const [value, setValue] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);
  const [isValid, setIsValid] = useState<Boolean | undefined>(undefined);

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  const handleValidate = (e: FormEvent<HTMLInputElement>) => {
    setIsValid(creditCardValidation(e.currentTarget.value));
  };

  const handleInputFocus = () => {
    setIsFocus(!isFocus);
  };

  const handleEmptyInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.value == null || e.target.value == "") {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  };
  return (
    <Form>
      <div>
        <div className="w-full relative mt-3">
          <div
            className={`relative flex flex-col border ${
              !isValid && isValid != undefined
                ? "border-red-600"
                : isValid
                ? "border-green-600"
                : "border-neutral-500"
            } rounded-md ${inputColor} px-4 py-2  sm:w-full justify-center ${inputRing} group/input backdrop-blur-[2px]`}
          >
            {isEmpty ? (
              <label
                htmlFor="input-creditcard"
                className={`absolute pointer-events-none text-start text-gray-400 ${
                  isFocus ? "top-1.5 text-xs" : "top-3.5 text-base"
                } `}
              >
                {props.content.cardNumber}
              </label>
            ) : (
              <label
                htmlFor="input-creditcard"
                className={`absolute pointer-events-none text-start text-gray-400 top-1.5 text-xs`}
              >
                {props.content.cardNumber}
              </label>
            )}

            <input
              value={value}
              type="number"
              name="input-creditcard"
              autoComplete="off"
              required
              className="pt-4 pr-10 bg-transparent border-none outline-none autofill-transparent"
              onFocus={handleInputFocus}
              onBlur={handleInputFocus}
              onChange={(e) => {
                handleChange(e);
                handleEmptyInput(e);
                handleValidate(e);
              }}
            />
            <span className="absolute right-5">
              <GoCreditCard className="size-6 text-neutral-500" />
            </span>
          </div>
          {!isValid && isValid != undefined && (
            <p className={`text-left pt-2 text-sm text-red-600`}>
              <span>
                <RxCrossCircled className="inline mr-1 size-4" />
              </span>
              {props.content.errorMessageCCNumber}
            </p>
          )}
        </div>
        <ExpDateAndCVV />
      </div>
    </Form>
  );
};

export default FormCard;
