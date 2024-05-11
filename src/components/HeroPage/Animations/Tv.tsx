import tv from "../../../assets/tv.png";
import ReactPlayer from "react-player";

const Tv = (props: { videoUrl: string }) => {
  return (
    <>
      <img src={tv} alt="" />
      <div className="absolute h-full w-full top-[21%] left-[17%] max-w-[65%] max-h-[54%] -z-10">
        <ReactPlayer
          controls={false}
          loop={true}
          muted={true}
          volume={0}
          playing={true}
          playsinline={true}
          url={props.videoUrl}
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
};

export default Tv;
