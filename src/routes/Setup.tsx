import { useEffect } from "react";
import { useDataContext } from "../layouts/RootLayout";
import { useLocale } from "../hooks/useLocale";

const Setup = () => {
  const { lang, setWhiteTheme } = useDataContext();
  const { content, isLoading } = useLocale("Setup", lang);
  console.log(content);
  useEffect(() => {
    setWhiteTheme(true);
  }, []);
  return <div></div>;
};
export default Setup;
