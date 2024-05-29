import { ReactElement, useState } from "react";
import { InfoBoxType } from "../../../types/data";
import DefaultButton from "../../ui/DefaultButton";
import Img from "../../../assets/popupImg.svg";

const InfoBox = (props: { content: InfoBoxType; icons: ReactElement[] }) => {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <>
      {showPopup && (
        <div className="fixed top-0 right-0 left-0 bottom-0 bg-black/50 z-20 backdrop-blur-[3px]">
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto p-8 min-w-[300px] bg-white max-w-[450px] shadow-lg">
            <img src={Img} alt="" className="w-1/2 m-auto" />
            <h1 className="font-bold text-2xl mb-6 text-center mt-6">
              {props.content.popUpTitle}
            </h1>
            <ul className="flex flex-col gap-4">
              {props.content.list.map((item, index) => (
                <li
                  key={`popupli-${index}`}
                  className="flex gap-3 items-center font-semibold"
                >
                  <span>{props.icons[index]}</span>
                  {item.desc}
                </li>
              ))}
            </ul>
            <DefaultButton
              text={props.content.button}
              className="w-full mt-6 rounded-sm"
              onClick={() => setShowPopup(false)}
            />
          </div>
        </div>
      )}
      <button
        type="button"
        className="bg-stone-200 py-4 px-5 text-left w-full"
        onClick={() => setShowPopup(true)}
        // onBlur={() => setShowPopup(false)}
      >
        {props.content.title[0]}{" "}
        <a className="font-semibold underline whitespace-nowrap">
          {props.content.title[1]}
        </a>
      </button>
    </>
  );
};

export default InfoBox;
