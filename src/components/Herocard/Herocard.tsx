import data from "../../data/herocard.json";
import bg from "../../assets/herobg.jpg";
import RegisterForm from "./RegisterForm";
import Header from "../Header/Header";

const Herocard = (props: {
  lang: string;
  handleChangeLang: (value: string) => void;
}) => {
  let content = {
    title: "",
    subtitle: "",
    button: "",
    text: "",
    email: "",
  };
  switch (props.lang) {
    case "fr":
      content = data.fr;
      break;
    case "en":
      content = data.en;
      break;
    default:
      content = data.fr;
      break;
  }
  return (
    <div className="w-screen relative pb-16 overflow-hidden">
      <div className="bg bg-hero"></div>
      <div className="bg bg-fade w-screen"></div>
      <div className="max-w-[1024px] m-auto text-center">
        <Header lang={props.lang} handleChangeLang={props.handleChangeLang} />
        <div className="px-6">
          <h1 className="pt-6 text-5xl md:text-5xl font-bold leading-tight">
            {content.title}
          </h1>
          <h2 className="text-xl mt-4">{content.subtitle}</h2>
          <RegisterForm data={content} />
        </div>
      </div>
      {/* <div className="-z-10 background-hero bg-gradient-to-b from-black to-black/5"></div> */}
      {/* <img
        src={bg}
        alt=""
        aria-hidden="true"
        className="-z-20 object-cover background-hero"
      /> */}
      {/* <div className="pointer-events-none">
        <div
          className={`absolute w-full top-0 left-0 right-0 bottom-0 overflow-hidden`}
        >
          <div className="relative top-0 bottom-0 right-0 left-0 h-full"></div>
          <img
            aria-hidden="true"
            src={bg}
            alt=""
            className="absolute top-0 object-cover scale-125 h-full w-full -z-10"
          />
          <div className="absolute top-0 right-0 bottom-0 left-0 bg-black/40 bg-gradient-to-t from-black/30 to-black/70 w-full h-full -z-10"></div>
        </div>
      </div>
      <div className="pt-10 flex flex-col">
        <h1 className="text-4xl md:text-5xl font-bold leading-snug">
          {content.title}
        </h1> */}
      {/* <h2 className="text-xl mt-4">{content.subtitle}</h2> */}
      {/* <RegisterForm data={content} /> */}
      {/* <OfferAd /> */}
      {/* </div> */}
    </div>
  );
};

export default Herocard;
