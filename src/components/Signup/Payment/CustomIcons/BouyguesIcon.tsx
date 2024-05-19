import { ReactElement } from "react";

const BouyguesIcon = (props: { className: string }): ReactElement => {
  return (
    <svg
      className={props.className}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse
        className="fill-blue-700"
        style={{ strokeLinecap: "round", strokeLinejoin: "round" }}
        cx="12.9703"
        cy="29.193"
        rx="5.7863"
        ry="12.4521"
        transform="translate(-14.1425 12.3006) rotate(-34.12)"
      />
      <ellipse
        className="fill-orange-500"
        style={{ strokeLinecap: "round", strokeLinejoin: "round" }}
        cx="35.0297"
        cy="29.4846"
        rx="12.452"
        ry="5.7863"
        transform="translate(-9.0288 41.9455) rotate(-55.8798)"
      />
      <ellipse
        className="fill-sky-500"
        style={{ strokeLinecap: "round", strokeLinejoin: "round" }}
        cx="23.8537"
        cy="13.4916"
        rx="12.4521"
        ry="5.7863"
        transform="translate(-0.0617 0.1096) rotate(-0.263)"
      />
    </svg>
  );
};

export default BouyguesIcon;
