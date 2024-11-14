import { MdArrowBackIosNew } from "react-icons/md";

const CarouselButtons = (props: {
  isActivated: boolean;
  handleButtons: (signal: string) => void;
}) => {
  return (
    <>
      <button
        className={`carousel-btn rounded-tl-md rounded-bl-md left-0 group ${
          props.isActivated ? "block bg-black/50 hover:bg-black/90" : ""
        }`}
        onClick={() => props.handleButtons("PREV")}
      >
        <MdArrowBackIosNew className="text-white size-8 transition-all p-1 group-hover:p-0" />
      </button>
      <button
        className="carousel-btn rounded-tr-md rounded-br-md block right-0 text-transparent bg-black/50 hover:bg-black/90 group"
        onClick={() => props.handleButtons("NEXT")}
      >
        <MdArrowBackIosNew className="rotate-180 text-white size-8 transition-all p-1 group-hover:p-0" />
      </button>
    </>
  );
};

export default CarouselButtons;
