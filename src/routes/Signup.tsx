import { useDataContext } from "../layouts/RootLayout";
import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import FirstStepForm from "../components/Signup/FirstStepForm";
import SignupForm from "../components/Signup/SignupForm";
import SignupBack from "../components/Signup/SignupBack";
import FirstStepPlanDesc from "../components/Signup/FirstStep/FirstStepPlanDesc";
import FirstStepPlanChoice from "../components/Signup/FirstStep/FirstStepPlanChoice";

const Signup = () => {
  const {
    data,
    userEmail,
    handleUserEmail,
    handleChangeBg,
    handleCreateAccount,
    handleCreateUser,
    isCreated,
    isConnected,
    registerStep,
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
    handleCreateUser([
      { key: "email", value: newData.email },
      { key: "password", value: newData.password },
      { key: "registerStep", value: 2 },
    ]);
    handleFormStep(2);
  };
  const handleFormStep = (value: number) => {
    setFormStep(value);
  };

  let currentStep = registerStep;
  // console.log(registerStep);
  return (
    <>
      {/* {isConnected ? (
        <div>Connected</div>
      ) : ( */}
      <div className="transition-all w-screen flex flex-col min-h-screen">
        <Header
          content={data.header}
          selectLang={false}
          className="border-b border-neutral-200 px-4 py-1 sm:py-3 w-full"
          link="/login"
          logoClassname="w-20 sm:w-40"
          showButton={false}
          transparentButton={true}
        />
        <div className="text-black mb-32 px-6 lg:px-8 flex-grow">
          {formStep == 0 && (
            <FirstStepForm
              data={data.signup}
              onClick={() => handleFormStep(1)}
            />
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
          {userData.email.length > 5 &&
            userData.password.length >= 8 &&
            formStep == 2 && (
              <FirstStepPlanDesc
                data={data.signup}
                handleFormStep={() => {
                  handleFormStep(3);
                  handleCreateUser([{ key: "registerStep", value: 3 }]);
                }}
              />
            )}
          {formStep == 3 && (
            <FirstStepPlanChoice
              data={data.signup}
              handleFormStep={() => {
                handleFormStep(4);
                handleCreateUser([{ key: "registerStep", value: 4 }]);
              }}
            />
          )}
          {formStep == 4 && (
            <div>
              <span className="text-black">4</span>
            </div>
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
      {/* )} */}
    </>
  );
};

export default Signup;
