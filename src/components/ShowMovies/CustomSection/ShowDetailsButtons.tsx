import { IconType } from "react-icons";

const ShowDetailsButtons = (props: {
  playButtonText: string;
  iconPlay: IconType;
  iconCheck: IconType;
  iconThumbsUp: IconType;
}) => {
  return (
    <div className="flex gap-2 mt-6">
      <button
        type="button"
        className="px-4 lg:px-6 py-2 bg-neutral-200 hover:bg-neutral-400 text-sm lg:text-lg text-black rounded-md flex gap-2 items-center"
      >
        <props.iconPlay className="size-5 lg:size-8" />
        {props.playButtonText}
      </button>
      <button
        type="button"
        className="p-3 h-fit rounded-full bg-black/30 border border-neutral-400 text-white hover:text-white hover:border-white"
      >
        <props.iconCheck />
      </button>
      <div className="group/likeBtn flex gap-2">
        <button
          type="button"
          className="p-3 h-fit rounded-full bg-black/30 border border-neutral-400 text-neutral-400 hover:text-neutral-200 hover:border-neutral-200"
        >
          <props.iconThumbsUp />
        </button>
        <button
          type="button"
          className="p-3 h-fit rounded-full bg-black/30 border border-neutral-400 text-neutral-400 hover:text-neutral-200 hover:border-neutral-200 hidden group-hover/likeBtn:block"
        >
          <props.iconThumbsUp className="rotate-180" />
        </button>
      </div>
    </div>
  );
};

export default ShowDetailsButtons;
