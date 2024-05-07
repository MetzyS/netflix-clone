import Header from "../components/Header/Header";
import { useDataContext } from "../layouts/RootLayout";

const Signup = () => {
  const { data } = useDataContext();
  return (
    <>
      <Header content={data.header} selectLang={false} />
    </>
  );
};

export default Signup;
