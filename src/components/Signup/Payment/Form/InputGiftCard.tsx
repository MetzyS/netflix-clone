import { ChangeEvent, ReactElement, useState } from "react";
import { giftCardValidate } from "../../../../helpers/InputValidation";
import { NetflixGiftCard } from "../../../../types/data";
import { RxCrossCircled } from "react-icons/rx";

const InputGiftCard = (props: {
  content: NetflixGiftCard;
  inputColor: string;
  inputRing: string;
}): ReactElement => {
  const [isValid, setIsValid] = useState<undefined | boolean>(undefined);
  const [isEmpty, setIsEmpty] = useState(true);
  const [isFocus, setIsFocus] = useState(false);

  const handleValidate = (e: ChangeEvent<HTMLInputElement>) => {
    setIsValid(giftCardValidate(e.target.value));
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
    <div className="w-full relative my-3">
      <div
        className={`relative flex flex-col border ${
          !isValid && isValid != undefined
            ? "border-red-600"
            : isValid
            ? "border-green-600"
            : "border-neutral-500"
        } rounded-md ${props.inputColor} px-4 py-2 w-full justify-center ${
          props.inputRing
        } group/input backdrop-blur-[2px]`}
      >
        {isEmpty ? (
          <label
            htmlFor="input-giftcard"
            className={`absolute pointer-events-none text-start text-gray-400 ${
              isFocus ? "top-1.5 text-xs" : "top-3.5 text-base"
            } `}
          >
            {props.content.pinInput}
          </label>
        ) : (
          <label
            htmlFor="input-giftcard"
            className={`absolute pointer-events-none text-start text-gray-400 top-1.5 text-xs`}
          >
            {props.content.pinInput}
          </label>
        )}
        <input
          type="text"
          name="input-creditcard"
          autoComplete="off"
          required
          className="pt-4 pr-10 bg-transparent border-none outline-none autofill-transparent uppercase"
          minLength={2}
          maxLength={50}
          onFocus={handleInputFocus}
          onBlur={handleInputFocus}
          onChange={(e) => {
            // props.onChange(e.target.value);
            handleEmptyInput(e);
            handleValidate(e);
          }}
        />
      </div>
      {!isValid && isValid != undefined && (
        <p className={`text-left pt-2 text-sm text-red-600`}>
          <span>
            <RxCrossCircled className="inline mr-1 size-4" />
          </span>
          {props.content.errorMessageConfirmation}
        </p>
      )}
    </div>
  );
};
export default InputGiftCard;
