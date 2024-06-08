import { useEffect, useState } from "react";
import { ResultType, TopShowBannerType } from "../../../types/data";
import { FaPlay } from "react-icons/fa6";
import { IoIosInformationCircleOutline } from "react-icons/io";

const ShowBackdrop = (props: {
  showData: ResultType;
  content: TopShowBannerType;
}) => {
  const defaultDescSize = "max-h-[100px]";
  const hideSize = "max-h-0";
  const defaultTitleSize = "text-5xl lg:text-7xl";
  const zoomedTitleSize = "text-6xl lg:text-8xl";
  const [descTransition, setDescTransition] = useState(defaultDescSize);
  const [firstTransition, setFirstTransition] = useState(true);
  const [titleTransition, setTitleTransition] = useState(defaultTitleSize);

  const handleTriggerEffect = (values: { desc: string; title: string }) => {
    if (!firstTransition) {
      setDescTransition(values.desc);
      setTitleTransition(values.title);
    }
  };

  useEffect(() => {
    let textTransition = setTimeout(() => {
      setDescTransition(hideSize),
        setTitleTransition(zoomedTitleSize),
        setFirstTransition(false);
    }, 5000);
    return () => clearTimeout(textTransition);
  }, []);

  console.log(props.showData);
  return (
    <>
      <div
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${props.showData.backdrop_path})`,
          maskImage:
            "linear-gradient(to bottom, #000 0%, #000 70% ,rgba(0,0,0,0))",
          backgroundPosition: "top",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="w-full h-screen relative"
      >
        <div className="absolute flex size-full bg-gradient-radial px-4 lg:px-14">
          <div className="self-center w-full grid">
            <div
              onMouseEnter={() =>
                handleTriggerEffect({
                  desc: defaultDescSize,
                  title: defaultTitleSize,
                })
              }
              onMouseLeave={() =>
                handleTriggerEffect({
                  desc: hideSize,
                  title: zoomedTitleSize,
                })
              }
            >
              <p
                className={`${titleTransition} font-bold drop-shadow-default w-5/6 lg:w-3/4 leading-[3rem] text-wrap break-words transition-all duration-700`}
              >
                {props.showData.name}
              </p>
              <p
                className={`text-sm drop-shadow-default mt-6 w-11/12 sm:w-10/12 md:w-1/2 line-clamp-3 text-ellipsis ${descTransition} transition-all duration-500`}
              >
                {props.showData.overview}
              </p>
            </div>
            <div className="mt-6 flex justify-between relative">
              <div className="flex gap-2 lg:gap-4 items-center">
                <button
                  type="button"
                  className="px-4 lg:px-6 py-2 bg-neutral-200 hover:bg-neutral-400 text-sm lg:text-lg text-black font-semibold rounded-md flex gap-2 items-center"
                >
                  <FaPlay className="size-5 lg:size-8" />
                  {props.content.playButton}
                </button>
                <button
                  type="button"
                  className="px-4 lg:px-6 py-2 bg-neutral-600 hover:bg-neutral-700 text-sm lg:text-lg text-neutral-200 font-semibold rounded-md flex gap-2 items-center"
                >
                  <IoIosInformationCircleOutline className="size-5 lg:size-8" />
                  {props.content.infoButton}
                </button>
              </div>
              <div className="absolute -mr-14 top-12 lg:top-0 right-8 lg:right-0 h-full flex items-center">
                <p className="bg-neutral-500/20 border-l-2 pl-4 py-1 pr-8">
                  12+
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ShowBackdrop;
