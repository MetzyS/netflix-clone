import { Link } from "react-router-dom";
import DefaultLink from "../ui/DefaultLink";
import Logo from "../ui/Logo";
import SelectLang from "../ui/SelectLang";

const Header = (props: {
  content: {
    button: string;
  };
  selectLang?: boolean;
  showButton?: boolean;
  link?: string;
}) => {
  let selectLang;
  if (props.selectLang == undefined || props.selectLang == true) {
    selectLang = true;
  } else {
    selectLang = false;
  }

  let showButton;
  if (props.showButton == undefined || props.showButton == true) {
    showButton = true;
  } else {
    showButton = false;
  }

  let link;
  if (props.link == undefined || props.link == "") {
    link = "/";
  } else {
    link = props.link;
  }
  return (
    <>
      <header className="flex flex-wrap items-center relative p-6 justify-between gap-2 bg-white/0">
        <Link to="/">
          <Logo className="w-24 lg:w-40 py-1" />
        </Link>
        <div className="flex items-center gap-2">
          {selectLang && <SelectLang />}
          {showButton && (
            <DefaultLink
              link={link}
              text={props.content.button}
              className="py-1 px-4 text-base"
            />
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
