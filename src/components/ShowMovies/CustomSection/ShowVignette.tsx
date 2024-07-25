import { useEffect, useState } from "react"
import { ResultType } from "../../../types/data";

const ShowVignette = (props: {
  show: ResultType
  handleOpenPopup: (show: ResultType) => void;
}) => {
  const [imageIsLoaded, setImageIsLoaded] = useState(false);

  let image = new Image();

  useEffect(() => {
    setImageIsLoaded(false);
    image.src = `https://image.tmdb.org/t/p/w780/${props.show.backdrop_path}`
    image.onload = () => {
      console.log("ouaisouaisouais")
      setImageIsLoaded(true);
    }
  }, [props.show.backdrop_path]);
  return (
    <li
      className="w-1/2 flex-shrink-0 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 rounded-lg"
    >
      <button
        type="button"
        className="relative flex items-center"
        onClick={() => props.handleOpenPopup(props.show)}
      >
        {imageIsLoaded ?
          (<img
            src={`https://image.tmdb.org/t/p/w780/${props.show.backdrop_path}`}
            alt=""
            className="aspect-video object-center object-fill rounded-lg"
          />)
          :
          (<div className="aspect-video h-full w-full bg-neutral-700 animate-pulse"></div>)
        }
        <span className="absolute top-1/2 left-1/2 text-xl xl:text-2xl 2xl:text-3xl drop-shadow-default text-wrap break-words w-9/12 text-left text-white translate-x-[-50%] translate-y-[-50%]">
          {props.show.original_name
            ? props.show.original_name
            : props.show.original_title}
        </span>
      </button>
    </li>
  )
}

export default ShowVignette;