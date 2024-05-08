import { FormEvent, useState } from "react";
import { RxCrossCircled } from "react-icons/rx";
import { emailValidation } from "./InputValidation";

const Input = (props: {
  label: string;
  type: string;
  for?: string;
  errorEmail?: string;
  onChange?: (value: string) => void;
}) => {
  const [isFocus, setIsFocus] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);
  const [isValid, setIsValid] = useState<Boolean | undefined>(undefined);

  const handleValidate = (e: FormEvent<HTMLInputElement>) => {
    if (props.type == "email") {
      setIsValid(emailValidation(e.currentTarget.value));
    }
    console.log(isValid);
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

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    if (props.onChange) {
      props.onChange(e.currentTarget.value);
    }
  };

  return (
    <div className="w-full relative">
      <div
        className={`relative flex flex-col border ${
          !isValid && isValid != undefined
            ? "border-red-600"
            : "border-neutral-500"
        } ${
          isValid && "border-green-600"
        } rounded-md bg-blue-300/15 px-4 py-1  sm:w-full justify-center ring-default group/input backdrop-blur-[2px]`}
      >
        {isEmpty ? (
          <label
            htmlFor={`input-${props.type}`}
            className={`absolute pointer-events-none text-start text-gray-400 ${
              isFocus ? "top-0 text-xs" : "top-2.5 text-base"
            } `}
          >
            {props.label}
          </label>
        ) : (
          <label
            htmlFor={`input-${props.type}`}
            className={`absolute pointer-events-none text-start text-gray-400 top-0 text-xs`}
          >
            {props.label}
          </label>
        )}

        <input
          type={props.type}
          name={props.type}
          autoComplete={props.type}
          required
          className="pt-4 bg-transparent border-none outline-none autofill-transparent"
          onFocus={handleInputFocus}
          onBlur={handleInputFocus}
          onChange={(e) => {
            handleChange(e);
            handleEmptyInput(e);
            handleValidate(e);
          }}
        />
      </div>
      {!isValid && isValid != undefined && props.errorEmail && (
        <p className="sm:absolute pt-2 text-sm flex items-center gap-2 text-left text-red-500">
          {" "}
          <RxCrossCircled className="size-5" />
          {props.errorEmail}
        </p>
      )}
    </div>
  );
};
export default Input;
