import { IoIosCheckmarkCircle } from "react-icons/io";
import { PlanCard, Signup } from "../../../types/data";
import { KeyboardEvent } from "react";

const Plan = (props: {
  isSelected: number;
  index: number;
  item: PlanCard;
  data: Signup;
  handleSelected: (value: number) => void;
}) => {
  const handleKeyDown = (e: KeyboardEvent<HTMLUListElement>) => {
    if (e.key === "Enter") {
      props.handleSelected(props.index);
    }
  };
  return (
    <ul
      onKeyDown={handleKeyDown}
      tabIndex={0}
      className={`ul-plan ${props.isSelected === props.index
          ? "lg:shadow-lg lg:shadow-black/40 border-neutral-400"
          : ""
        }`}
      onClick={() => props.handleSelected(props.index)}
    >
      <li>
        <div
          key={"plan-" + props.index}
          className={`relative basis-full h-28 lg:h-max lg:pb-8 border border-neutral-300 rounded-xl pt-4 lg:pt-2 px-2.5 cursor-pointer ${props.isSelected == props.index
              ? "bg-plan-" + props.index + " shadow-md text-white"
              : "bg-transparent"
            }`}
        >
          <h2 className="text-sm font-bold lg:text-lg lg:-mb-2">
            {props.item.title}
          </h2>
          <sub
            className={`text-xs lg:text-base font-semibold ${props.isSelected === props.index
                ? "text-white"
                : "text-neutral-600"
              }`}
          >
            {props.item.options}
          </sub>
          <div
            className={`absolute bottom-3 right-3 transition-all ${props.isSelected == props.index
                ? "opacity-100 size-5"
                : "opacity-0 size-0"
              }`}
          >
            <IoIosCheckmarkCircle className="size-full text-white" />
          </div>
        </div>
      </li>
      <div className="hidden lg:block p-4">
        {Object.values(props.data.firstStepPlanChoiceCards[props.index])
          .slice(2)
          .map((item, index) => (
            <li
              className="flex lg:flex-col justify-between flex-1 items-center lg:items-start py-3 border-b border-b-neutral-300 last-of-type:border-b-0"
              key={"planDescList-" + index}
            >
              <span className="text-[0.8rem] font-semibold text-neutral-500 flex-wrap flex-[0_0_40%]">
                {props.data.firstStepPlanChoiceList[index]}
              </span>
              <span className="text-right lg:text-left text-neutral-700 font-medium text-sm last-of-type:text-base">
                {item}
              </span>
            </li>
          ))}
      </div>
    </ul>
  );
};
export default Plan;
