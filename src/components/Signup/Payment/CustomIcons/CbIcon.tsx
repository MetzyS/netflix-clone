import { ReactElement } from "react";

const CbIcon = (props: { className: string }): ReactElement => {
  return (
    <>
      <svg
        className={props.className}
        viewBox="0 -9 58 58"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.5"
          y="0.5"
          width="57"
          height="39"
          rx="2.5"
          fill="url(#paint0_linear_545_4267)"
          stroke="#F1F1F1"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21.825 19.4075H29.6782C29.6082 17.71 29.2127 15.9599 28.0131 14.8358C26.5842 13.4967 24.0813 13 21.8449 13C19.5172 13 16.943 13.5448 15.5065 14.9815C14.2678 16.2192 14 18.2105 14 19.9996C14 21.8737 14.5239 24.0536 15.8677 25.3093C17.2966 26.6453 19.612 27 21.8449 27C24.0141 27 26.3638 26.5995 27.7844 25.3311C29.201 24.0641 29.6906 21.9301 29.6906 19.9996V19.9906H21.825V19.4075ZM30.2053 19.9909V26.687H41.1298V26.6779C42.7283 26.5908 44 25.1495 44 23.3799C44 21.6095 42.7283 20.0758 41.1298 19.9879V19.9909H30.2053ZM41.0054 13.2804C42.5634 13.2804 43.8 14.6322 43.8 16.338C43.8 17.9528 42.6643 19.2716 41.2196 19.4076H30.2051V13.2706H40.6607C40.725 13.2627 40.8 13.2683 40.8733 13.2737C40.919 13.277 40.964 13.2804 41.0054 13.2804Z"
          fill="#FEFEFE"
        />
        <defs>
          <linearGradient
            id="paint0_linear_545_4267"
            x1="15.7319"
            y1="-5.06532"
            x2="1.63672"
            y2="38.2044"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#222E72" />
            <stop offset="0.591647" stopColor="#40CBFF" />
            <stop offset="1" stopColor="#3CB792" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};

export default CbIcon;
