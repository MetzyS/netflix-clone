import { ReactElement, useEffect, useState } from "react";
import { useDataContext } from "../layouts/RootLayout";
import { useLocale } from "../hooks/useLocale";
import { SetUpLocaleType } from "../types/useLocaleTypes/ImportedLocaleTypes";
import { UserProfile } from "../types/user";
import { Navigate } from "react-router-dom";
import PasswordRecovery from "../components/Setup/PasswordRecovery/PasswordRecovery";
import Footer from "../components/Footer/Footer";
import SetupDeviceSelection from "../components/Setup/SetupDeviceSelection/SetupDeviceSelection";
import SetupProfilesNames from "../components/Setup/SetupProfilesNames/SetupProfilesNames";
import SetupProfilesIsAdult from "../components/Setup/SetupProfilesIsAdult/SetupProfilesIsAdult";
import SetupProfileDetails from "../components/Setup/SetupProfileDetails/SetupProfilesDetails";
import { BiUser, BiUserPlus } from "react-icons/bi";
import { PiHouse } from "react-icons/pi";
import { PiEyeglasses } from "react-icons/pi";
import { IoPersonAddOutline } from "react-icons/io5";
import SetupLanguage from "../components/Setup/SetupLanguage/SetupLanguage";
import SetupShowsPreferences from "../components/Setup/SetupShowsPreferences/SetupShowsPreferences";
import SetupProfileHomepage from "../components/Setup/SetupProfileHomepage/SetupProfileHomepage";

const Setup = () => {
  useEffect(() => {
    setWhiteTheme(true);
  }, []);
  const infoBoxIcons: ReactElement[] = [
    <PiHouse className="size-6 text-blue-600" />,
    <IoPersonAddOutline className="size-6 text-blue-600" />,
    <PiEyeglasses className="size-6 text-blue-600" />,
  ];
  const inputIcons: ReactElement[] = [
    <BiUser className="size-8" />,
    <BiUserPlus className="size-8" />,
  ];

  const { user, lang, setWhiteTheme, handleCreateUser } = useDataContext();
  const { content, isLoading }: SetUpLocaleType = useLocale("Setup", lang);
  const [setupStep, setSetupStep] = useState(user!.setupStep);

  const handleSetupStep = (setupStep: number) => {
    handleCreateUser([{ key: "setupStep", value: setupStep }]);
    setSetupStep(setupStep);
  };

  const handleSavePasswordRecovery = (phoneNumber: string) => {
    handleCreateUser([
      { key: "number", value: phoneNumber },
      { key: "setupStep", value: 2 },
    ]);
    handleSetupStep(2);
  };

  const handleBackStep = (step: number) => {
    handleCreateUser([{ key: "setupStep", value: step }]);
    handleSetupStep(step);
  };

  const handleSetupKidsProfiles = (profiles: UserProfile[]) => {
    handleCreateUser([
      { key: "profiles", value: profiles },
      { key: "setupStep", value: 5 },
    ]);
    handleSetupStep(5);
  };

  const handleSetupDetails = (birthDetails: {
    date: string;
    gender: number;
  }) => {
    handleCreateUser([
      { key: "birthDate", value: birthDetails.date },
      { key: "gender", value: birthDetails.gender },
      { key: "setupStep", value: 6 },
    ]);
    handleSetupStep(6);
  };

  const handleSetupLanguage = (languagesId: number[]) => {
    handleCreateUser([
      { key: "preferedLanguages", value: languagesId },
      { key: "setupStep", value: 7 },
    ]);
    handleSetupStep(7);
  };

  const handleSetupLike = (likedShowsId: number[]) => {
    handleCreateUser([
      { key: "likedShows", value: likedShowsId },
      { key: "setupStep", value: 8 },
    ]);
    handleSetupStep(8);
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
                    icons={inputIcons}
                    infoBoxIcons={infoBoxIcons}
                  />
                )}
                {setupStep == 4 && (
                  <SetupProfilesIsAdult
                    backButtonFunc={() => handleBackStep(3)}
                    onSubmit={handleSetupKidsProfiles}
                    content={content.kidsProfile}
                    icons={inputIcons}
                    infoBoxContent={content.infoBox}
                    infoBoxIcons={infoBoxIcons}
                  />
                )}
                {setupStep == 5 && (
                  <SetupProfileDetails
                    backButtonFunc={() => handleBackStep(4)}
                    onSubmit={handleSetupDetails}
                    content={content.profileDetails}
                  />
                )}
                {setupStep == 6 && (
                  <SetupLanguage
                    content={content.languageSelection}
                    backButtonFunc={() => handleBackStep(5)}
                    onSubmit={handleSetupLanguage}
                  />
                )}
                {setupStep == 7 && (
                  <SetupShowsPreferences
                    content={content.likeSelection}
                    backButtonFunc={() => handleBackStep(6)}
                    onSubmit={handleSetupLike}
                  />
                )}
                {setupStep == 8 && (
                  <SetupProfileHomepage content={content.processing} />
                )}
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
