import { useState, useRef, Fragment, useEffect } from "react"
import { ResultType } from "../../../../types/data"
import ShowVignette from "../ShowVignette"
import { MdArrowBackIosNew } from "react-icons/md";

const Carousel = (props: {
  data: ResultType[],
  handleOpenPopup: (show: ResultType) => void;
  screenSize: number;
}) => {

  type CarouselInfoType = {
    posX: number,
    screenSize: number,
    thumbnailSize: number,
    baseOffset: number,
    thumbnailCount: number,
    maxSize: number
  }

  const [carouselInfo, setCarouselInfo] = useState<CarouselInfoType>({
    posX: 0,
    screenSize: props.screenSize,
    thumbnailSize: 0,
    baseOffset: 0,
    thumbnailCount: props.data.length,
    maxSize: 0,
  })
  // CAROUSEL REF & READY STATE
  const [carouselIsReady, setCarouselIsReady] = useState<boolean>(false);
  const carouselRef = useRef<HTMLUListElement>(null)


  useEffect(() => {
    if (carouselRef.current) {
      setCarouselIsReady(true);
      const thumbnailWidth = carouselRef.current.children[0].clientWidth;
      console.log(`thumbnailWidth = ${thumbnailWidth}`)
      console.log(`offset: `)
      setCarouselInfo((prevState) =>
        // let newState = { ...carouselInfo, thumbnailSize: thumbnailWidth })
        setCarouselInfo({ ...carouselInfo, maxSize: -Math.abs(thumbnailWidth * carouselInfo.thumbnailCount) })
    }

  }, [carouselRef])

  const [carouselIsActivated, setCarouselIsActivated] = useState<boolean>(false);


  // useEffect(() => {
  //   if (carouselIsReady && carouselRef.current) {
  //     // ThumbnailSize (thumbnail width)
  //     const thumbnailWidth = carouselRef.current.children[0].clientWidth
  //     setCarouselInfo({ ...carouselInfo, thumbnailSize: thumbnailWidth })

  //     // MaxSize (thumbnail count * thumbnail width)
  //     setCarouselInfo({ ...carouselInfo, maxSize: -Math.abs(thumbnailWidth * carouselInfo.thumbnailCount) })
  //     console.log(thumbnailWidth)
  //     // console.log(carouselInfo);

  //   }
  // }, [props.screenSize, props.data])


  const carouselCalculations = (carouselInfo: CarouselInfoType) => {
    const displayableWidth = carouselInfo.screenSize - carouselInfo.baseOffset;
    console.log(`displayableWidth = ${displayableWidth} , thumbnailSize: ${carouselInfo.thumbnailSize}`)
    const visibleThumbnails = Math.floor(displayableWidth / carouselInfo.thumbnailSize);
    const offset = visibleThumbnails * (carouselInfo.screenSize * 0.01);
    const displayableWidthWithoutGaps = displayableWidth - offset;
    const displayableThumbnails = Math.floor(
      (displayableWidthWithoutGaps / carouselInfo.thumbnailSize))
    const visibleThumbnailsRaw = displayableWidthWithoutGaps / carouselInfo.thumbnailSize;
    const maxOffset = (carouselInfo.thumbnailCount - 1) * 10;
    const maxScrollX = -Math.abs(carouselInfo.thumbnailSize * carouselInfo.thumbnailCount + maxOffset);

    console.log({
      displayableWidth, visibleThumbnails, offset, displayableWidthWithoutGaps, displayableThumbnails, visibleThumbnailsRaw, maxOffset, maxScrollX
    })

    return {
      displayableWidth, visibleThumbnails, offset, displayableWidthWithoutGaps, displayableThumbnails, visibleThumbnailsRaw, maxOffset, maxScrollX
    }
  }

  const handleCarousel = (signal: string) => {
    if (!carouselIsActivated && carouselIsReady) {
      setCarouselIsActivated(true);
    }
    let carouselCalc = carouselCalculations(carouselInfo);
    // console.log(carouselInfo);

    switch (signal) {

      case "NEXT": {

        const newPos = carouselInfo.posX - (carouselInfo.thumbnailSize * carouselCalc.displayableThumbnails + carouselCalc.offset)

        if ((newPos - carouselInfo.thumbnailSize * carouselCalc.displayableThumbnails) < carouselInfo.maxSize) {
          setCarouselInfo({ ...carouselInfo, posX: carouselCalc.maxScrollX + carouselCalc.visibleThumbnailsRaw * carouselInfo.thumbnailSize + carouselCalc.offset })
          break;
        }
        if ((newPos == carouselCalc.maxScrollX)) {
          setCarouselInfo({ ...carouselInfo, posX: 0 });
          break;
        }

        // console.log(`newPos = ${carouselInfo.posX}`);
        setCarouselInfo({ ...carouselInfo, posX: newPos });
        break;
      }

      case "PREV": {
        console.log("TEST")
        break;
      }
      default: {
        console.log("default");
        break;
      }
    }
  }


  return (
    <div className="ml-4 lg:ml-12">
      <button
        className={`carousel-btn rounded-tl-md rounded-bl-md left-4 group ${carouselIsActivated ? "block bg-black/50 hover:bg-black/90" : ""
          }`}
        onClick={() => handleCarousel("PREV")}
      >
        <MdArrowBackIosNew className="text-white size-8 transition-all p-1 group-hover:p-0" />
      </button>
      <button
        className="carousel-btn rounded-tr-md rounded-br-md block right-0 text-transparent bg-black/50 hover:bg-black/90 group"
        onClick={() => handleCarousel("NEXT")}
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