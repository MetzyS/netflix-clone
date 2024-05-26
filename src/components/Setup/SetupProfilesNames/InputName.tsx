import { ReactElement, useEffect, useState } from "react";

const InputName = (props: {
  content: string;
  id: number;
  icon: ReactElement;
  value?: string;
}) => {
  const [isValid, setIsValid] = useState<undefined | boolean>(undefined);
  const [isEmpty, setIsEmpty] = useState(true);
  const [isFocus, setIsFocus] = useState(false);

  useEffect(() => {
    if (props.value != undefined && props.value != "") {
      setIsEmpty(false);
    }
  }, [props.value]);

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
    <div className="flex items-center">
      <span className="mt-2.5 pr-2">{props.icon}</span>
      <div className={`m-auto w-full relative mt-3`}>
        <div
          className={`relative flex flex-col border ${
            isEmpty ? "border-stone-400" : "border-green-600"
          } rounded-sm input-white px-4 py-2 sm:w-full justify-center ring-white 
          }`}
        >
          {isEmpty ? (
            <label
              htmlFor="input-creditcard"
              className={`absolute pointer-events-none text-start text-stone-500 ${
                isFocus
                  ? "top-1.5 text-xs font-semibold"
                  : "top-4 sm:top-3 text-sm sm:text-lg"
              } `}
            >
              {props.content}
            </label>
          ) : (
            <label
              htmlFor="input-creditcard"
              className={`absolute pointer-events-none text-start text-stone-500 top-1.5 text-xs font-semibold`}
            >
              {props.content}
            </label>
          )}

          <input
            type="tel"
            name="input-creditcard"
            autoComplete="off"
            required
            className="pt-4 bg-transparent border-none outline-none autofill-transparent"
            onFocus={handleInputFocus}
            onBlur={handleInputFocus}
            onChange={(e) => {
              // props.onChange(e.target.value);
              handleEmptyInput(e);
              //   handleValidate(e);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default InputName;
