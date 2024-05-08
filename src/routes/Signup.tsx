import Header from "../components/Header/Header";
import { useDataContext } from "../layouts/RootLayout";
import Footer from "../components/Herocard/Footer";
import FirstStepForm from "../components/Signup/FirstStepForm";
import { useState } from "react";
import SignupForm from "../components/Form/SignupForm";

const Signup = () => {
  const { data, userEmail, handleChangeBg } = useDataContext();
  handleChangeBg(true);
  const [formStep, setFormStep] = useState(0);
  const handleFormStep = () => {
    setFormStep(1);
  };
  return (
    <div className="transition-all">
      <Header
        content={data.header}
        selectLang={false}
        className="border-b border-neutral-200 px-4 py-1 sm:py-3"
        link="/login"
        logoClassname="w-20 sm:w-40"
        showButton={false}
        transparentButton={true}
      />
      <div className="text-black mb-32 px-8">
        {formStep == 0 && (
          <FirstStepForm data={data.signup} onClick={handleFormStep} />
        )}
        {formStep == 1 && (
          <SignupForm data={data.signup} userEmail={userEmail} />
        )}
      </div>
      <div>
        <Footer
          data={data.signupFooter}
          text={data.signupFooterText}
          selectBg="bg-white"
          selectTextColor="text-neutral-600"
          className="bg-[#f3f3f3] border-t border-t-black/10"
          textColor="text-black"
          selectBorderColor="border-black/30"
          showLangText={true}
        />
      </div>
    </div>
  );
};

export default Signup;
