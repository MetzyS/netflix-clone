import { ReactElement } from "react";
import { MobileOption } from "../../../../types/data";

const Mobile = (props: {
  content: MobileOption;
  icons: ReactElement[];
  steps: string[];
  maxStep: string;
}): ReactElement => {
  return (
    <div className="max-w-[500px] m-auto sm:text-center">
      <div>
        <p className="text-neutral-800 uppercase text-xs mt-2">
          {props.steps[0]} <span className="font-bold">3</span> {props.steps[1]}{" "}
          <span className="font-bold">{props.maxStep}</span>
        </p>
        <h1 className="signup-title mt-1 leading-10">{props.content.title}</h1>
      </div>
      <div className="flex gap-1">
        {props.icons.map((item) => (
          <>{item}</>
        ))}
      </div>
    </div>
  );
};
export default Mobile;
