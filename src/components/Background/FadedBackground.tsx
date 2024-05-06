import { ReactNode } from "react";

const FadedBackground = (props: { children: ReactNode }) => {
  return (
    <>
      <div className="relative pb-8">
        <div className="bg bg-hero w-full"></div>
        <div className="bg bg-fade w-full"></div>
        {props.children}
      </div>
    </>
  );
};
export default FadedBackground;
