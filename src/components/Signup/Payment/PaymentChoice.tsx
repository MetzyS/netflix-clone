import { HiOutlineLockClosed } from "react-icons/hi";
import { IoMdLock } from "react-icons/io";
import { Payment } from "../../../types/data";
import { SiVisa } from "react-icons/si";
import MastercardIcon from "./CustomIcons/MastercardIcon";
import CbIcon from "./CustomIcons/CbIcon";
import BouyguesIcon from "./CustomIcons/BouyguesIcon";
import SfrIcon from "./CustomIcons/SfrIcon";
import PaypalIcon from "./CustomIcons/PaypalIcon";
import { SiOrange } from "react-icons/si";
import { FaCcAmex } from "react-icons/fa6";
import PaymentChoiceBlock from "./PaymentChoiceBlock";
import Logo from "../../ui/Logo";
import { useState } from "react";
import CreditCard from "./Choices/CreditCard";
import BackButton from "../BackButton";

const PaymentChoice = (props: {
  data: Payment;
  steps: string[];
  maxStep: string;
}) => {
  // 0 => CB, 1 => mobile, 2 => paypal, 3 => carte netflix
  const [selectedPayment, setSelectedPayment] = useState<number | undefined>(
    undefined
  );
  const handleSelectedPayment = (value: number | undefined) => {
    setSelectedPayment(value);
  };
  const paymentIconStyle = "w-10 h-8 border";
  const creditCardIcons = [
    [
      <SiVisa className={`text-blue-800 ${paymentIconStyle}`} />,
      <MastercardIcon className={paymentIconStyle} />,
      <FaCcAmex className={`text-blue-600 ${paymentIconStyle} p-1`} />,
      <CbIcon className={paymentIconStyle} />,
    ],
    [
      <BouyguesIcon className={paymentIconStyle} />,
      <SiOrange className={`text-orange-500 ${paymentIconStyle} p-1`} />,
      <SfrIcon className={`${paymentIconStyle} p-1`} />,
    ],
    [<PaypalIcon className={`${paymentIconStyle} p-1`} />],
    [<Logo className={`w-15 h-6 p-1 border`} />],
  ];
  return (
    <>
      {selectedPayment == undefined && (
        <div className="max-w-[500px] m-auto sm:text-center">
          <div className="py-12">
            <HiOutlineLockClosed className="text-red-600 rounded-full border-2 border-red-600 size-10 p-1.5 sm:m-auto" />
          </div>
          <p className="text-neutral-800 uppercase text-xs mt-2">
            {props.steps[0]} <span className="font-bold">3</span>{" "}
            {props.steps[1]} <span className="font-bold">{props.maxStep}</span>
          </p>
          <h1 className="signup-title mt-1 leading-10">{props.data.title}</h1>
          <p className="text-lg leading-snug">{props.data.desc}</p>
          <p className="flex flex-col text-lg font-semibold my-3">
            <span>{props.data.subDesc[0]}</span>
            <span>{props.data.subDesc[1]}</span>
          </p>
          <div className="flex flex-col">
            <p className="self-end text-sm flex items-center gap-1">
              <span>{props.data.encrypted}</span>
              <span>
                <IoMdLock className="text-yellow-500 size-4" />
              </span>
            </p>
            <div className="flex flex-col gap-1.5">
              {Object.values(props.data.paymentTypes).map((item, index) => (
                <PaymentChoiceBlock
                  text={item}
                  icons={creditCardIcons[index]}
                  onClick={handleSelectedPayment}
                  index={index}
                  key={"paymentchoiceblock-" + index}
                />
              ))}
            </div>
          </div>
        </div>
      )}
      {selectedPayment == 0 && (
        <>
          {/* <button
            onClick={() => handleSelectedPayment(undefined)}
            className="my-6"
          >
            Retour
          </button> */}
          <CreditCard
            backButtonFunc={() => handleSelectedPayment(undefined)}
            content={props.data.creditCardOption}
            steps={props.steps}
            maxStep={props.maxStep}
            icons={creditCardIcons[0]}
          />
        </>
      )}
      {selectedPayment == 1 && (
        <>
          <button onClick={() => handleSelectedPayment(undefined)}>
            Retour
          </button>
          <div>selected : mobile</div>
        </>
      )}
      {selectedPayment == 2 && (
        <>
          <button onClick={() => handleSelectedPayment(undefined)}>
            Retour
          </button>
          <div>selected : paypal</div>
        </>
      )}
      {selectedPayment == 3 && (
        <>
          <button onClick={() => handleSelectedPayment(undefined)}>
            Retour
          </button>
          <div>selected : netflix</div>
        </>
      )}
    </>
  );
};
export default PaymentChoice;
