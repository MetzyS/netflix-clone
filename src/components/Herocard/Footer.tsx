import SelectLang from "../ui/SelectLang";

const Footer = (props: {
  text: string;
  data: Record<string, { title: string; link: string }>;
}) => {
  return (
    <footer className="p-6">
      <a
        href="mailto:contact@metzys.net"
        className="text-left text-secondary hover:underline"
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
              className="hover:text-neutral-200 text-secondary underline "
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
      <div className="w-32 my-6">
        <SelectLang />
      </div>
    </footer>
  );
};
export default Footer;
