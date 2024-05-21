import { ReactElement } from "react";

const Container = (props: { className?: string; children: ReactElement[] }) => {
  return (
    <div className={`max-w-[500px] m-auto text-left mt-2 ${props.className}`}>
      <>{props.children}</>
    </div>
  );
};

export default Container;
