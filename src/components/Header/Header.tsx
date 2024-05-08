import { Link } from "react-router-dom";
import DefaultLink from "../ui/DefaultLink";
import Logo from "../ui/Logo";
import SelectLang from "../ui/SelectLang";
import TransparentLink from "../ui/TransparentLink";

const Header = (props: {
  content: {
    button: string;
  };
  selectLang?: boolean;
  showButton?: boolean;
  transparentButton?: boolean;
  link?: string;
  className?: string;
  logoClassname?: string;
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

  let logoClassname;
  if (props.logoClassname == undefined || props.logoClassname == "") {
    logoClassname = "logo-default";
  } else {
    logoClassname = props.logoClassname;
  }
  return (
    <>
      <header
        className={`flex flex-wrap items-center relative justify-between gap-2 bg-white/0 ${
          props.className ? props.className : ""
        }`}
      >
        <Link to="/">
          <Logo className={`${logoClassname}`} />
        </Link>
        <div className="flex items-center gap-2">
          {selectLang && <SelectLang />}
          {props.transparentButton && (
            <TransparentLink
              link={link}
              text={props.content.button}
              className="py-1 px-4 text-base"
            />
          )}
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
