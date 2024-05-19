import { useDataContext } from "../layouts/RootLayout";
import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import FirstStepForm from "../components/Signup/FirstStepForm";
import SignupForm from "../components/Signup/SignupForm";
import FirstStepPlanDesc from "../components/Signup/FirstStep/FirstStepPlanDesc";
import FirstStepPlanChoice from "../components/Signup/FirstStep/FirstStepPlanChoice";
import { UserType } from "../types/user";
import PaymentChoice from "../components/Signup/Payment/PaymentChoice";

const Signup = () => {
  const {
    user,
    data,
    isConnected,
    userEmail,
    handleUserEmail,
    handleChangeBg,
    handleCreateAccount,
    handleCreateUser,
    isCreatingAccount,
    isCreated,
  } = useDataContext();
  let userzzz: string | UserType | null = localStorage.getItem("user");
  console.log("userzz: " + userzzz);
  console.log("user: " + JSON.stringify(user));

  useEffect(() => {
    handleChangeBg(true);
    isCreatingAccount && user!.registerStep && setFormStep(user!.registerStep);
  }, [handleChangeBg]);

  const [formStep, setFormStep] = useState(0);
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
    console.log(newData);
    handleCreateAccount(true);
    handleFormStep(2);
  };

  const handlePlanChoiceSubmit = (selectedPlan: number) => {
    handleCreateUser([{ key: "registerStep", value: 4 }]);
    handleCreateUser([{ key: "authorization", value: false }]);
    handleCreateUser([{ key: "plan", value: selectedPlan }]);
    // console.log(userData);
  };

  const handleSubmitPayment = () => {
    handleCreateUser([{ key: "authorization", value: true }]);
    // setUserData((prevData) => ({ ...prevData, authorization: true }));
  };

  return (
    <>
      {isConnected && !isCreatingAccount ? (
        <div>Connected</div>
      ) : (
        <div className="transition-all w-screen flex flex-col min-h-screen">
          <Header
            content={data.header}
            selectLang={false}
            className="border-b border-neutral-200 px-4 py-1 sm:py-6 w-full"
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
              />
              // <div>
              //   <span className="text-black">Form step: {formStep}</span>
              //   {user && (
              //     <span className="text-black">
              //       User: {JSON.stringify(user)}
              //     </span>
              //   )}
              // </div>
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
