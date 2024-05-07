import Herocard from "../components/Herocard/Herocard";
import { useDataContext } from "../layouts/RootLayout";
const Root = () => {
  const { lang, data } = useDataContext();
  return (
    <>
      <Herocard lang={lang} content={data} />
    </>
  );
};

export default Root;
