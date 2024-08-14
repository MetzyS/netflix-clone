import { useState, useRef, Fragment, useEffect } from "react"
import { ResultType } from "../../../../types/data"
import ShowVignette from "../ShowVignette"
import { MdArrowBackIosNew } from "react-icons/md";

const Carousel = (props: {
  data: ResultType[],
  handleOpenPopup: (show: ResultType) => void;
  screenSize: number;
}) => {

  // CAROUSEL REF & READY STATE
  const [carouselIsReady, setCarouselIsReady] = useState<boolean>(false);
  const carouselRef = useRef<HTMLUListElement>(null)
  useEffect(() => {
    if (carouselRef.current) {
      setCarouselIsReady(true);
    }

  }, [carouselRef])

  const [carouselIsActivated, setCarouselIsActivated] = useState<boolean>(false);
  const [carouselInfo, setCarouselInfo] = useState<{
    posX: number,
    screenSize: number,
    thumbnailSize: number,
    baseOffset: number,
    thumbnailCount: number,
    maxSize: number
  }>({
    posX: 0,
    screenSize: props.screenSize,
    thumbnailSize: 0,
    baseOffset: 0,
    thumbnailCount: props.data.length,
    maxSize: 0,
  })

  const handleCarouselActivation = () => {
    if (carouselIsReady && !carouselIsActivated) {
      setCarouselIsActivated(true);
    }
  }


  return (
    <div className="ml-4 lg:ml-12">
      <button
        className={`carousel-btn rounded-tl-md rounded-bl-md left-0 group ${carouselIsActivated ? "block bg-black/50 hover:bg-black/90" : ""
          }`}
      >
        <MdArrowBackIosNew className="text-white size-8 transition-all p-1 group-hover:p-0" />
      </button>
      <button
        className="carousel-btn rounded-tr-md rounded-br-md block right-0 text-transparent bg-black/50 hover:bg-black/90 group"
        onClick={handleCarouselActivation}
      >
        <MdArrowBackIosNew className="rotate-180 text-white size-8 transition-all p-1 group-hover:p-0" />
      </button>
      <ul
        className="flex justify-between gap-[1vw] transition-all my-0"
        ref={carouselRef}
        style={{
          transform: `translateX(${carouselInfo.posX}px)`,
        }}
      >
        {props.data.map((show, index) => (
          <Fragment key={`${show.id}`}>
            <ShowVignette show={show} handleOpenPopup={props.handleOpenPopup} />
          </Fragment>
        ))}
      </ul>
    </div>
  )
}

export default Carousel