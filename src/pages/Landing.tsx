import Herocard from "../components/Herocard/Herocard";
import HeroDataType from "../data/HeroDataType";

const Landing = (props: {
  lang: string;
  data: HeroDataType;
  handleChangeLang: (value: string) => void;
}) => {
  return (
    <>
      <Herocard
        handleChangeLang={props.handleChangeLang}
        lang={props.lang}
        content={props.data}
      />
    </>
  );
};

export default Landing;
