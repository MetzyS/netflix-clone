import { ReactElement } from "react";
import { IoArrowBackOutline } from "react-icons/io5";

const BackButton = (props: {
  onClick: () => void;
  className?: string;
}): ReactElement => {
  return (
    <div className="flex">
      <button type="button" onClick={props.onClick} className="">
        <IoArrowBackOutline
          className={`size-6 hover:text-red-600 ${props.className}`}
        />
      </button>
    </div>
  );
};
export default BackButton;
