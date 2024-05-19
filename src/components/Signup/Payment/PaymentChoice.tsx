import { HiOutlineLockClosed } from "react-icons/hi";
import { Payment } from "../../../types/data";

const PaymentChoice = (props: {
  data: Payment;
  steps: string[];
  maxStep: string;
}) => {
  return (
    <>
      <div className="py-12">
        <HiOutlineLockClosed className="text-red-600 rounded-full border-2 border-red-600 size-14 p-2.5" />
      </div>
      <p className="text-neutral-800 uppercase text-xs mt-2">
        {props.steps[0]} <span className="font-bold">3</span> {props.steps[1]}{" "}
        <span className="font-bold">{props.maxStep}</span>
      </p>
      <h1 className="signup-title mt-1 leading-10">{props.data.title}</h1>
      <p className="text-lg leading-snug">{props.data.desc}</p>
      <p className="flex flex-col text-lg font-semibold my-3">
        <span>{props.data.subDesc[0]}</span>
        <span>{props.data.subDesc[1]}</span>
      </p>
      <div></div>
    </>
  );
};
export default PaymentChoice;
