import { useDataContext } from "../layouts/RootLayout";
import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import FirstStepForm from "../components/Signup/FirstStepForm";
import SignupForm from "../components/Signup/SignupForm";
import SignupBack from "../components/Signup/SignupBack";

const Signup = () => {
  const {
    data,
    userEmail,
    handleUserEmail,
    handleChangeBg,
    handleCreateAccount,
    isCreated,
  } = useDataContext();
  useEffect(() => {
    handleChangeBg(true);
  }, [handleChangeBg]);
  const [formStep, setFormStep] = useState(0);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const handleFormSubmit = (newData: { email: string; password: string }) => {
    setUserData((prevData) => ({ ...prevData, ...newData }));
    handleUserEmail(newData.email);
    handleFormStep(2);
    console.log(newData);
  };
  const handleFormStep = (value: number) => {
    setFormStep(value);
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
          <FirstStepForm data={data.signup} onClick={() => handleFormStep(1)} />
        )}
        {formStep == 1 && (
          <SignupForm
            data={data.signup}
            userEmail={userEmail}
            inputData={data.form}
            isCreated={isCreated}
            handleCreateAccount={handleCreateAccount}
            onSubmit={handleFormSubmit}
          />
        )}
        {userData.email.length > 5 && userData.password.length >= 8 && (
          <SignupBack
            data={data.signup}
            handleFormStep={handleFormStep}
            userData={userData}
          />
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
