import { useState } from "react";
import { Signup } from "../../../types/data";
import Plan from "./Plan";

const FirstStepPlanChoice = (props: {
  data: Signup;
  handleFormStep: () => void;
}) => {
  const [isSelected, setIsSelected] = useState(0);
  const handleSelected = (value: number) => {
    setIsSelected(value);
  };
  return (
    <>
      <div className="flex flex-col lg:mt-1 text-left max-w-[500px] lg:max-w-[1100px] m-auto">
        <p className="text-neutral-800 uppercase text-xs mt-6">
          {props.data.stepWord[0]} <span className="font-semibold">2</span>{" "}
          {props.data.stepWord[1]}{" "}
          <span className="font-semibold">{props.data.maxStep}</span>
        </p>
        <h1 className="signup-title mt-1 leading-10">
          {props.data.firstStepPlanChoiceTitle}
        </h1>
        <div className="flex gap-3 w-full">
          {Object.values(props.data.firstStepPlanChoiceCards).map(
            (item, index) => (
              <Plan
                isSelected={isSelected}
                index={index}
                item={item}
                data={props.data}
                handleSelected={handleSelected}
              />
            )
          )}
        </div>
        <ul className="mt-4 block lg:hidden">
          {Object.values(props.data.firstStepPlanChoiceCards[isSelected])
            .slice(2)
            .map((item, index) => (
              <li
                className="flex justify-between flex-1 items-center py-3 border-b border-b-neutral-300 last-of-type:border-b-0"
                key={"planDescList-" + index}
              >
                <span className="text-sm font-semibold text-neutral-600 flex-wrap flex-[0_0_40%]">
                  {props.data.firstStepPlanChoiceList[index]}
                </span>
                <span className="text-right text-neutral-600 font-semibold text-sm">
                  {item}
                </span>
              </li>
            ))}
        </ul>
        <div className="mt-1 lg:mt-6">
          {Object.values(props.data.firstStepConditions).map((item, index) => (
            <p
              className="text-sm text-neutral-600 my-4"
              key={"condition-" + index}
            >
              {item}
            </p>
          ))}
          <div className="flex justify-center w-full">
            <button
              type="button"
              className="py-3 w-full max-w-[600px] text-white text-2xl rounded-md bg-[#f6121d] hover:bg-[#e50914] my-6 font-semibold"
              onClick={props.handleFormStep}
            >
              {props.data.firstButton}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstStepPlanChoice;
