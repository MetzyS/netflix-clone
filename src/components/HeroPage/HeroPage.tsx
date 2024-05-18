import { useEffect } from "react";
import DataType from "../../types/data";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import RegisterForm from "./RegisterForm";
import OfferAd from "./OfferAd";
import Card from "./Card";
import Faq from "./Faq";
import Separation from "../ui/Separation";
import FadedBackground from "../Background/FadedBackground";

const HeroPage = (props: {
  lang: string;
  content: DataType;
  userEmail?: string;
  handleChangeBg: (value: boolean) => void;
  onChangeForm: (value: string) => void;
  isCreatingAccount: boolean;
}) => {
  useEffect(() => {
    props.handleChangeBg(false);
  }, [props.handleChangeBg]);
  // console.log(isCreatingAccount);
  return (
    <>
      <div className="w-screen overflow-hidden pr-4">
        <FadedBackground className="pb-8">
          <Header
            content={props.content.header}
            link="/login"
            className="p-6"
          />
          <div className="max-w-[1024px] m-auto text-center">
            <div className="px-4">
              <h1 className="pt-10 md:pt-24 lg:pt-40 px-4 text-3xl md:text-4xl lg:text-5xl font-bold leading-snug text-wrap max-w-full">
                {props.content.title}
              </h1>
              <h2 className="text-lg lg:text-2xl mt-6 leading-snug">
                {props.content.subtitle}
              </h2>
              <RegisterForm
                data={props.content.form}
                // to="/signup"
                to=""
                onChange={props.onChangeForm}
                userEmail={props.userEmail}
                isCreatingAccount={props.isCreatingAccount}
              />
            </div>
          </div>
        </FadedBackground>
        <OfferAd content={props.content.offer} />
        <div>
          {Object.values(props.content.description).map((item, index) => (
            <Card data={item} key={"card-" + index} lang={props.lang} />
          ))}
        </div>
        <div className="mb-12">
          <h3 className="w-full max-w-[1024px] text-3xl text-center font-bold mb-6 px-6 mx-auto">
            {props.content.faqTitle}
          </h3>
          {Object.values(props.content.faq).map((item, index) => (
            <Faq data={item} key={"faq-" + index} />
          ))}
          {/* <Separation /> */}
        </div>
        <div>
          <RegisterForm
            data={props.content.form}
            to="/signup"
            onChange={props.onChangeForm}
            userEmail={props.userEmail}
            isCreatingAccount={props.isCreatingAccount}
          />
          <Separation />
        </div>
      </div>
      <Footer data={props.content.footer} text={props.content.footerText} />
    </>
  );
};

export default HeroPage;
