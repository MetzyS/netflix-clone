import { mobileValidation } from "../../../helpers/InputValidation";
import France from "../../Signup/Payment/CustomIcons/France";
import { ChangeEvent, useEffect, useState } from "react";

const InputNumber = (props: {
  content: string;
  userNumber: string;
  errorMessage: string;
  onChange: (value: string) => void;
}) => {
  useEffect(() => {
    if (props.userNumber != undefined && props.userNumber != "") {
      setIsEmpty(false);
    }
  }, [props.userNumber]);
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
    <div
      className={`m-auto max-w-80 relative mt-3 ${
        isValid || isValid == undefined ? "pb-3" : ""
      }`}
    >
      <div
        className={`relative flex flex-col pl-20 border ${
          !isValid && isValid != undefined
            ? "border-red-600"
            : isValid
            ? "border-green-600"
            : "border-neutral-500"
        } rounded-sm input-white px-4 py-2 sm:w-full justify-center ring-white group/input backdrop-blur-[2px]`}
      >
        {isEmpty ? (
          <label
            htmlFor="input-creditcard"
            className={`absolute transition-all pointer-events-none text-start text-gray-400 ${
              isFocus
                ? "-translate-y-3.5 text-xs"
                : "translate-y-0 text-sm sm:text-lg"
            } `}
          >
            {props.content}
          </label>
        ) : (
          <label
            htmlFor="input-creditcard"
            className={`absolute transition-all pointer-events-none text-start text-gray-400 -translate-y-3.5 text-xs`}
          >
            {props.content}
          </label>
        )}

        <input
          value={props.userNumber}
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
        <span className="absolute left-5 flex gap-1.5 items-center">
          <France className="size-5 text-neutral-500" />
          <span className="text-xs font-semibold select-none">+33</span>
        </span>
      </div>
      {!isValid && isValid != undefined && (
        <p className={`text-center pt-1 px-4 text-sm text-red-600`}>
          {props.errorMessage}
        </p>
      )}
    </div>
  );
};

export default InputNumber;
