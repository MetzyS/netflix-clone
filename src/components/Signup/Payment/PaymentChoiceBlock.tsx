import { ReactElement } from "react";
import { GrNext } from "react-icons/gr";

const PaymentChoiceBlock = (props: {
  text: string;
  icons: ReactElement[];
  onClick: (value: number | undefined) => void;
  index: number;
}) => {
  return (
    <button
      className="border-2 border-neutral-300 py-4 flex rounded-md hover:border-neutral-400 relative"
      onClick={() => props.onClick(props.index)}
    >
      <div className="flex flex-wrap items-center">
        <span className="text-base mb-0.5 ml-4">{props.text}</span>
        <div className="flex gap-2 mx-4 mr-12">
          {props.icons.map((item, index) => (
            <span key={"pcb-" + index}>{item}</span>
          ))}
        </div>
        <span className="absolute right-2">
          <GrNext className="size-5" />
        </span>
      </div>
    </button>
  );
};
export default PaymentChoiceBlock;
