import { ReactNode } from "react";

const FadedBackground = (props: {
  children: ReactNode;
  className?: string;
}) => {
  let className;
  if (props.className == "" || props.className == undefined) {
    className = "";
  } else {
    className = props.className;
  }
  return (
    <>
      <div className={`relative ${className}`}>
        <div className="bg bg-hero w-full"></div>
        <div className="bg bg-fade w-full"></div>
        {props.children}
      </div>
    </>
  );
};
export default FadedBackground;
