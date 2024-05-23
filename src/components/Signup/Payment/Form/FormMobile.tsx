import { Form } from "react-router-dom";
import PlanPicker from "./PlanPicker";
import { ChangeEvent, ReactElement, useState } from "react";
import InputNumber from "./InputNumber";
import { MobileOption } from "../../../../types/data";
import DefaultButton from "../../../ui/DefaultButton";
import InputSpinner from "../../../Form/InputSpinner";

const FormMobile = (props: {
  content: MobileOption;
  handleChangePlan: () => void;
  handleSubmitPayment: () => void;
  isLoading: boolean;
}): ReactElement => {
  let inputColor = "input-white";
  let inputRing = "ring-white";
  const [number, setNumber] = useState("");
  const [confirmation, setConfirmation] = useState<boolean | undefined>(
    undefined
  );
  const [errorStyle, setErrorStyle] = useState<string>("");

  const handleChangeNumber = (value: string) => {
    setNumber(value);
  };

  const handleConfirmation = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmation(e.target.checked);
    e.target.checked ? setErrorStyle("") : setErrorStyle("checkbox-error");
    console.log(e.target.checked);
  };

  return (
    <Form onSubmit={props.handleSubmitPayment}>
      <InputNumber
        content={props.content}
        onChange={handleChangeNumber}
        inputColor={inputColor}
        inputRing={inputRing}
        value={number}
      />
      <PlanPicker onClick={props.handleChangePlan} />
      <div className="w-11/12 m-auto flex flex-col gap-4 mt-4">
        {!confirmation && confirmation != undefined && (
          <p className="text-red-800">
            {props.content.errorMessageConfirmation}
          </p>
        )}
        <label
          htmlFor="confirmation"
          className="flex items-center text-sm text-neutral-500"
        >
          <div className="self-start aspect-square size-7 mt-1 mr-2">
            <input
              type="checkbox"
              name="confirmation"
              id="confirmation"
              className={`mr-3 checkbox-blue ${errorStyle} w-7 h-7`}
              onChange={handleConfirmation}
              required
            />
          </div>
          <span className="flex select-none">
            {props.content.confirmationCheckbox}
          </span>
        </label>
      </div>
      {props.isLoading ? (
        <InputSpinner bg="text-white" className="mt-16" />
      ) : (
        <DefaultButton
          type="submit"
          text={props.content.confirmationButton}
          primary={true}
          className="mt-12 w-full py-4 text-2xl "
        />
      )}
    </Form>
  );
};
export default FormMobile;
