import Header from "../components/Header/Header";
import { useDataContext } from "../layouts/RootLayout";

const Signup = () => {
  const { data } = useDataContext();
  return (
    <>
      <Header
        content={data.header}
        selectLang={false}
        className="border-b border-neutral-400"
      />
    </>
  );
};

export default Signup;
