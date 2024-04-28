const DefaultLink = (props: { text: string; className?: string }) => {
  return (
    <a href="" className={`btn-default ring-default ${props.className}`}>
      {props.text}
    </a>
  );
};

export default DefaultLink;
