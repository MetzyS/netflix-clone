import { ReactElement } from "react";
import { NetflixGiftCard, PlanCard } from "../../../../types/data";
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
  plans: Record<string, PlanCard>;
  backButtonFunc: () => void;
  handleChangePlan: () => void;
  handleActivate: () => void;
}): ReactElement => {
  let inputColor = "input-white";
  let inputRing = "ring-white";
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
        <InputGiftCard
          content={props.content}
          inputColor={inputColor}
          inputRing={inputRing}
        />
        <PlanPicker onClick={props.handleChangePlan} plans={props.plans} />
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
export default GiftCard;
