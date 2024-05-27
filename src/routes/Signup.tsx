import { useDataContext } from "../layouts/RootLayout";
import { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import FirstStepForm from "../components/Signup/FirstStepForm";
import SignupForm from "../components/Signup/SignupForm";
import FirstStepPlanDesc from "../components/Signup/FirstStep/FirstStepPlanDesc";
import FirstStepPlanChoice from "../components/Signup/FirstStep/FirstStepPlanChoice";
import PaymentChoice from "../components/Signup/Payment/PaymentChoice";
import { Navigate } from "react-router-dom";
import Processing from "../components/Signup/Payment/Processing/Processing";
import { useLocale } from "../hooks/useLocale";
import { SignUpLocaleType } from "../types/useLocaleTypes/ImportedLocaleTypes";
import { createUsernameFromEmail } from "../helpers/createUsernameFromEmail";

const Signup = () => {
  const {
    user,
    lang,
    isConnected,
    userEmail,
    handleUserEmail,
    handleRegisterAccount,
    handleCreateUser,
    setWhiteTheme,
    isRegistered,
    isConfigured,
  } = useDataContext();

  const { content, isLoading }: SignUpLocaleType = useLocale("Signup", lang);

  useEffect(() => {
    // Header style
    setWhiteTheme(true);
    isRegistered && user!.registerStep && setFormStep(user!.registerStep);
  }, []);

  const [formStep, setFormStep] = useState(user!.registerStep);
  const handleFormStep = (value: number) => {
    setFormStep(value);
  };

  const handleFormSubmit = (newData: {
    email: string;
    password: string;
    authorization: boolean;
    plan: number;
  }) => {
    handleUserEmail(newData.email);
    handleCreateUser([
      { key: "email", value: newData.email },
      { key: "password", value: newData.password },
      { key: "authorization", value: newData.authorization },
      { key: "registered", value: true },
      { key: "registerStep", value: 2 },
      { key: "username", value: createUsernameFromEmail(newData.email) },
    ]);
    handleRegisterAccount(true);
    handleFormStep(2);
  };

  const handlePlanChoiceSubmit = (selectedPlan: number) => {
    handleCreateUser([
      { key: "registerStep", value: 4 },
      { key: "authorization", value: false },
      { key: "plan", value: selectedPlan },
    ]);
    handleFormStep(4);
  };

  const handleSubmitPayment = () => {
    handleCreateUser([{ key: "authorization", value: true }]);
    handleCreateUser([{ key: "registered", value: true }]);
    handleCreateUser([{ key: "registerStep", value: 6 }]);
    handleCreateUser([{ key: "setupStep", value: 1 }]);
    handleFormStep(6);
    handleRegisterAccount(true);
  };

  const handleActivate = () => {
    handleFormStep(5);
  };

  return (
    <>
      {isLoading ? (
        <></>
      ) : (
        <>
          {isConnected && isConfigured ? (
            <Navigate to="/" />
          ) : (
            <div className="transition-all w-screen flex flex-col min-h-screen pt-20 sm:pt-32">
              <div className="text-black mb-32 px-6 lg:px-8 flex-grow">
                {formStep == 0 && (
                  <FirstStepForm
                    data={content.signup}
                    onClick={() => handleFormStep(1)}
                  />
                )}
                {formStep == 1 && (
                  <SignupForm
                    data={content.signup}
                    userEmail={userEmail}
                    inputData={content.form}
                    isRegistered={isRegistered}
                    handleRegisterAccount={handleRegisterAccount}
                    onSubmit={handleFormSubmit}
                  />
                )}
                {user!.email.length > 5 &&
                  user!.password.length >= 8 &&
                  formStep == 2 && (
                    <FirstStepPlanDesc
                      data={content.signup}
                      handleFormStep={() => {
                        handleFormStep(3);
                        handleCreateUser([{ key: "registerStep", value: 3 }]);
                      }}
                    />
                  )}
                {formStep == 3 && (
                  <FirstStepPlanChoice
                    data={content.signup}
                    handleSubmit={handlePlanChoiceSubmit}
                  />
                )}
                {formStep == 4 && (
                  <PaymentChoice
                    data={content.signup.paymentStep}
                    steps={content.signup.stepWord}
                    maxStep={content.signup.maxStep}
                    handleActivate={handleActivate}
                    isLoading={isLoading}
                    handleFormStep={handleFormStep}
                    plans={content.signup.firstStepPlanChoiceCards}
                  />
                )}
                {formStep == 5 && (
                  <Processing
                    handleSubmitPayment={handleSubmitPayment}
                    content={content.processing}
                  />
                )}
                {formStep == 6 && <Navigate to="/setup" />}
              </div>
              <div>
                <Footer
                  selectBg="bg-white"
                  selectTextColor="text-neutral-600"
                  className="bg-[#f3f3f3] border-t border-t-black/10"
                  textColor="text-black"
                  selectBorderColor="border-black/30"
                  showLangText={true}
                />
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Signup;
