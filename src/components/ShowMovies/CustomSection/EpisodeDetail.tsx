import { useEffect, useState } from "react";
import { Episode } from "../../../types/data";

const EpisodeDetail = (props: { episode: Episode; minutes: string }) => {
  const [imageIsLoaded, setImageIsLoaded] = useState(false);
  const image = new Image();
  useEffect(() => {
    setImageIsLoaded(false);
    image.src = `https://image.tmdb.org/t/p/w154/${props.episode.still_path}.jpg`;
    image.onload = () => {
      setImageIsLoaded(true);
    };
  }, [props.episode.still_path]);

  return (
    <div className="flex flex-col items-center justify-center md:justify-normal md:items-start md:flex-row md:py-6 md:px-8 gap-4 md:rounded-md border border-transparent border-b-neutral-700 cursor-pointer hover:bg-neutral-800">
      <h4 className="md:hidden line-clamp-1 text-center mt-2 md:mt-0">
        {props.episode.name}
      </h4>
      <div className="flex flex-shrink-0 overflow-hidden w-full md:w-auto">
        <span className="text-xl self-center p-2">
          {props.episode.episode_number}
        </span>
        {imageIsLoaded ? (
          <div
            className="block w-[154px] aspect-video m-auto md:m-0"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w154/${props.episode.still_path}.jpg)`,
              backgroundPosition: "center",
              backgroundSize: "154px 100px",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        ) : (
          <div className="block w-[154px] h-full aspect-video m-auto md:m-0 bg-neutral-700 animate-pulse rounded-sm"></div>
        )}
      </div>
      <div className="pl-2 grid w-full">
        <div className="md:flex md:justify-between md:mb-2 hidden">
          <h4 className="max-w-[85%] line-clamp-1">{props.episode.name}</h4>
          <span>{`${props.episode.runtime} ${props.minutes}`}</span>
        </div>
        <p className="hidden md:block text-neutral-400 text-sm text-ellipsis line-clamp-3 max-h-[60px] text-justify">
          {props.episode.overview}
        </p>
      </div>
    </div>
  );
};

export default EpisodeDetail;
