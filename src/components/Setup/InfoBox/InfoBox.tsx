import { InfoBoxType } from "../../../types/data";

const InfoBox = (props: {
  content: InfoBoxType;
  showPopupFunc: () => void;
}) => {
  return (
    <button
      className="bg-stone-200 py-4 px-5 text-left w-full"
      onClick={props.showPopupFunc}
    >
      {props.content.title[0]}{" "}
      <a className="font-semibold underline whitespace-nowrap">
        {props.content.title[1]}
      </a>
    </button>
  );
};

export default InfoBox;
