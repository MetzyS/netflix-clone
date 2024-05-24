import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { IoMdCheckmark } from "react-icons/io";
import { Signup } from "../../../types/data";
import DefaultContainer from "../../ui/DefaultContainer";

const FirstStepPlanDesc = (props: {
  data: Signup;
  handleFormStep: () => void;
}) => {
  return (
    <>
      <DefaultContainer className="flex flex-col mt-16 text-left sm:text-center max-w-[440px] m-auto">
        <span>
          <IoIosCheckmarkCircleOutline className="size-14 text-red-600 sm:mx-auto" />
        </span>
        <p className="text-neutral-800 uppercase text-xs mt-6">
          {props.data.stepWord[0]} <span className="font-semibold">1</span>{" "}
          {props.data.stepWord[1]}{" "}
          <span className="font-semibold">{props.data.maxStep}</span>
        </p>
        <h1 className="signup-title mt-1 leading-10 font-semibold">
          {props.data.firstStepPlanTitle}
        </h1>
        <ul className="flex flex-col gap-4 mt-3">
          {props.data.firstStepPlanDesc.map((desc, index) => (
            <li key={"plan-" + index} className="flex gap-3 text-lg">
              <span>
                <IoMdCheckmark className="size-8 text-red-600" />
              </span>
              {desc}
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="py-3 w-full text-white text-2xl rounded-md bg-[#e50914] hover:bg-[#f6121d] my-6 font-semibold"
          onClick={props.handleFormStep}
        >
          {props.data.firstButton}
        </button>
      </DefaultContainer>
    </>
  );
};
export default FirstStepPlanDesc;
