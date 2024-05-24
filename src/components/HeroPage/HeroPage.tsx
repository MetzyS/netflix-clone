import { useEffect } from "react";
import LangType from "../../types/data";
import Footer from "../Footer/Footer";
import OfferAd from "./OfferAd";
import Card from "./Card";
import Faq from "./Faq";
import Separation from "../ui/Separation";
import FadedBackground from "../Background/FadedBackground";
import FormRegister from "./FormRegister";
import { useDataContext } from "../../layouts/RootLayout";
import DefaultContainer from "../ui/DefaultContainer";

const HeroPage = (props: { lang: string; content: LangType }) => {
  const { handleChangeBg, handleShowHeaderBtn } = useDataContext();
  useEffect(() => {
    handleChangeBg(false);
    handleShowHeaderBtn(true);
  }, [handleChangeBg]);

  return (
    <>
      <DefaultContainer className="w-screen overflow-hidden pr-4">
        <FadedBackground className="pb-8">
          <div className="max-w-[1024px] m-auto text-center">
            <div className="px-4">
              <h1 className="pt-32 sm:pt-40 md:pt-48 lg:pt-72 px-4 text-3xl md:text-4xl lg:text-5xl font-bold leading-snug text-wrap max-w-full">
                {props.content.title}
              </h1>
              <h2 className="text-lg lg:text-2xl mt-6 leading-snug">
                {props.content.subtitle}
              </h2>
              <FormRegister content={props.content.form} to="" method="post" />
            </div>
          </div>
        </FadedBackground>
        <OfferAd content={props.content.offer} />
        <div>
          {Object.values(props.content.description).map((item, index) => (
            <Card content={item} key={"card-" + index} lang={props.lang} />
          ))}
        </div>
        <div className="mb-12">
          <h3 className="w-full max-w-[1024px] text-3xl text-center font-bold mb-6 px-6 mx-auto">
            {props.content.faqTitle}
          </h3>
          {Object.values(props.content.faq).map((item, index) => (
            <Faq content={item} key={"faq-" + index} />
          ))}
        </div>
        <div>
          <FormRegister content={props.content.form} to="" method="post" />
          <Separation />
        </div>
      </DefaultContainer>

      <Footer data={props.content.footer} text={props.content.footerText} />
    </>
  );
};

export default HeroPage;
