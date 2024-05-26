import { useEffect, useState } from "react";
import { useDataContext } from "../layouts/RootLayout";
import { useLocale } from "../hooks/useLocale";
import { SetUpLocaleType } from "../types/useLocaleTypes/ImportedLocaleTypes";
import { Navigate } from "react-router-dom";

const Setup = () => {
  useEffect(() => {
    setWhiteTheme(true);
  }, []);

  const { user, lang, setWhiteTheme } = useDataContext();
  const { content, isLoading }: SetUpLocaleType = useLocale("Setup", lang);
  const [setupStep, setSetupStep] = useState(user!.setupStep);

  const handleSetupStep = (value: number) => {
    setSetupStep(value);
  };

  return (
    <>
      {isLoading ? (
        <></>
      ) : (
        <div className="transition-all w-screen flex flex-col min-h-screen pt-20 sm:pt-32">
          <div className="text-black mb-32 px-6 lg:px-8 flex-grow">
            {setupStep == 1 && <div>setupStep 0</div>}
            {setupStep == 2 && <div>setupStep 0</div>}
            {setupStep == 3 && <div>setupStep 0</div>}
            {setupStep == 4 && <div>setupStep 0</div>}
            {setupStep == 5 && <div>setupStep 0</div>}
            {setupStep == 6 && <div>setupStep 0</div>}
            {setupStep == 7 && <div>setupStep 0</div>}
            {setupStep == 8 && <div>setupStep 0</div>}
            {setupStep == 9 && <Navigate to="/" />}
          </div>
        </div>
      )}
    </>
  );
};
export default Setup;
