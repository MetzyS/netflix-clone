import { useEffect, useState } from "react";
import { useDataContext } from "../layouts/RootLayout";
import { useLocale } from "../hooks/useLocale";
import { SetUpLocaleType } from "../types/useLocaleTypes/ImportedLocaleTypes";
import { Navigate } from "react-router-dom";
import PasswordRecovery from "../components/Setup/PasswordRecovery/PasswordRecovery";
import Footer from "../components/Footer/Footer";
import SetupDeviceSelection from "../components/Setup/SetupDeviceSelection/SetupDeviceSelection";
import SetupProfilesNames from "../components/Setup/SetupProfilesNames/SetupProfilesNames";

const Setup = () => {
  useEffect(() => {
    setWhiteTheme(true);
  }, []);

  const { user, lang, setWhiteTheme, handleCreateUser } = useDataContext();
  const { content, isLoading }: SetUpLocaleType = useLocale("Setup", lang);
  const [setupStep, setSetupStep] = useState(user!.setupStep);

  const handleSetupStep = (value: number) => {
    setSetupStep(value);
  };

  const handleSavePasswordRecovery = (value: string) => {
    handleCreateUser([
      { key: "number", value: value },
      { key: "setupStep", value: 2 },
    ]);
    setSetupStep(2);
  };

  const handleBackStep = (value: number) => {
    handleCreateUser([{ key: "setupStep", value: value }]);
    setSetupStep(value);
  };

  return (
    <>
      {user!.registered ? (
        <>
          {isLoading ? (
            <></>
          ) : (
            <div className="transition-all w-screen flex flex-col min-h-screen pt-20 sm:pt-32">
              <div className="text-black mb-32 px-6 lg:px-8 flex-grow">
                {setupStep == 1 && (
                  <PasswordRecovery
                    content={content.passwordRecovery}
                    email={user!.email}
                    userNumber={user!.number}
                    handleSavePasswordRecovery={handleSavePasswordRecovery}
                  />
                )}
                {setupStep == 2 && (
                  <SetupDeviceSelection
                    backButtonFunc={() => handleBackStep(1)}
                    content={content.deviceSelection}
                    submitFunc={() => handleSetupStep(3)}
                  />
                )}
                {setupStep == 3 && (
                  <SetupProfilesNames
                    backButtonFunc={() => handleBackStep(2)}
                    content={content.profileConfiguration}
                    submitFunc={() => handleSetupStep(4)}
                    userName={user!.username}
                    infoBoxContent={content.infoBox}
                  />
                )}
                {setupStep == 4 && <div>setupStep 3/6</div>}
                {setupStep == 5 && <div>setupStep 4/6</div>}
                {setupStep == 6 && <div>setupStep 5/6</div>}
                {setupStep == 7 && <div>setupStep 6/6</div>}
                {setupStep == 8 && <div>setupStep 8</div>}
                {setupStep == 9 && <Navigate to="/" />}
              </div>
              <Footer
                selectBg="bg-white"
                selectTextColor="text-neutral-600"
                className="bg-[#f3f3f3] border-t border-t-black/10"
                textColor="text-black"
                selectBorderColor="border-black/30"
                showLangText={true}
              />
            </div>
          )}
        </>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};
export default Setup;
