import { ChangeEvent, ReactElement, useEffect, useState } from "react";
import { usernameValidate } from "../../../helpers/InputValidation";

const InputName = (props: {
  content: string;
  profileId: number;
  icon: ReactElement;
  value?: string;
  required?: boolean;
  htmlFor: string;
  mainUser?: boolean;
  handleValidInput: (id: number, value: boolean | undefined) => void;
  saveProfileName: (id: number, value: string) => void;
}) => {
  const [isValid, setIsValid] = useState<undefined | boolean>(false);
  const [isEmpty, setIsEmpty] = useState(true);
  const [isFocus, setIsFocus] = useState(false);
  const [val, setVal] = useState("");
  const handleValue = (e: ChangeEvent<HTMLInputElement>) => {
    setVal(e.currentTarget.value);
  };
  const handleValidate = (e: ChangeEvent<HTMLInputElement>) => {
    const checkedUsername = usernameValidate(e.currentTarget.value);
    setIsValid(checkedUsername);
    if (e.currentTarget.value == "" || e.currentTarget.value == null) {
      // Si input profil principal vide => désactive btn submit
      if (props.mainUser) {
        props.handleValidInput(props.profileId, false);
      } else {
        // Si imput profil secondaire vide => supprime l'username precedemment sauvegardé
        props.handleValidInput(props.profileId, true);
        props.saveProfileName(props.profileId, "");
      }
    } else {
      props.handleValidInput(props.profileId, checkedUsername);
    }
    if (checkedUsername == true) {
      props.saveProfileName(props.profileId, e.currentTarget.value);
    }
  };

  useEffect(() => {
    if (props.value != undefined && props.value != "") {
      setIsEmpty(false);
      setVal(props.value);
      props.saveProfileName(props.profileId, props.value);
      const validateProps = usernameValidate(props.value);
      setIsValid(validateProps);
      props.handleValidInput(props.profileId, validateProps);
    }
  }, [props.value]);

  const handleInputFocus = () => {
    setIsFocus(!isFocus);
  };

  const handleEmptyInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.value == null || e.target.value == "") {
      setIsEmpty(true);
      setIsValid(undefined);
      props.handleValidInput(props.profileId, true);
    } else {
      setIsEmpty(false);
    }
  };
  return (
    <>
      <div className="flex items-center">
        <span className="mt-2.5 pr-2">{props.icon}</span>
        <div className={`m-auto w-full relative mt-3`}>
          <div
            className={`relative flex flex-col border ${
              isEmpty
                ? "border-stone-400"
                : isValid
                ? "border-green-600"
                : "border-red-500"
            } rounded-sm input-white px-4 py-2 sm:w-full justify-center ring-white 
          }`}
          >
            {isEmpty ? (
              <label
                htmlFor="input-name"
                className={`absolute transition pointer-events-none text-start text-stone-500 ${
                  isFocus
                    ? "-translate-y-3 text-xs font-semibold"
                    : "transalte-y-0 text-sm sm:text-lg"
                } `}
              >
                {props.content}
              </label>
            ) : (
              <label
                htmlFor="input-name"
                className={`absolute transition-all pointer-events-none text-start text-stone-500 -translate-y-3 text-xs font-semibold`}
              >
                {props.content}
              </label>
            )}

            <input
              value={val}
              type="text"
              name="input-name"
              autoComplete="off"
              required={props.required}
              className="pt-4 bg-transparent border-none outline-none autofill-transparent"
              onFocus={handleInputFocus}
              onBlur={handleInputFocus}
              onChange={(e) => {
                handleValue(e);
                handleEmptyInput(e);
                handleValidate(e);
              }}
            />
          </div>
        </div>
      </div>
      {!isEmpty && !isValid && (
        <p className="pl-14 mt-2 text-red-600 text-xs">
          Le nom doit contenir entre 3 et 10 lettres.
        </p>
      )}
    </>
  );
};

export default InputName;
