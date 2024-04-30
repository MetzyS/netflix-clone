import DefaultLink from "../ui/DefaultLink";
import Logo from "../ui/Logo";
import SelectLang from "../ui/SelectLang";

const Header = (props: {
  lang: string;
  handleChangeLang: (value: string) => void;
}) => {
  return (
    <>
      <header className="flex flex-wrap items-center relative p-6 justify-between gap-2">
        <Logo className="w-[88px] lg:w-40" />
        <div className="flex items-center gap-2">
          <SelectLang
            lang={props.lang}
            handleChangeLang={props.handleChangeLang}
          />
          <DefaultLink text="S'identifier" className="py-1 px-4 text-base" />
        </div>
      </header>
    </>
  );
};

export default Header;
