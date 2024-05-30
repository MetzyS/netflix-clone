import { useEffect, useState } from "react";

const LanguageCheckBox = (props: {
  lang: string;
  value: number;
  onAdd: (value: number) => void;
  onRemove: (value: number) => void;
  defaultLanguage: number;
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    if (isChecked === true) {
      props.onAdd(props.value);
    } else if (isChecked === false) {
      props.onRemove(props.value);
    }
  }, [isChecked]);
  return (
    <>
      {props.defaultLanguage === props.value ? (
        <label
          htmlFor={`lang-${props.value}`}
          className={`inline-flex items-center w-full p-2 bg-neutral-200 text-black font-semibold`}
        >
          <input
            type="checkbox"
            name={`lang-${props.value}`}
            value={props.value}
            id={`lang-${props.value}`}
            className="mr-3 size-8 border-none bg-transparent"
            onChange={handleCheck}
            checked={true}
            disabled={true}
          />
          {props.lang}
        </label>
      ) : (
        <label
          htmlFor={`lang-${props.value}`}
          className={`inline-flex lg:items-center lg:max-w-[50%] w-full lg:w-full p-2 ${
            props.defaultLanguage === props.value ? "bg-neutral-200" : ""
          }`}
        >
          <input
            type="checkbox"
            name={`lang-${props.value}`}
            value={props.value}
            id={`lang-${props.value}`}
            className="mr-3 size-8"
            onChange={handleCheck}
          />
          {props.lang}
        </label>
      )}
    </>
  );
};
export default LanguageCheckBox;
