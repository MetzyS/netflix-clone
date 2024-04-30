import Img from "../../../assets/download-img.jpg";
import Miniature from "../../../assets/download-miniature.png";

const Download = (props: { lang: string; title: string; text: string }) => {
  return (
    <div className="flex items-center mb-10 relative">
      <img src={Img} alt="" />
      <div className="absolute-center flex border-2 border-white/30 px-2 py-1 rounded-xl gap-4 bg-black">
        <div className="size-14 flex items-center">
          <img src={Miniature} alt="" className="w-9" />
        </div>
        <div className="text-xs flex flex-col text-left justify-center w-full">
          <span className="font-semibold text-sm">{props.title}</span>
          <span className="text-blue-500">{props.text}</span>
        </div>
        <div className="download-animation size-14"></div>
      </div>
    </div>
  );
};

export default Download;
