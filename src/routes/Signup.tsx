import { useDataContext } from "../layouts/RootLayout";
import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import FirstStepForm from "../components/Signup/FirstStepForm";
import SignupForm from "../components/Signup/SignupForm";
import FirstStepPlanDesc from "../components/Signup/FirstStep/FirstStepPlanDesc";
import FirstStepPlanChoice from "../components/Signup/FirstStep/FirstStepPlanChoice";
import { UserType } from "../types/user";

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
  useEffect(() => {
    handleChangeBg(true);
    let parsedUser: UserType;
    let registerStep: number | undefined | null;
    if (isCreatingAccount) {
      let user: string | UserType | null = localStorage.getItem("user");
      if (user) {
        parsedUser = JSON.parse(user);
        if (parsedUser.registerStep) {
          registerStep = parsedUser.registerStep;
          setFormStep(registerStep);
        }
      }
    }
  }, [handleChangeBg]);
  const [formStep, setFormStep] = useState(0);
  const handleFormStep = (value: number) => {
    setFormStep(value);
  };

  const [userData, setUserData] = useState(() =>
    user
      ? user
      : {
          email: "",
          password: "",
          authorization: 0,
        }
  );
  const handleFormSubmit = (newData: {
    email: string;
    password: string;
    authorization: number;
  }) => {
    setUserData((prevData) => ({ ...prevData, ...newData }));
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
    handleCreateUser([{ key: "authorization", value: selectedPlan }]);
    setUserData((prevData) => ({ ...prevData, authorization: selectedPlan }));
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
                handleSubmit={handlePlanChoiceSubmit}
              />
            )}
            {formStep == 4 && (
              <div>
                <span className="text-black">Form step: {formStep}</span>
                {userData && (
                  <span className="text-black">
                    User: {JSON.stringify(userData)}
                  </span>
                )}
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
      )}
    </>
  );
};

export default Signup;
