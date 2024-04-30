import Herocard from "../components/Herocard/Herocard";

const Landingpage = (props: {
  lang: string;
  data: {};
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

export default Landingpage;
