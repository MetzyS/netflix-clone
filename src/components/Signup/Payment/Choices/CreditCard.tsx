import { ReactElement } from "react";
import { CreditCardOption, PlanCard } from "../../../../types/data";
import FormCard from "../Form/FormCard";
import BackButton from "../../BackButton";
import Container from "../Container";

const CreditCard = (props: {
  content: CreditCardOption;
  icons: ReactElement[];
  steps: string[];
  maxStep: string;
  isLoading: boolean;
  plans: Record<string, PlanCard>;
  backButtonFunc: () => void;
  handleChangePlan: () => void;
  handleActivate: () => void;
}): ReactElement => {
  return (
    <>
      <Container>
        <BackButton onClick={props.backButtonFunc} />
        <p className="text-neutral-800 uppercase text-xs mt-2">
          {props.steps[0]} <span className="font-bold">3</span> {props.steps[1]}{" "}
          <span className="font-bold">{props.maxStep}</span>
        </p>
        <h1 className="signup-title mt-1 leading-10">{props.content.title}</h1>
        <div className="flex gap-1">
          {props.icons.map((item, index) => (
            <span key={"cardIcon-" + index}>{item}</span>
          ))}
        </div>
        <FormCard
          content={props.content}
          handleChangePlan={props.handleChangePlan}
          handleActivate={props.handleActivate}
          isLoading={props.isLoading}
          plans={props.plans}
        />
      </Container>
    </>
  );
};
export default CreditCard;
