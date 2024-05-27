import { ChangeEvent, useEffect, useState } from "react";
import { Inputs } from "../../../../types/inputs";
import { CreditCardOption } from "../../../../types/data";
import {
  cvvValidation,
  expdateValidation,
} from "../../../../helpers/InputValidation";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { RxCrossCircled } from "react-icons/rx";

const InputExpDateAndCVV = (props: {
  content: CreditCardOption;
  value: Inputs;
  onChange: (e: ChangeEvent<HTMLInputElement>, key: keyof Inputs) => void;
  inputColor: string;
  inputRing: string;
  handleValidInput: (key: string, value: boolean) => void;
  togglePopup: () => void;
  closePopup: () => void;
}) => {
  const [isFocus, setIsFocus] = useState({ expdate: false, cvv: false });
  const [isEmpty, setIsEmpty] = useState({ expdate: true, cvv: true });
  const [isValid, setIsValid] = useState<Record<string, boolean | undefined>>({
    expdate: undefined,
    cvv: undefined,
  });

  useEffect(() => {
    document.addEventListener("keydown", (e: KeyboardEvent) => {
      if (e.code == "Escape") {
        props.closePopup();
      }
    });

    if (isValid.expdate == true && isValid.cvv == true) {
      props.handleValidInput("datecvv", true);
    } else {
      props.handleValidInput("datecvv", false);
    }
  }, [isValid]);

  const handleValidateDate = (e: ChangeEvent<HTMLInputElement>) => {
    setIsValid((prevState) => ({
      ...prevState,
      expdate: expdateValidation(e.target.value),
    }));
  };

  const handleValidateCvv = (e: ChangeEvent<HTMLInputElement>) => {
    setIsValid((prevState) => ({
      ...prevState,
      cvv: cvvValidation(e.target.value),
    }));
  };

  // Fix false
  const handleInputFocus = (key: keyof Inputs) => {
    setIsFocus((prevState) => ({ ...prevState, [key]: !isFocus[key] }));
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
    <div className="flex gap-2.5 w-full mb-3">
      <>
        {/* input exp date */}
        <div className="relative mt-3 flex-grow basis-1/2">
          <div
            className={`relative flex flex-col border ${
              !isValid.expdate && isValid.expdate != undefined
                ? "border-red-600"
                : isValid.expdate
                ? "border-green-600"
                : "border-neutral-500"
            } rounded-md ${
              props.inputColor
            } px-4 py-2  sm:w-full justify-center ${
              props.inputRing
            } group/input backdrop-blur-[2px]`}
          >
            {isEmpty.expdate ? (
              <label
                htmlFor="input-expdate"
                className={`absolute transition-all w-3/4 truncate pointer-events-none text-start text-gray-400 ${
                  isFocus.expdate
                    ? "-translate-y-3 text-xs"
                    : "translate-y-0 text-base"
                } `}
              >
                {props.content.expDate}
              </label>
            ) : (
              <label
                htmlFor="input-expdate"
                className={`absolute transition-all w-3/4 truncate pointer-events-none text-start text-gray-400 -translate-y-3 text-xs`}
              >
                {props.content.expDate}
              </label>
            )}

            <input
              value={props.value.expdate}
              type="tel"
              name="input-expdate"
              autoComplete="off"
              required
              className="pt-4 bg-transparent border-none outline-none autofill-transparent w-full"
              onFocus={() => handleInputFocus("expdate")}
              onBlur={() => handleInputFocus("expdate")}
              onChange={(e) => {
                props.onChange(e, "expdate");
                handleEmptyInput(e, "expdate");
                handleValidateDate(e);
              }}
              placeholder={isFocus.expdate ? "MM/YY" : ""}
            />
          </div>
          {!isValid.expdate && isValid.expdate != undefined && (
            <p className={`text-left pt-2 text-[0.8rem] text-red-600`}>
              <span>
                <RxCrossCircled className="inline mr-1 size-4" />
              </span>
              {props.content.errorMessageExpDate}
            </p>
          )}
        </div>

        {/* input CVV */}
        <div className="relative mt-3 flex-grow basis-1/2">
          <div
            className={`relative flex flex-col border ${
              !isValid.cvv && isValid.cvv != undefined
                ? "border-red-600"
                : isValid.expdate
                ? "border-green-600"
                : "border-neutral-500"
            } rounded-md ${
              props.inputColor
            } px-4 py-2  sm:w-full justify-center ${
              props.inputRing
            } group/input backdrop-blur-[2px]`}
          >
            {isEmpty.cvv ? (
              <label
                htmlFor="input-cvv"
                className={`absolute transition-all w-1/2 truncate pointer-events-none text-start text-gray-400 ${
                  isFocus.cvv
                    ? "-translate-y-3 text-xs"
                    : "translate-y-0 text-base"
                } `}
              >
                {props.content.cvv}
              </label>
            ) : (
              <label
                htmlFor="input-cvv"
                className={`absolute transition-all w-1/2 truncate pointer-events-none text-start text-gray-400 -translate-y-3 text-xs`}
              >
                {props.content.cvv}
              </label>
            )}

            <input
              value={props.value.cvv}
              type="number"
              name="input-cvv"
              autoComplete="off"
              required
              className="pt-4 bg-transparent border-none outline-none autofill-transparent w-3/5 no-number-scrollbar"
              onFocus={() => handleInputFocus("cvv")}
              onBlur={() => handleInputFocus("cvv")}
              onChange={(e) => {
                props.onChange(e, "cvv");
                handleEmptyInput(e, "cvv");
                handleValidateCvv(e);
              }}
            />
            <button
              type="button"
              onClick={props.togglePopup}
              className="absolute right-5"
            >
              <AiOutlineQuestionCircle className="size-6 text-neutral-500" />
            </button>
          </div>
          {!isValid.cvv && isValid.cvv != undefined && (
            <p className={`text-left pt-2 text-[0.8rem] text-red-600`}>
              <span>
                <RxCrossCircled className="inline mr-1 size-4" />
              </span>
              {props.content.errorMessageCVV}
            </p>
          )}
        </div>
      </>
    </div>
  );
};

export default InputExpDateAndCVV;
