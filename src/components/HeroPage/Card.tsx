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
    <div className="flex flex-col my-6 text-center items-center">
      <div className="mb-10 px-8 self-center">
        <h2 className="text-3xl font-bold leading-10">{props.content.title}</h2>
        <p className="leading-6 mt-4">{props.content.text}</p>
      </div>
      <div className="max-w-[620px] px-5 relative">{animation}</div>
      <Separation />
    </div>
  );
};
export default Card;
