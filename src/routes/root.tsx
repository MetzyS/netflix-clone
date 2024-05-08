import Herocard from "../components/Herocard/Herocard";
import { useDataContext } from "../layouts/RootLayout";
const Root = () => {
  const { lang, data, handleChangeBg, handleUserEmail } = useDataContext();
  return (
    <>
      <Herocard
        lang={lang}
        content={data}
        handleChangeBg={handleChangeBg}
        onChangeForm={handleUserEmail}
      />
    </>
  );
};

export default Root;
