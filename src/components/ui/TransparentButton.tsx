const TransparentButton = (props: {
  text: string;
  className?: string;
  onClick: () => void;
}) => {
  return (
    <button
      type="button"
      className={`btn-default btn-transparent ring-default font-semibold text-neutral-800 ${props.className}`}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

export default TransparentButton;
