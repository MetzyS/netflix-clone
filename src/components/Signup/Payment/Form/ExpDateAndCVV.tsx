import { ChangeEvent, useState } from "react";

const ExpDateAndCVV = () => {
  let inputColor = "input-white";
  let inputRing = "ring-white";
  type Inputs = {
    expdate: string;
    cvv: string;
  };
  const [value, setValue] = useState<Inputs>({ expdate: "", cvv: "" });
  const [isFocus, setIsFocus] = useState({ expdate: false, cvv: false });
  const [isEmpty, setIsEmpty] = useState({ expdate: true, cvv: true });
  const [isValid, setIsValid] = useState({
    expdate: undefined,
    cvv: undefined,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    key: keyof Inputs
  ) => {
    setValue((prevState) => ({
      ...prevState,
      [key]: e.target.value,
    }));
    console.log(value);
  };

  return (
    <div className="flex gap-2 w-full">
      <input
        type="tel"
        className="basis-full w-full"
        onChange={(e) => handleChange(e, "expdate")}
      />
      <input
        type="tel"
        className="basis-full w-full"
        onChange={(e) => handleChange(e, "cvv")}
      />
    </div>
  );
};

export default ExpDateAndCVV;
