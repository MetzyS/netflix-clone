import DefaultLink from "../ui/DefaultLink";
import Logo from "../ui/Logo";
import SelectLang from "../ui/SelectLang";

const Header = (props: {
  lang: string;
  handleChangeLang: (value: string) => void;
}) => {
  return (
    <header className="flex flex-wrap gap-4 justify-between items-center">
      <Logo className="w-32 lg:w-44" />
      <div className="flex items-center gap-4">
        <SelectLang
          lang={props.lang}
          handleChangeLang={props.handleChangeLang}
        />
        <DefaultLink text="S'identifier" />
      </div>
    </header>
  );
};

export default Header;
