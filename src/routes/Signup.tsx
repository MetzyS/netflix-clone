import { useDataContext } from "../layouts/RootLayout";
import { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import FirstStepForm from "../components/Signup/FirstStepForm";
import SignupForm from "../components/Signup/SignupForm";
import FirstStepPlanDesc from "../components/Signup/FirstStep/FirstStepPlanDesc";
import FirstStepPlanChoice from "../components/Signup/FirstStep/FirstStepPlanChoice";
import PaymentChoice from "../components/Signup/Payment/PaymentChoice";
import { Navigate } from "react-router-dom";

const Signup = () => {
  const {
    user,
    data,
    isConnected,
    userEmail,
    handleHeaderStyle,
    handleUserEmail,
    handleChangeBg,
    handleCreateAccount,
    handleCreateUser,
    setIsRegistered,
    isCreatingAccount,
    isCreated,
  } = useDataContext();

  useEffect(() => {
    // Header style
    handleHeaderStyle([
      { key: "showSelectLang", value: false },
      {
        key: "className",
        value: "border-b border-neutral-200 px-4 py-1 sm:py-6 w-full",
      },
      { key: "logoClassName", value: "w-20 sm:w-40" },
      { key: "showBtn", value: true },
      { key: "transparentBtn", value: true },
    ]);

    handleChangeBg(true);
    isCreatingAccount && user!.registerStep && setFormStep(user!.registerStep);
  }, [handleChangeBg]);

  const [formStep, setFormStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
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
      { key: "registerStep", value: 2 },
    ]);
    handleCreateAccount(true);
    handleFormStep(2);
  };

  const handlePlanChoiceSubmit = (selectedPlan: number) => {
    handleCreateUser([{ key: "registerStep", value: 4 }]);
    handleCreateUser([{ key: "authorization", value: false }]);
    handleCreateUser([{ key: "plan", value: selectedPlan }]);
  };

  const endRegister = async (): Promise<boolean> => {
    return new Promise<boolean>((resolve) => {
      setTimeout(() => {
        handleCreateUser([{ key: "authorization", value: true }]);
        handleCreateUser([{ key: "registered", value: true }]);
        handleCreateAccount(false);
        setIsRegistered(true);
        resolve(true);
      }, 1500);
    });
  };

  const handleSubmitPayment = async (): Promise<boolean> => {
    setIsLoading(true);
    const submit = await endRegister();
    setIsLoading(false);
    return submit;
  };

  return (
    <>
      {isConnected && !isCreatingAccount ? (
        <Navigate to="/" />
      ) : (
        <div className="transition-all w-screen flex flex-col min-h-screen pt-20 sm:pt-32">
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
            {user!.email.length > 5 &&
              user!.password.length >= 8 &&
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
                handleSubmit={handlePlanChoiceSubmit}
              />
            )}
            {formStep == 4 && (
              <PaymentChoice
                data={data.signup.paymentStep}
                steps={data.signup.stepWord}
                maxStep={data.signup.maxStep}
                handleSubmitPayment={handleSubmitPayment}
                isLoading={isLoading}
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
      )}
    </>
  );
};

export default Signup;
