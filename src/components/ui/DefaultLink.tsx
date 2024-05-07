import { Link } from "react-router-dom";

const DefaultLink = (props: {
  text: string;
  className?: string;
  link: string;
}) => {
  return (
    <Link
      to={props.link}
      className={`btn-default btn-primary ring-default ${props.className}`}
    >
      {props.text}
    </Link>
  );
};

export default DefaultLink;
