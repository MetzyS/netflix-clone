import Img from "../../../assets/download-img.jpg";
import Miniature from "../../../assets/download-miniature.png";

const Download = (props: { lang: string; title: string; text: string }) => {
  return (
    <div className="flex items-center mb-10 relative">
      <img src={Img} alt="" className="scale-110" />
      <div className="absolute-center flex border-2 border-white/30 px-2 py-1 rounded-xl gap-4 bg-black w-full xs:w-5/6">
        <div className="size-14 sm:w-24 sm:h-20 flex items-center my-auto">
          <img src={Miniature} alt="" className="w-9 sm:w-max sm:h-full" />
        </div>
        <div className="text-xs flex flex-col text-left justify-center w-full">
          <span className="font-semibold text-sm sm:text-base">
            {props.title}
          </span>
          <span className="text-blue-500 sm:text-sm">{props.text}</span>
        </div>
        <div className="download-animation size-16 sm:size-20"></div>
      </div>
    </div>
  );
};

export default Download;
