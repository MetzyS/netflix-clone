import { useEffect, useState } from "react";
import { useDataContext } from "../layouts/RootLayout";
import { useLocale } from "../hooks/useLocale";
import { SetUpLocaleType } from "../types/useLocaleTypes/ImportedLocaleTypes";

const Setup = () => {
  const { lang, setWhiteTheme } = useDataContext();
  const { content, isLoading }: SetUpLocaleType = useLocale("Setup", lang);
  const [setupStep, setSetupStep] = useState(0);
  // console.log(content);
  useEffect(() => {
    setWhiteTheme(true);
  }, []);
  return (
    <>
      {isLoading ? (
        <></>
      ) : (
        <div className="transition-all w-screen flex flex-col min-h-screen pt-20 sm:pt-32">
          <div className="text-black mb-32 px-6 lg:px-8 flex-grow"></div>
        </div>
      )}
    </>
  );
};
export default Setup;
