import { useState } from "react";

const Input = (props: { label: string; type: string; for?: string }) => {
  const [isFocus, setIsFocus] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);

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
    <div className="relative flex flex-col border border-neutral-500 rounded-md bg-blue-300/15 px-4 py-1  sm:w-full justify-center ring-default group/input">
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
        onChange={handleEmptyInput}
      />
    </div>
  );
};
export default Input;
