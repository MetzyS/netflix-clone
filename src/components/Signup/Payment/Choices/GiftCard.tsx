import { ReactElement } from "react";
import { NetflixGiftCard } from "../../../../types/data";
import Container from "../Container";
import BackButton from "../../BackButton";
import PlanPicker from "../Form/PlanPicker";
import DefaultButton from "../../../ui/DefaultButton";
import InputGiftCard from "../Form/InputGiftCard";
import InputSpinner from "../../../Form/InputSpinner";

const GiftCard = (props: {
  content: NetflixGiftCard;
  steps: string[];
  maxStep: string;
  isLoading: boolean;
  backButtonFunc: () => void;
  handleChangePlan: () => void;
  handleSubmitPayment: () => void;
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
        <InputGiftCard />
        <PlanPicker onClick={props.handleChangePlan} />
        {props.isLoading ? (
          <InputSpinner bg="text-white" className="mt-16" />
        ) : (
          <DefaultButton
            type="button"
            text={props.content.confirmationButton}
            primary={true}
            className="mt-4 w-full py-4 text-2xl "
            onClick={props.handleSubmitPayment}
          />
        )}
      </Container>
    </>
  );
};
export default GiftCard;
