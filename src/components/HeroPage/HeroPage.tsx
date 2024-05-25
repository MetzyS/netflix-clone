import { useEffect } from "react";
import { useDataContext } from "../../layouts/RootLayout";
import { HeroPageLocaleType } from "../../types/useLocaleTypes/ImportedLocaleTypes";
import { useLocale } from "../../hooks/useLocale";
import Footer from "../Footer/Footer";
import OfferAd from "./OfferAd";
import Card from "./Card";
import Faq from "./Faq";
import Separation from "../ui/Separation";
import FadedBackground from "../Background/FadedBackground";
import FormRegister from "./FormRegister";
import DefaultContainer from "../ui/DefaultContainer";

const HeroPage = () => {
  const { lang } = useDataContext();
  const { content, isLoading }: HeroPageLocaleType = useLocale(
    "HeroPage",
    lang
  );
  const { handleChangeBg, resetHeaderStyle } = useDataContext();
  useEffect(() => {
    resetHeaderStyle();
    handleChangeBg(false);
  }, []);

  return (
    <>
      {isLoading ? (
        <></>
      ) : (
        <>
          <DefaultContainer className="w-screen overflow-hidden pr-4">
            <FadedBackground className="pb-8">
              <div className="max-w-[1024px] m-auto text-center">
                <div className="px-4">
                  <h1 className="pt-32 sm:pt-40 md:pt-48 lg:pt-72 px-4 text-3xl md:text-4xl lg:text-5xl font-bold leading-snug text-wrap max-w-full">
                    {content.title}
                  </h1>
                  <h2 className="text-lg lg:text-2xl mt-6 leading-snug">
                    {content.subtitle}
                  </h2>
                  <FormRegister content={content.form} to="" method="post" />
                </div>
              </div>
            </FadedBackground>

            <OfferAd content={content.offer} />

            <div>
              {Object.values(content.description).map((item, index) => (
                <Card content={item} key={"card-" + index} lang={lang} />
              ))}
            </div>

            <div className="mb-12">
              <h3 className="w-full max-w-[1024px] text-3xl text-center font-bold mb-6 px-6 mx-auto">
                {content.faqTitle}
              </h3>
              {Object.values(content.faq).map((item, index) => (
                <Faq content={item} key={"faq-" + index} />
              ))}
            </div>

            <div>
              <FormRegister content={content.form} to="" method="post" />
              <Separation />
            </div>
          </DefaultContainer>

          <Footer />
        </>
      )}
    </>
  );
};

export default HeroPage;
