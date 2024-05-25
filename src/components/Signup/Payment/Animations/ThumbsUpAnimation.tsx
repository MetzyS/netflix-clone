import { TiThumbsUp } from "react-icons/ti";
import "./animation.css";

const ThumbsUpAnimation = (props: { className: string }) => {
  return (
    <div className="size-20 rounded-full bg-white pop-animation">
      <div className="size-20 rounded-full border-red-500 pop-animation pop-border-animation flex items-center justify-center">
        <TiThumbsUp className="animation-bounce text-red-600 size-14" />
      </div>
    </div>
  );
};

export default ThumbsUpAnimation;
