import { ReactElement } from "react";
import { CreditCardOption } from "../../../../types/data";
import FormCard from "../Form/FormCard";
import BackButton from "../../BackButton";

const CreditCard = (props: {
  content: CreditCardOption;
  icons: ReactElement[];
  steps: string[];
  maxStep: string;
  backButtonFunc: () => void;
}): ReactElement => {
  return (
    <>
      <div className="max-w-[500px] m-auto text-left mt-2">
        <BackButton
          onClick={props.backButtonFunc}
          className="size-6 hover:text-red-600"
        />
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
      </div>
      <FormCard content={props.content} />
    </>
  );
};
export default CreditCard;
