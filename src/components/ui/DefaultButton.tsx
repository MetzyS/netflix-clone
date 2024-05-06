import { ReactElement } from "react";

const DefaultButton = (props: {
  text?: string;
  icon?: ReactElement;
  className?: string;
  onClick?: () => void;
  primary?: boolean;
}) => {
  let primary;
  let className;
  if (props.primary == undefined) {
    primary = false;
  } else {
    primary = props.primary;
  }
  if (props.className == undefined) {
    className = "";
  } else {
    className = props.className;
  }
  return (
    <button
      className={
        `${
          primary ? "btn-default btn-primary " : "btn-default btn-secondary "
        }` + className
      }
      onClick={props.onClick}
    >
      {props.text}
      {props.icon && props.icon}
    </button>
  );
};

export default DefaultButton;
