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
  let selectLang = false;
  if (props.selectLang == undefined || props.selectLang == true) {
    selectLang = true;
  }

  let showButton = false;
  if (props.showButton == undefined || props.showButton == true) {
    showButton = true;
  }

  let link = "/";
  if (props.link != undefined) {
    link = props.link;
  }

  let logoClassname = "logo-default";
  if (props.logoClassname != undefined) {
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
