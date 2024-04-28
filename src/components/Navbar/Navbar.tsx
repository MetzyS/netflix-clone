import DefaultLink from "../ui/DefaultLink";
import Logo from "../ui/Logo";
import SelectLang from "../ui/SelectLang";

const Navbar = () => {
  return (
    <nav className="flex flex-wrap gap-4 justify-between items-center">
      <Logo className="w-32 lg:w-44" />
      <div className="flex items-center gap-4">
        <SelectLang />
        <DefaultLink text="S'identifier" />
      </div>
    </nav>
  );
};

export default Navbar;
