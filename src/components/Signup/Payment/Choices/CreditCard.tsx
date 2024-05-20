import { ReactElement } from "react";
import { CreditCardOption } from "../../../../types/data";
import FormCard from "../Form/FormCard";

const CreditCard = (props: {
  content: CreditCardOption;
  icons: ReactElement[];
  steps: string[];
  maxStep: string;
}): ReactElement => {
  return (
    <>
      <div className="max-w-[500px] m-auto sm:text-center mt-2">
        <p className="text-neutral-800 uppercase text-xs mt-2">
          {props.steps[0]} <span className="font-bold">3</span> {props.steps[1]}{" "}
          <span className="font-bold">{props.maxStep}</span>
        </p>
        <h1 className="signup-title mt-1 leading-10">{props.content.title}</h1>
      </div>
      <div className="flex gap-1">
        {props.icons.map((item, index) => (
          <span key={"cardIcon-" + index}>{item}</span>
        ))}
      </div>
      <FormCard content={props.content} />
    </>
  );
};
export default CreditCard;
