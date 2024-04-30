import tv from "../../../assets/tv.png";
import ReactPlayer from "react-player";

const Tv = (props: { videoUrl: string }) => {
  return (
    <>
      <img src={tv} alt="" />
      <div className="absolute border border-red-500 h-full w-full top-[21%] left-[18%] max-w-[63%] max-h-[54%] -z-10">
        <ReactPlayer
          controls={false}
          loop={true}
          muted={true}
          volume={0}
          playing={true}
          playsinline={true}
          url={props.videoUrl}
          className="border-2 border-blue-500"
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
};

export default Tv;
