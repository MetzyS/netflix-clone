import Herocard from "../components/Herocard/Herocard";

const Landingpage = (props: {
  lang: string;
  handleChangeLang: (value: string) => void;
}) => {
  return (
    <>
      <Herocard handleChangeLang={props.handleChangeLang} lang={props.lang} />
    </>
  );
};

export default Landingpage;
