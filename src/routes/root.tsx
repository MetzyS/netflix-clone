import Herocard from "../components/Herocard/Herocard";
import { useDataContext } from "../layouts/RootLayout";
const Root = () => {
  const { lang, data, handleChangeBg } = useDataContext();
  return (
    <>
      <Herocard lang={lang} content={data} handleChangeBg={handleChangeBg} />
    </>
  );
};

export default Root;
