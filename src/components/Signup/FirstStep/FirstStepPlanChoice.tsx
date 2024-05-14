import { useState } from "react";
import { useDataContext } from "../../../layouts/RootLayout";
import { Signup } from "../../../types/data";
import { IoIosCheckmarkCircle } from "react-icons/io";

const FirstStepPlanChoice = (props: {
  data: Signup;
  handleFormStep: () => void;
}) => {
  const { isConnected } = useDataContext();
  const [isSelected, setIsSelected] = useState(0);
  const handleSelected = (value: number) => {
    setIsSelected(value);
  };
  //  Combiner data.firstStepPlanChoiceCards et data.firstStepPlanList
  return (
    <>
      {isConnected ? (
        <div>Connected</div>
      ) : (
        <div className="flex flex-col mt-6 text-left max-w-[500px] m-auto">
          <p className="text-neutral-800 uppercase text-xs mt-6">
            {props.data.stepWord[0]} <span className="font-semibold">2</span>{" "}
            {props.data.stepWord[1]}{" "}
            <span className="font-semibold">{props.data.maxStep}</span>
          </p>
          <h1 className="signup-title mt-1 leading-10 font-semibold">
            {props.data.firstStepPlanChoiceTitle}
          </h1>
          <div className="flex gap-3 w-full">
            {Object.values(props.data.firstStepPlanChoiceCards).map(
              (item, index) => (
                <div
                  key={"plan-" + index}
                  className={`relative basis-full h-28 border border-neutral-300 rounded-xl pt-4 px-2.5 cursor-pointer ${
                    isSelected == index
                      ? "bg-plan-" + index + " shadow-md text-white"
                      : "bg-transparent"
                  }`}
                  onClick={() => handleSelected(index)}
                >
                  <h2 className="text-sm font-bold">{item.title}</h2>
                  <sub className="text-xs mt-2">{item.options}</sub>
                  <div
                    className={`absolute bottom-3 right-3 transition-all ${
                      isSelected == index
                        ? "opacity-100 size-5"
                        : "opacity-0 size-0"
                    }`}
                  >
                    <IoIosCheckmarkCircle className="size-full text-white" />
                  </div>
                </div>
              )
            )}
          </div>
          <ul className="mt-4">
            {Object.values(props.data.firstStepPlanChoiceCards[isSelected])
              .slice(2)
              .map((item, index) => (
                <li
                  className="flex justify-between py-3 border-b border-b-neutral-300"
                  key={"planDescList-" + index}
                >
                  <span className="text-xs font-semibold text-neutral-600 flex-wrap basis-48">
                    {props.data.firstStepPlanChoiceList[index]}
                  </span>
                  <span className="text-right text-neutral-600 font-semibold">
                    {item}
                  </span>
                </li>
              ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default FirstStepPlanChoice;
