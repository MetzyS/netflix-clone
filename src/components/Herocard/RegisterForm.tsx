import { MdArrowForwardIos } from "react-icons/md";
import DefaultButton from "../ui/DefaultButton";

const RegisterForm = (props: {
  data: {
    text: string;
    email: string;
    button: string;
  };
}) => {
  return (
    <div className="mt-6 mx-auto px-8 max-w-[770px]">
      <form action="">
        <h3 className="text-basez leading-normal">{props.data.text}</h3>
        <div className="flex flex-col md:flex-row justify-center mt-4 gap-4">
          <div className="flex flex-col border border-neutral-500 rounded-md bg-blue-300/15 px-4 py-1  md:w-full justify-center ring-default">
            <label
              htmlFor="register-email"
              className="text-neutral-300 text-xs text-start"
            >
              {props.data.email}
            </label>
            <input
              type="email"
              autoComplete="email"
              className="bg-transparent border-none outline-none"
            />
          </div>
          <DefaultButton
            text={props.data.button}
            className="flex gap-3 text-xl items-center justify-between min-w-fit self-center md:text-2xl mb-2"
            icon={<MdArrowForwardIos className="size-5" />}
          />
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
