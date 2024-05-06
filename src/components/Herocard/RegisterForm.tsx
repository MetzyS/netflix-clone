import { MdArrowForwardIos } from "react-icons/md";
import DefaultButton from "../ui/DefaultButton";
import Input from "../Form/Input";

const RegisterForm = (props: {
  data: {
    text: string;
    email: string;
    button: string;
    autocomplete: string;
  };
}) => {
  return (
    <div className="mt-6 mx-auto px-8 max-w-[770px]">
      <form action="">
        <h3 className="text-base leading-normal">{props.data.text}</h3>
        <div className="flex flex-col sm:flex-row justify-center sm:justify-normal mt-4 gap-4">
          <Input type="email" label={props.data.email} />
          <DefaultButton
            text={props.data.button}
            primary={true}
            className="flex gap-3 text-xl items-center justify-between min-w-fit self-center md:text-2xl"
            icon={<MdArrowForwardIos className="size-5" />}
          />
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
