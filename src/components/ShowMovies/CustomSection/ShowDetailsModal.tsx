import { useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { ResultType } from "../../../types/data";
import { FaCheck, FaPlay } from "react-icons/fa6";
import { BsHandThumbsUp } from "react-icons/bs";
import { BsHandThumbsUpFill } from "react-icons/bs";
import useFetchShowDetails from "../../../hooks/useFetchShowDetails";

const ShowDetailsModal = (props: {
  closeModalFunction: (e: KeyboardEvent) => void;
  btnClose: () => void;
  backdropImage: string;
  show: ResultType;
  content: {
    title: string;
    explore: string;
    playButton: string;
    recommended: string;
    seasons: string;
  };
}) => {
  const { data, dataIsLoading } = useFetchShowDetails(props.show.id);
  if (!dataIsLoading) {
    console.log(data);
  }

  useEffect(() => {
    console.log(data);
  }, [dataIsLoading]);

  useEffect(() => {
    document.addEventListener("keydown", props.closeModalFunction);
    return () => {
      document.removeEventListener("keydown", props.closeModalFunction);
    };
  }, []);
  return (
    <div className="fixed transition-all h-[100vh] lg:h-[95vh] w-full xl:w-3/4 top-0 lg:top-[2vh] lg:left-[50%] lg:-translate-x-[50%] bg-neutral-900 z-30 mx-auto rounded-md overflow-y-scroll modal-scrollbar">
      {/* backdrop */}
      <div>
        <button
          className="absolute right-5 top-5 z-30"
          onClick={props.btnClose}
        >
          <IoClose className="size-8 rounded-full bg-neutral-800 p-1" />
        </button>
        <div className="w-full h-full relative">
          <img
            src={`https://image.tmdb.org/t/p/original/${props.backdropImage}`}
            alt=""
            className="rounded-l-md bg-faded aspect-video"
          />
          <div className="absolute top-[40%] lg:top-[50%] left-[5%]">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
              {props.show.name ? props.show.name : props.show.original_title}
            </h1>
            <div className="flex gap-2 mt-6">
              <button
                type="button"
                className="px-4 lg:px-6 py-2 bg-neutral-200 hover:bg-neutral-400 text-sm lg:text-lg text-black font-semibold rounded-md flex gap-2 items-center"
              >
                <FaPlay className="size-5 lg:size-8" />
                {props.content.playButton}
              </button>
              <button
                type="button"
                className="p-3 h-fit rounded-full bg-black/30 border border-neutral-400 text-neutral-400 hover:text-neutral-200 hover:border-neutral-200"
              >
                <FaCheck />
              </button>
              <div className="group/likeBtn flex gap-2">
                <button
                  type="button"
                  className="p-3 h-fit rounded-full bg-black/30 border border-neutral-400 text-neutral-400 hover:text-neutral-200 hover:border-neutral-200"
                >
                  <BsHandThumbsUp />
                </button>
                <button
                  type="button"
                  className="p-3 h-fit rounded-full bg-black/30 border border-neutral-400 text-neutral-400 hover:text-neutral-200 hover:border-neutral-200 hidden group-hover/likeBtn:block"
                >
                  <BsHandThumbsUp className="rotate-180" />
                </button>
              </div>
            </div>
            {dataIsLoading
              ? ""
              : data && (
                  <>
                    <div className="mt-20">
                      <div>
                        <p className="flex gap-2 flex-wrap text-neutral-400 font-semibold">
                          <span className="text-green-500">
                            {`${props.content.recommended} ${(
                              props.show.vote_average * 10
                            ).toFixed(0)} %`}
                          </span>
                          <span>{data.first_air_date.substring(0, 4)}</span>
                          <span>
                            {`${data.seasons.length} ${props.content.seasons}`}{" "}
                          </span>
                          <span className="px-2 border text-xs rounded-md">
                            HD
                          </span>
                        </p>
                        <ul className="flex gap-2 text-neutral-300 font-semibold">
                          {data.genres.map((genre, index) => (
                            <li key={`genre-${index}`}>
                              {genre.name.toLowerCase()}
                            </li>
                          ))}
                        </ul>
                        <p className="mt-4 text-sm">{data.overview}</p>
                      </div>
                    </div>
                  </>
                )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowDetailsModal;
