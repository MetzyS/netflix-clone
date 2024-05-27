import { ChangeEvent, ReactElement, useState } from "react";
import { GoCreditCard } from "react-icons/go";
import { RxCrossCircled } from "react-icons/rx";
import { CreditCardOption } from "../../../../types/data";
import { creditCardValidation } from "../../../../helpers/InputValidation";

const InputCreditCard = (props: {
  content: CreditCardOption;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>, changeValue: string) => void;
  inputColor: string;
  inputRing: string;
  handleValidInput: (key: string, value: boolean) => void;
}): ReactElement => {
  const [isFocus, setIsFocus] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);
  const [isValid, setIsValid] = useState<boolean | undefined>(undefined);

  const handleValidate = (e: ChangeEvent<HTMLInputElement>) => {
    const isValid = creditCardValidation(e.target.value.replace(/ /g, ""));
    setIsValid(isValid);
    props.handleValidInput("cardNumber", isValid);
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
    <div className="w-full relative mt-3">
      <div
        className={`relative flex flex-col border ${
          !isValid && isValid != undefined
            ? "border-red-600"
            : isValid
            ? "border-green-600"
            : "border-neutral-500"
        } rounded-md ${props.inputColor} px-4 py-2  sm:w-full justify-center ${
          props.inputRing
        } group/input backdrop-blur-[2px]`}
      >
        {isEmpty ? (
          <label
            htmlFor="input-creditcard"
            className={`absolute transition-all pointer-events-none text-start text-gray-400 ${
              isFocus ? "-translate-y-3 text-xs" : "translate-y-0 text-base"
            } `}
          >
            {props.content.cardNumber}
          </label>
        ) : (
          <label
            htmlFor="input-creditcard"
            className={`absolute transition-all pointer-events-none text-start text-gray-400 -translate-y-3 text-xs`}
          >
            {props.content.cardNumber}
          </label>
        )}

        <input
          value={props.value}
          type="tel"
          name="input-creditcard"
          autoComplete="off"
          required
          className="pt-4 pr-10 bg-transparent border-none outline-none autofill-transparent"
          onFocus={handleInputFocus}
          onBlur={handleInputFocus}
          onChange={(e) => {
            props.onChange(e, e.target.value);
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
  );
};

export default InputCreditCard;
