import { useEffect, useMemo, useState } from "react";
import {
  BackdropVideoInfoType,
  ResultType,
  TopShowBannerType,
} from "../../../types/data";
import { FaPlay } from "react-icons/fa6";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { HiVolumeOff } from "react-icons/hi";
import { HiVolumeUp } from "react-icons/hi";
import ReactPlayer from "react-player";

const ShowBackdrop = (props: {
  showData: ResultType;
  content: TopShowBannerType;
  backdropVideoInfos: null | BackdropVideoInfoType;
}) => {
  const backdropVideoKey = useMemo(() => {
    return props.backdropVideoInfos;
  }, [props.backdropVideoInfos]);
  const defaultDescSize = "max-h-[100px]";
  const hideSize = "max-h-0";
  const defaultTitleSize = "text-5xl lg:text-6xl xl:text-6xl";
  const zoomedTitleSize = "text-6xl lg:text-7xl xl:text-8xl";
  const [descTransition, setDescTransition] = useState(defaultDescSize);
  const [firstTransition, setFirstTransition] = useState<boolean>(true);
  const [titleTransition, setTitleTransition] = useState(defaultTitleSize);
  const [displayVideo, setDisplayVideo] = useState<boolean>(true);
  const [videoIsReady, setVideoIsReady] = useState<boolean>(false);
  const [videoIsPlaying, setVideoIsPlaying] = useState<boolean>(true);
  const [muted, setMuted] = useState<boolean>(true);

  const handleVideoIsReady = () => {
    setVideoIsReady(!videoIsReady);
  };

  const handleMuted = () => {
    setMuted(!muted);
  };

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
        className="w-full h-[90vh] lg:h-auto lg:aspect-video relative"
      >
        <div className="absolute flex size-full bg-gradient-radial px-4 lg:px-14">
          {displayVideo &&
            backdropVideoKey != null &&
            backdropVideoKey.results[0] &&
            backdropVideoKey.results[0].key != undefined && (
              <div className="absolute left-0 top-0 bottom-0 right-0 aspect-video pointer-events-none hidden lg:block">
                <ReactPlayer
                  controls={false}
                  loop={false}
                  muted={muted}
                  url={`https://www.youtube.com/watch?v=${props.backdropVideoInfos?.results[0].key}`}
                  playing={videoIsPlaying}
                  onEnded={() => {
                    setDisplayVideo(false);
                    setVideoIsPlaying(false);
                  }}
                  onReady={handleVideoIsReady}
                  width={"100%"}
                  height={"100%"}
                  onError={() => setDisplayVideo(false)}
                  config={{
                    youtube: {
                      playerVars: {
                        controls: 0,
                        disablekb: 1,
                        fs: 0,
                        iv_load_policy: 3,
                        rel: 0,
                        data: "hd1080",
                      },
                    },
                  }}
                />
              </div>
            )}
          <div className="mt-[20vh] lg:mt-0 self-center w-full grid">
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
              <h1
                className={`${titleTransition} font-bold drop-shadow-default w-5/6 lg:w-3/4 leading-[3rem] text-wrap break-words transition-all duration-700`}
              >
                {props.showData.name}
              </h1>
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
                {videoIsReady && displayVideo && (
                  <button
                    type="button"
                    onClick={handleMuted}
                    className="rounded-full border p-2 mr-2 hover:bg-white/10 hidden lg:block"
                  >
                    {muted ? (
                      <HiVolumeOff className="size-3" />
                    ) : (
                      <HiVolumeUp className="size-3" />
                    )}
                  </button>
                )}
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
