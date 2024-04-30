import devices from "../../../assets/devices.png";
import ReactPlayer from "react-player";

const Devices = (props: { videoUrl: string }) => {
  return (
    <>
      <img src={devices} alt="" />
      <div className="absolute h-full w-full top-[10%] left-[21%] max-w-[58%] max-h-[46%] -z-10">
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

export default Devices;
