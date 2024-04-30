import Tv from "./Animations/Tv";

const Card = (props: {
  data: {
    id: string;
    title: string;
    text: string;
    videoUrl: string;
  };
}) => {
  let animation;
  switch (props.data.id) {
    case "0":
      animation = <Tv videoUrl={props.data.videoUrl} />;
      break;
    default:
      animation = <Tv videoUrl={props.data.videoUrl} />;
      break;
  }
  return (
    <div className="flex flex-col my-14 text-center">
      <div className="mb-10 px-8">
        <h2 className="text-3xl font-bold leading-10">{props.data.title}</h2>
        <p className="leading-6 mt-4">{props.data.text}</p>
      </div>
      <div className="max-w-[620px] px-5 relative">{animation}</div>
      <div className="separation my-5" />
    </div>
  );
};
export default Card;
