import { Link } from "react-router-dom";

const DefaultLink = (props: { text: string; className?: string }) => {
  return (
    <Link
      to="login"
      className={`btn-default btn-primary ring-default ${props.className}`}
    >
      {props.text}
    </Link>
  );
};

export default DefaultLink;
