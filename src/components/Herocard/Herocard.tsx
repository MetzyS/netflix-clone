import data from "../../data/herocard.json";
import RegisterForm from "./RegisterForm";
import Header from "../Header/Header";
import OfferAd from "./OfferAd";

const Herocard = (props: {
  lang: string;
  handleChangeLang: (value: string) => void;
}) => {
  let content;
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
    <>
      <div className="relative pb-8 overflow-hidden">
        <div className="bg bg-hero"></div>
        <div className="bg bg-fade w-screen"></div>
        <div className="max-w-[1024px] m-auto text-center">
          <Header lang={props.lang} handleChangeLang={props.handleChangeLang} />
          <div className="overflow-hidden px-4">
            <h1 className="pt-10 px-4 text-3xl md:text-5xl font-bold leading-snug text-wrap max-w-full">
              {content.title}
            </h1>
            <h2 className="text-lg mt-6">{content.subtitle}</h2>
            <RegisterForm data={content} />
          </div>
        </div>
      </div>
      <OfferAd content={content.offer} />
    </>
  );
};

export default Herocard;
