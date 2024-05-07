import HeroDataType from "../../data/HeroDataType";
import RegisterForm from "./RegisterForm";
import OfferAd from "./OfferAd";
import Card from "./Card";
import Faq from "./Faq";
import Footer from "./Footer";
import Separation from "../ui/Separation";
import FadedBackground from "../Background/FadedBackground";
import Header from "../Header/Header";

const Herocard = (props: { lang: string; content: HeroDataType }) => {
  return (
    <>
      <div className="w-screen overflow-hidden pr-4">
        <FadedBackground className="pb-8">
          <Header content={props.content.header} link="/login" />
          <div className="max-w-[1024px] m-auto text-center">
            <div className="px-4">
              <h1 className="pt-10 px-4 text-3xl md:text-5xl font-bold leading-snug text-wrap max-w-full">
                {props.content.title}
              </h1>
              <h2 className="text-lg mt-6 leading-snug">
                {props.content.subtitle}
              </h2>
              <RegisterForm data={props.content.form} to="/signup" />
            </div>
          </div>
        </FadedBackground>
        <OfferAd content={props.content.offer} />
        <div>
          {Object.values(props.content.description).map((item, index) => (
            <Card data={item} key={"card-" + index} lang={props.lang} />
          ))}
        </div>
        <div>
          <h3 className="w-full max-w-[1024px] text-3xl text-center font-bold mb-6 px-6 mx-auto">
            {props.content.faqTitle}
          </h3>
          {Object.values(props.content.faq).map((item, index) => (
            <Faq data={item} key={"faq-" + index} />
          ))}
          <Separation />
        </div>
        <div>
          <RegisterForm data={props.content.form} to="/signup" />
          <Separation />
        </div>
      </div>
      <Footer data={props.content.footer} text={props.content.footerText} />
    </>
  );
};

export default Herocard;
