import { FormEvent, useEffect, useState } from "react";
import { RxCrossCircled } from "react-icons/rx";
import {
  emailValidation,
  passwordValidation,
} from "../../helpers/InputValidation";
import InputSpinner from "./InputSpinner";

const Input = (props: {
  label: string;
  type: string;
  for?: string;
  error: string[];
  onChange: (value: string) => void;
  value: string;
  white?: boolean;
  autocomplete?: string;
  isLoading?: boolean;
  errorPositionAbsolute?: boolean;
  customFunc?: (key: string, value: boolean) => void;
  setIsValid?: (value: boolean) => void;
}) => {
  // gestion couleur selon bg dark/white
  let inputColor = "input-dark";
  let inputRing = "ring-default";
  if (props.white) (inputColor = "input-white"), (inputRing = "ring-white");

  let errormessage;
  switch (props.type) {
    case "email":
      errormessage = props.error[0];
      break;
    case "password":
      errormessage = props.error[1];
      break;
    default:
      errormessage = props.error[0];
  }

  const [isFocus, setIsFocus] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);
  const [isValid, setIsValid] = useState<Boolean | undefined>(undefined);

  useEffect(() => {
    if (props.value != undefined && props.value != "") {
      setIsEmpty(false);
    }
  }, [props.value]);

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    props.onChange(e.currentTarget.value);
  };

  const handleValidate = (e: FormEvent<HTMLInputElement>) => {
    let result: boolean;
    switch (props.type) {
      case "email":
        result = emailValidation(e.currentTarget.value);
        setIsValid(result);
        if (props.setIsValid) {
          props.setIsValid(result);
        }
        if (props.customFunc) {
          props.customFunc("email", result);
        }
        break;
      case "password":
        result = passwordValidation(e.currentTarget.value);
        setIsValid(result);
        if (props.setIsValid) {
          props.setIsValid(result);
        }
        if (props.customFunc) {
          props.customFunc(
            "password",
            passwordValidation(e.currentTarget.value)
          );
        }
    }
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
    <>
      {props.isLoading ? (
        <InputSpinner />
      ) : (
        <div className="w-full relative">
          <div
            className={`relative flex flex-col border ${
              !isValid && isValid != undefined
                ? "border-red-600"
                : isValid
                ? "border-green-600"
                : "border-neutral-500"
            } rounded-md ${inputColor} px-4 py-1  sm:w-full justify-center ${inputRing} group/input backdrop-blur-[2px]`}
          >
            {isEmpty ? (
              <label
                htmlFor={`input-${props.type}`}
                className={`absolute transition-all pointer-events-none text-start text-gray-400 ${
                  isFocus ? "-translate-y-3 text-xs" : "translate-y-0 text-base"
                } `}
              >
                {props.label}
              </label>
            ) : (
              <label
                htmlFor={`input-${props.type}`}
                className={`absolute transition-all pointer-events-none text-start text-gray-400 -translate-y-3 text-xs`}
              >
                {props.label}
              </label>
            )}

            <input
              maxLength={props.type === "email" ? undefined : 15}
              value={props.value}
              type={props.type}
              name={props.type}
              autoComplete={props.autocomplete}
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
          {!isValid && isValid != undefined && (
            <p
              className={`${
                props.errorPositionAbsolute && "sm:absolute"
              } text-left pt-2 text-sm text-red-500`}
            >
              <span>
                <RxCrossCircled className="inline mr-1 size-4" />
              </span>
              {errormessage}
            </p>
          )}
        </div>
      )}
    </>
  );
};
export default Input;
