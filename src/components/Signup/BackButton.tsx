import { ReactElement } from "react";
import { IoArrowBackOutline } from "react-icons/io5";

const BackButton = (props: {
  onClick: () => void;
  className: string;
}): ReactElement => {
  return (
    <button type="button" onClick={props.onClick}>
      <IoArrowBackOutline className={props.className} />
    </button>
  );
};
export default BackButton;
