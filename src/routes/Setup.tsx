import { useEffect } from "react";
import { useDataContext } from "../layouts/RootLayout";

const Setup = () => {
  const { setWhiteTheme } = useDataContext();

  useEffect(() => {
    setWhiteTheme(true);
  }, []);
  return <div></div>;
};
export default Setup;
