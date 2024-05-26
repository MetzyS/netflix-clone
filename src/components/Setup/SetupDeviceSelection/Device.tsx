import { ReactElement, useState } from "react";

const Device = (props: {
  name: string;
  desc: string;
  checkedIcon: ReactElement;
}) => {
  const [isSelected, setIsSelected] = useState(false);
  const [opacity, setOpacity] = useState("opacity-0");
  const handleSelected = () => {
    if (isSelected == false) {
      setOpacity("opacity-0");
    }
    setIsSelected(!isSelected);
    setTimeout(() => {
      setOpacity("opacity-100");
    });
  };
  return (
    <div
      className={`flex flex-col border text-center rounded-md cursor-pointer flex-[1_1_30%] max-w-[180px] p-2 select-none relative ${
        isSelected ? "border-red-600" : ""
      }`}
      onClick={handleSelected}
    >
      {isSelected && (
        <span
          className={`absolute -top-2 -right-2 transition-opacity ${opacity} `}
        >
          {props.checkedIcon}
        </span>
      )}
      <div className="my-8"></div>
      <p className="font-semibold mb-1">{props.name}</p>
      <p className="text-xs text-neutral-400">{props.desc}</p>
    </div>
  );
};

export default Device;
