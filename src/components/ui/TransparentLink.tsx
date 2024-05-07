import { Link } from "react-router-dom";

const TransparentLink = (props: {
  text: string;
  className?: string;
  link: string;
}) => {
  return (
    <Link
      to={props.link}
      className={`btn-default btn-transparent ring-default text-xl font-semibold text-neutral-800 ${props.className}`}
    >
      {props.text}
    </Link>
  );
};

export default TransparentLink;
