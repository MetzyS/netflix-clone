import DefaultLink from "../ui/DefaultLink";
import Logo from "../ui/Logo";
import SelectLang from "../ui/SelectLang";

const Header = (props: {
  content: {
    button: string;
  };
}) => {
  return (
    <>
      <header className="flex flex-wrap items-center relative p-6 justify-between gap-2 bg-white/0">
        <Logo className="w-24 lg:w-40" />
        <div className="flex items-center gap-2">
          <SelectLang />
          <DefaultLink
            text={props.content.button}
            className="py-1 px-4 text-base"
          />
        </div>
      </header>
    </>
  );
};

export default Header;
