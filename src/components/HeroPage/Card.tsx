import Separation from "../ui/Separation";
import Devices from "./Animations/Devices";
import Download from "./Animations/Download";
import Profiles from "./Animations/Profiles";
import Tv from "./Animations/Tv";

const Card = (props: {
  content: {
    id: string;
    title: string;
    text: string;
    videoUrl?: string;
    downloadMovieTitle?: string;
    downloadText?: string;
  };
  lang: string;
  index: number;
}) => {
  let animation;
  const backupAnimationUrl = "videos/video-devices-1.m4v";
  switch (props.content.id) {
    case "0":
      if (props.content.videoUrl) {
        animation = <Tv videoUrl={props.content.videoUrl} />;
      } else {
        animation = <Tv videoUrl={backupAnimationUrl} />;
      }
      break;
    case "1":
      if (props.content.videoUrl) {
        animation = <Devices videoUrl={props.content.videoUrl} />;
      } else {
        animation = <Devices videoUrl={backupAnimationUrl} />;
      }
      break;
    case "2":
      if (props.lang) {
        animation = <Profiles lang={props.lang} />;
      } else {
        animation = <Profiles lang={"fr"} />;
      }
      break;
    case "3":
      if (props.content.downloadText && props.content.downloadMovieTitle) {
        animation = (
          <Download
            lang={props.lang}
            title={props.content.downloadMovieTitle}
            text={props.content.downloadText}
          />
        );
      } else {
        <Download
          lang="fr"
          title="Stranger Things"
          text="Téléchargement en cours..."
        />;
      }
      break;
    default:
      if (props.content.videoUrl) {
        animation = <Tv videoUrl={props.content.videoUrl} />;
      } else {
        animation = <Tv videoUrl={backupAnimationUrl} />;
      }
      break;
  }
  return (
    <>
      <div className="flex flex-col md:flex-row md:justify-center text-center items-center max-w-[1600px] m-auto">
        <div
          className={`mb-10 px-8 self-center w-full ${
            props.index % 2 && "order-2"
          }`}
        >
          <h2 className="text-3xl font-bold leading-10 md:text-start md:text-4xl lg:text-5xl">
            {props.content.title}
          </h2>
          <p className="leading-6 mt-4 md:text-start md:text-lg lg:text-xl">
            {props.content.text}
          </p>
        </div>
        <div
          className={`md:w-1/2 lg:flex lg:justify-center lg:w-full px-5 relative ${
            props.index % 2 && "order-1"
          }`}
        >
          {animation}
        </div>
      </div>
      <Separation />
    </>
  );
};
export default Card;
