import SelectLang from "../ui/SelectLang";

const Footer = (props: {
  text: string;
  lang: string;
  data: Record<string, { title: string; link: string }>;
  handleChangeLang: (value: string) => void;
}) => {
  return (
    <footer className="p-6">
      <a
        href="mailto:contact@metzys.net"
        className="text-left underline text-neutral-400"
      >
        {props.text}
      </a>
      <ul className="grid grid-rows-10 grid-cols-2 mt-6 text-sm">
        {Object.values(props.data).map((item, index) => (
          <li
            key={"footer-item-" + index}
            className="flex items-center flex-wrap p-0 mt-4"
          >
            <a
              href={item.link}
              className="hover:text-neutral-200 text-neutral-400 underline "
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
      <div className="w-32 my-6">
        <SelectLang
          handleChangeLang={props.handleChangeLang}
          showText={true}
          lang={props.lang}
        />
      </div>
    </footer>
  );
};
export default Footer;
