import { Link } from "react-router-dom";
import DefaultLink from "../ui/DefaultLink";
import Logo from "../ui/Logo";
import SelectLang from "../ui/SelectLang";
import TransparentLink from "../ui/TransparentLink";
import { useDataContext } from "../../layouts/RootLayout";
import DefaultButton from "../ui/DefaultButton";
import { Header as HeaderType } from "../../types/data";
import TransparentButton from "../ui/TransparentButton";

const Header = (props: {
  content: HeaderType;
  selectLang?: boolean;
  showButton?: boolean;
  transparentButton?: boolean;
  link?: string;
  className?: string;
  logoClassname?: string;
}) => {
  const { isConnected, handleDisconnect } = useDataContext();
  // useEffect(() => {
  //   const test = import(`./locales/${lang}.json`).then((response) =>
  //     setContent(response)
  //   );
  // }, [lang]);
  // const test = useLocale("Header", lang);
  // console.log(test);

  // const [content, setContent] = useState();
  // console.log(content);

  // const test = useLocale("./locales/en.json", "en");
  // console.log(test);
  // const test = useLocation().pathname;

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
        className={`flex flex-wrap items-center relative m-auto justify-between gap-2 bg-white/0 max-w-[1600px] ${
          props.className ? props.className : ""
        }`}
      >
        <Link to="/">
          <Logo className={`${logoClassname}`} />
        </Link>
        <div className="flex items-center gap-2">
          {selectLang && <SelectLang />}
          {props.transparentButton ? (
            isConnected ? (
              <TransparentButton
                onClick={handleDisconnect}
                text={props.content.disconnect}
                className="py-1 px-4 text-base"
              />
            ) : (
              <TransparentLink
                link={link}
                text={props.content.button}
                className="py-1 px-4 text-base"
              />
            )
          ) : showButton && isConnected ? (
            <DefaultButton
              primary={true}
              className="ring-default py-1 px-4 text-base"
              text={props.content.disconnect}
              onClick={handleDisconnect}
            />
          ) : (
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
