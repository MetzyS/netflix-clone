import Header from "../components/Header/Header";
import Herocard from "../components/Herocard/Herocard";

const Landingpage = (props: {
  lang: string;
  handleChangeLang: (value: string) => void;
}) => {
  return (
    <>
      <Header lang={props.lang} handleChangeLang={props.handleChangeLang} />
      <Herocard lang={props.lang} />
    </>
  );
};

export default Landingpage;
