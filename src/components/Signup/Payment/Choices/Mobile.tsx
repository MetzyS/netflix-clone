import { ReactElement } from "react";
import { MobileOption } from "../../../../types/data";
import Container from "../Container";
import BackButton from "../../BackButton";
import FormMobile from "../Form/FormMobile";

const Mobile = (props: {
  content: MobileOption;
  icons: ReactElement[];
  steps: string[];
  maxStep: string;
  backButtonFunc: () => void;
  handleChangePlan: () => void;
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
        <div className="flex gap-1">
          {props.icons.map((item, index) => (
            <span key={`icon-${index}`}>{item}</span>
          ))}
        </div>
        <p className="my-4">{props.content.desc}</p>
        <p className="mb-6">{props.content.secDesc}</p>
        <FormMobile
          handleChangePlan={props.handleChangePlan}
          content={props.content}
        />
      </Container>
    </>
  );
};
export default Mobile;
