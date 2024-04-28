import { ReactElement } from "react";

const DefaultButton = (props: {
  text: string;
  icon?: ReactElement;
  className?: string;
}) => {
  return (
    <button className={`btn-default ` + props.className}>
      {props.text}
      {props.icon && props.icon}
    </button>
  );
};

export default DefaultButton;
