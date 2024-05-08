import { ReactElement } from "react";

const DefaultButton = (props: {
  text?: string;
  icon?: ReactElement;
  className?: string;
  onClick?: () => void;
  primary?: boolean;
  disabled?: boolean;
  type?: "submit" | "reset" | "button" | undefined;
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
      type={props.type ? props.type : "button"}
      className={
        `${
          primary ? "btn-default btn-primary " : "btn-default btn-secondary "
        }` + className
      }
      onClick={props.onClick}
      disabled={props.disabled ? props.disabled : undefined}
    >
      {props.text}
      {props.icon && props.icon}
    </button>
  );
};

export default DefaultButton;
