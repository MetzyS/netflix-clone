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
  // const answer = JSON.stringify(props.data.answer).replace(/\\n/g, "\n");
  const answer = props.data.answer.replace(/\\n/g, "\n");
  // console.log(props.data);
  return (
    <div className="flex flex-col items-center px-6 mb-2">
      <button
        type="button"
        className="bg-neutral-800 hover:bg-neutral-700 px-6 py-5 w-full max-w-[1024px] text-lg flex text-left items-center gap-2 justify-between"
        onClick={handleHidden}
      >
        <span className="flex flex-wrap">{props.data.question}</span>
        <span>
          {isHidden ? (
            <IoAdd className="size-8" />
          ) : (
            <IoAdd className="size-8 rotate-45" />
          )}
        </span>
      </button>
      <div className={isHidden ? "faq-answer hidden" : "faq-answer block"}>
        <p className="whitespace-pre-line">{answer}</p>
      </div>
    </div>
  );
};
export default Faq;
