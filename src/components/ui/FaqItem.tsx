const FaqButton = (props: {
  index: number;
  item: {
    link: string;
    title: string;
  };
  textColor?: string;
  underline?: boolean;
}) => {
  return (
    <li className="flex items-center flex-wrap p-0 mt-4">
      <a
        href={props.item.link}
        className={`${
          props.textColor
            ? props.textColor
            : "hover:text-neutral-200 text-secondary"
        } ${props.underline ? "underline" : "hover:underline"} `}
      >
        {props.item.title}
      </a>
    </li>
  );
};

export default FaqButton;
