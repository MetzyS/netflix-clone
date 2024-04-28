import DefaultLink from "../ui/DefaultLink";
import Logo from "../ui/Logo";
import SelectLang from "../ui/SelectLang";

const Header = (props: {
  lang: string;
  handleChangeLang: (value: string) => void;
}) => {
  return (
    <>
      <header className="flex flex-wrap gap-2 justify-between items-center relative py-6 z-10">
        <Logo className="w-24 lg:w-40" />
        <div className="flex justify-center items-center gap-2">
          <SelectLang
            lang={props.lang}
            handleChangeLang={props.handleChangeLang}
          />
          <DefaultLink text="S'identifier" />
        </div>
      </header>
    </>
  );
};

export default Header;
