import { MdArrowForwardIos } from "react-icons/md";
import DefaultButton from "../ui/DefaultButton";

const RegisterForm = (props: {
  data: {
    text: string;
    email: string;
    content: string;
    button: string;
  };
}) => {
  return (
    <div className="mt-6 px-6">
      <form action="">
        <h3 className="text-xl leading-normal">{props.data.text}</h3>
        <div className="flex flex-col md:flex-row justify-center gap-6 mt-4">
          <div className="flex flex-col border-2 border-neutral-500 rounded-md bg-blue-400/15 px-4 py-1 backdrop-blur-[1px] md:w-full justify-center ring-default">
            <label
              htmlFor="register-email"
              className="text-neutral-300 text-sm text-start"
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
            className="flex gap-3 text-xl items-center justify-between min-w-fit self-center md:text-2xl"
            icon={<MdArrowForwardIos className="size-5" />}
          />
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
