import DefaultLink from "../ui/DefaultLink";
import Logo from "../ui/Logo";
import SelectLang from "../ui/SelectLang";

const Header = (props: {
  lang: string;
  handleChangeLang: (value: string) => void;
}) => {
  return (
    <>
      <header className="flex flex-col gap-2 relative p-8">
        <Logo className="w-28 lg:w-40" />
        <div className="flex items-center gap-2">
          <SelectLang
            lang={props.lang}
            handleChangeLang={props.handleChangeLang}
          />
          <DefaultLink text="S'identifier" className="py-2 px-6 text-xl" />
        </div>
      </header>
    </>
  );
};

export default Header;
