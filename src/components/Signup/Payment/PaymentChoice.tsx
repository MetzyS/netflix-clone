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
import { useDataContext } from "../../../layouts/RootLayout";
import Container from "./Container";
import Mobile from "./Choices/Mobile";
import Paypal from "./Choices/Paypal";
import GiftCard from "./Choices/GiftCard";

const PaymentChoice = (props: {
  data: Payment;
  steps: string[];
  maxStep: string;
}) => {
  const { handleCreateUser } = useDataContext();
  // 0 => CB, 1 => mobile, 2 => paypal, 3 => carte netflix
  const [selectedPayment, setSelectedPayment] = useState<number | undefined>(
    undefined
  );
  const backToPlanChoice = () => {
    handleCreateUser([
      { key: "plan", value: 0 },
      { key: "registerStep", value: "3" },
    ]);
  };
  const handleSelectedPayment = (value: number | undefined) => {
    setSelectedPayment(value);
  };
  const paymentIconStyle = "w-10 h-8 border";
  const paymentIcons = [
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

  const handleChangePlan = () => {
    handleCreateUser([{ key: "registerStep", value: 3 }]);
  };
  return (
    <>
      {selectedPayment == undefined && (
        <Container className="sm:text-center">
          <BackButton
            onClick={backToPlanChoice}
            className="size-6 hover:text-red-600"
          />
          <div className="py-6">
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
                  icons={paymentIcons[index]}
                  onClick={handleSelectedPayment}
                  index={index}
                  key={"paymentchoiceblock-" + index}
                />
              ))}
            </div>
          </div>
        </Container>
      )}
      {selectedPayment == 0 && (
        <>
          <CreditCard
            backButtonFunc={() => handleSelectedPayment(undefined)}
            content={props.data.creditCardOption}
            steps={props.steps}
            maxStep={props.maxStep}
            icons={paymentIcons[0]}
            handleChangePlan={handleChangePlan}
          />
        </>
      )}
      {selectedPayment == 1 && (
        <>
          <Mobile
            backButtonFunc={() => handleSelectedPayment(undefined)}
            content={props.data.mobileOption}
            steps={props.steps}
            maxStep={props.maxStep}
            icons={paymentIcons[1]}
            handleChangePlan={handleChangePlan}
          />
        </>
      )}
      {selectedPayment == 2 && (
        <>
          <Paypal
            backButtonFunc={() => handleSelectedPayment(undefined)}
            content={props.data.paypalOption}
            steps={props.steps}
            maxStep={props.maxStep}
            handleChangePlan={handleChangePlan}
          />
        </>
      )}
      {selectedPayment == 3 && (
        <>
          <GiftCard
            backButtonFunc={() => handleSelectedPayment(undefined)}
            content={props.data.netflixGiftCard}
            steps={props.steps}
            maxStep={props.maxStep}
            handleChangePlan={handleChangePlan}
          />
        </>
      )}
    </>
  );
};
export default PaymentChoice;
