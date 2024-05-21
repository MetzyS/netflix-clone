import { ReactElement } from "react";
import { PaypalOption } from "../../../../types/data";
import Container from "../Container";
import BackButton from "../../BackButton";
import PlanPicker from "../Form/PlanPicker";
import DefaultButton from "../../../ui/DefaultButton";

const Paypal = (props: {
  content: PaypalOption;
  steps: string[];
  maxStep: string;
  backButtonFunc: () => void;
  handleChangePlan: () => void;
}): ReactElement => {
  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
  };
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
        <DefaultButton
          type="button"
          text={props.content.confirmationButton}
          primary={true}
          className="mt-4 w-full py-4 text-2xl "
          onClick={() => {
            console.log(handleSubmit);
          }}
        />
      </Container>
    </>
  );
};
export default Paypal;
