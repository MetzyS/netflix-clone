import { ReactElement } from "react";
import { PaypalOption } from "../../../../types/data";
import Container from "../Container";
import BackButton from "../../BackButton";
import PlanPicker from "../Form/PlanPicker";
import DefaultButton from "../../../ui/DefaultButton";
import InputSpinner from "../../../Form/InputSpinner";

const Paypal = (props: {
  content: PaypalOption;
  steps: string[];
  maxStep: string;
  isLoading: boolean;
  backButtonFunc: () => void;
  handleChangePlan: () => void;
  handleActivate: () => void;
}): ReactElement => {
  return (
    <>
      <Container>
        <div>
          <BackButton onClick={props.backButtonFunc} />
          <p className="text-neutral-800 uppercase text-xs mt-2">
            {props.steps[0]} <span className="font-bold">3</span>{" "}
            {props.steps[1]} <span className="font-bold">{props.maxStep}</span>
          </p>
          <h1 className="signup-title mt-1 leading-10">
            {props.content.title}
          </h1>
        </div>
        <PlanPicker onClick={props.handleChangePlan} />
        <p className="my-4">{props.content.desc}</p>
        {props.isLoading ? (
          <InputSpinner bg="text-white" className="mt-16" />
        ) : (
          <DefaultButton
            type="button"
            text={props.content.confirmationButton}
            primary={true}
            className="mt-4 w-full py-4 text-2xl "
            onClick={props.handleActivate}
          />
        )}
      </Container>
    </>
  );
};
export default Paypal;
