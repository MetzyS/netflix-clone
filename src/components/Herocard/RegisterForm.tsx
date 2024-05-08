import { MdArrowForwardIos } from "react-icons/md";
import DefaultButton from "../ui/DefaultButton";
import Input from "../Form/Input";
import { Form, FormMethod } from "react-router-dom";
import { Form as FormType } from "../../data/DataType";

const RegisterForm = (props: {
  data: FormType;
  to: string;
  method?: FormMethod;
  onChange?: (value: string) => void;
}) => {
  return (
    <div className="mt-6 mx-auto px-8 max-w-[770px]">
      <Form action={props.to} method={props.method ? props.method : undefined}>
        <h3 className="text-base leading-normal">{props.data.text}</h3>
        <div className="flex flex-col sm:flex-row justify-center sm:justify-normal mt-4 gap-4">
          <Input
            type="email"
            label={props.data.email}
            onChange={props.onChange ? props.onChange : undefined}
            errorEmail={props.data.errorEmail}
          />
          <DefaultButton
            type="submit"
            text={props.data.button}
            primary={true}
            className="flex gap-3 text-xl items-center justify-between min-w-fit self-center md:text-2xl"
            icon={<MdArrowForwardIos className="size-5" />}
          />
        </div>
      </Form>
    </div>
  );
};

export default RegisterForm;
