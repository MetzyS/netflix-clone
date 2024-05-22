import { ReactElement, useEffect, useState } from "react";

const DefaultContainer = (props: {
  className?: string;
  children: ReactElement[] | ReactElement;
}): ReactElement => {
  const [transition, setTransition] = useState("opacity-0");
  useEffect(() => {
    setTransition("opacity-100");
  }, [transition]);
  return (
    <div className={`transition-opacity ${props.className} ${transition}`}>
      <>{props.children}</>
    </div>
  );
};

export default DefaultContainer;
