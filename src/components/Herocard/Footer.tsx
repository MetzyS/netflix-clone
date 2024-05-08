import SelectLang from "../ui/SelectLang";

const Footer = (props: {
  text: string;
  data: Record<string, { title: string; link: string }>;
  selectBg?: string;
  selectTextColor?: string;
  className?: string;
  textColor?: string;
  selectBorderColor?: string;
  underline?: boolean;
  showLangText?: boolean;
}) => {
  return (
    <footer className={`p-6 ${props.className ? props.className : undefined}`}>
      <a
        href="mailto:contact@metzys.net"
        className={`text-left ${
          props.textColor ? props.textColor : "text-secondary"
        } hover:underline`}
      >
        {props.text}
      </a>
      <ul className="grid grid-cols-2 mt-6 text-sm">
        {Object.values(props.data).map((item, index) => (
          <li
            key={"footer-item-" + index}
            className="flex items-center flex-wrap p-0 mt-4"
          >
            <a
              href={item.link}
              className={`${
                props.textColor
                  ? props.textColor
                  : "hover:text-neutral-200 text-secondary"
              } ${props.underline ? "underline" : "hover:underline"} `}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
      <div className="w-32 my-6">
        <SelectLang
          bg={props.selectBg ? props.selectBg : undefined}
          selectTextColor={
            props.selectTextColor ? props.selectTextColor : undefined
          }
          borderColor={
            props.selectBorderColor ? props.selectBorderColor : undefined
          }
          showText={props.showLangText ? props.showLangText : undefined}
        />
      </div>
    </footer>
  );
};
export default Footer;
