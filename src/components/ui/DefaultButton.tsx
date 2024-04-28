const DefaultButton = (props: { text: string }) => {
  return (
    <button className="bg-red-600 text-white font-semibold px-4 py-2 rounded-md">
      {props.text}
    </button>
  );
};

export default DefaultButton;
