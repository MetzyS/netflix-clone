import { ReactElement } from "react";

const DefaultButton = (props: {
  text?: string;
  icon?: ReactElement;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <button
      className={`btn-default ` + props.className}
      onClick={props.onClick}
    >
      {props.text}
      {props.icon && props.icon}
    </button>
  );
};

export default DefaultButton;
