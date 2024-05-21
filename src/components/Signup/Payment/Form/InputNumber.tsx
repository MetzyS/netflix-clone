import { GoCreditCard } from "react-icons/go";
import { RxCrossCircled } from "react-icons/rx";
import { MobileOption } from "../../../../types/data";
import { ChangeEvent, useState } from "react";
import { mobileValidation } from "../../../../helpers/InputValidation";
import { GiFrance } from "react-icons/gi";
import France from "../CustomIcons/France";

const InputNumber = (props: {
  content: MobileOption;
  value: string;
  onChange: (value: string) => void;
  inputColor: string;
  inputRing: string;
}) => {
  const [isValid, setIsValid] = useState<undefined | boolean>(undefined);
  const [isEmpty, setIsEmpty] = useState(true);
  const [isFocus, setIsFocus] = useState(false);

  const handleValidate = (e: ChangeEvent<HTMLInputElement>) => {
    setIsValid(mobileValidation(e.target.value));
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
        className={`relative flex flex-col pl-24 border ${
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
            className={`absolute pointer-events-none text-start text-gray-400 ${
              isFocus ? "top-1.5 text-xs" : "top-3.5 text-base"
            } `}
          >
            {props.content.numberInput}
          </label>
        ) : (
          <label
            htmlFor="input-creditcard"
            className={`absolute pointer-events-none text-start text-gray-400 top-1.5 text-xs`}
          >
            {props.content.numberInput}
          </label>
        )}

        <input
          value={props.value}
          type="tel"
          name="input-creditcard"
          autoComplete="off"
          required
          className="pt-4 bg-transparent border-none outline-none autofill-transparent"
          onFocus={handleInputFocus}
          onBlur={handleInputFocus}
          onChange={(e) => {
            props.onChange(e.target.value);
            handleEmptyInput(e);
            handleValidate(e);
          }}
        />
        <span className="absolute left-5 flex gap-2 items-center">
          <France className="size-7 text-neutral-500" />
          <span className="text-xs font-semibold select-none">+33</span>
        </span>
      </div>
      {!isValid && isValid != undefined && (
        <p className={`text-left pt-2 text-sm text-red-600`}>
          <span>
            <RxCrossCircled className="inline mr-1 size-4" />
          </span>
          {props.content.errorMessageInput}
        </p>
      )}
    </div>
  );
};

export default InputNumber;
