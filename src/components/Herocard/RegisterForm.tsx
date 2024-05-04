import { MdArrowForwardIos } from "react-icons/md";
import DefaultButton from "../ui/DefaultButton";
import { useState } from "react";

const RegisterForm = (props: {
  data: {
    text: string;
    email: string;
    button: string;
    autocomplete: string;
  };
}) => {
  const [isFocus, setIsFocus] = useState(false);
  const handleInputFocus = () => {
    setIsFocus(!isFocus);
  };

  return (
    <div className="mt-6 mx-auto px-8 max-w-[770px]">
      <form action="">
        <h3 className="text-base leading-normal">{props.data.text}</h3>
        <div className="flex flex-col sm:flex-row justify-center sm:justify-normal mt-4 gap-4">
          <div className="relative flex flex-col border border-neutral-500 rounded-md bg-blue-300/15 px-4 py-1  sm:w-full justify-center ring-default group/input">
            <label
              htmlFor="register-email"
              className={`absolute pointer-events-none text-start text-gray-400 ${
                isFocus ? "top-0 text-xs" : "top-2.5 text-base"
              } `}
            >
              {props.data.email}
            </label>

            <input
              type="email"
              name="email"
              autoComplete="email"
              required
              className="pt-4 bg-transparent border-none outline-none"
              onFocus={handleInputFocus}
              onBlur={handleInputFocus}
            />
          </div>
          <DefaultButton
            text={props.data.button}
            className="flex gap-3 text-xl items-center justify-between min-w-fit self-center md:text-2xl"
            icon={<MdArrowForwardIos className="size-5" />}
          />
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
