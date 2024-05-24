import { ReactElement, useState, useEffect } from "react";

const Container = (props: {
  className?: string;
  children: ReactElement[] | ReactElement;
}) => {
  const [transition, setTransition] = useState("opacity-0");
  useEffect(() => {
    setTransition("opacity-100");
  }, [transition]);
  return (
    <div
      className={`max-w-[480px] m-auto text-left mt-2 transition-opacity ${transition} ${props.className}`}
    >
      <>{props.children}</>
    </div>
  );
};

export default Container;
