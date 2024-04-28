const DefaultLink = (props: { text: string; className?: string }) => {
  return (
    <a
      href=""
      className={`bg-red-600 text-white font-semibold px-4 py-2 rounded-md hover:bg-red-700 ring-default ${props.className}`}
    >
      {props.text}
    </a>
  );
};

export default DefaultLink;
