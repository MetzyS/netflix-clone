import { useState } from "react";
import { IoAdd } from "react-icons/io5";

const Faq = (props: {
  data: {
    id: string;
    question: string;
    answer: string;
  };
}) => {
  const [isHidden, setIsHidden] = useState(true);
  const handleHidden = () => {
    setIsHidden(!isHidden);
  };
  // console.log(props.data);
  return (
    <div className="flex flex-col items-center px-6 mb-2">
      <button
        type="button"
        className="bg-neutral-800 px-6 py-5 w-full max-w-[1024px] text-lg flex text-left items-center gap-2"
        onClick={handleHidden}
      >
        {props.data.question}
        <IoAdd className="size-11" />
      </button>
      <div
        className={
          isHidden
            ? "w-full max-w-[1024px] bg-neutral-800 px-6 py-5 text-lg border-t border-black hidden"
            : "w-full max-w-[1024px] bg-neutral-800 px-6 py-5 text-lg border-t border-black block"
        }
      >
        <p>{props.data.answer}</p>
      </div>
    </div>
  );
};
export default Faq;
