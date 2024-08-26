import { useState, useRef, Fragment, useLayoutEffect, useMemo } from "react";
import { CarouselInfoType, ResultType } from "../../../../types/data";
import ShowVignette from "../ShowVignette";
import { MdArrowBackIosNew } from "react-icons/md";
import { displayCalculations } from "./CarouselCalculations";

const Carousel = (props: {
  data: ResultType[];
  handleOpenPopup: (show: ResultType) => void;
  screenSize: number;
}) => {
  const [carouselInfo, setCarouselInfo] = useState<CarouselInfoType>({
    posX: 0,
    screenSize: props.screenSize,
    thumbnailSize: 0,
    baseOffset: 0,
    thumbnailCount: props.data.length,
    maxSize: 0,
    buttonWidth: 64,
  });

  const carouselCalc = useMemo(() => {
    const calc = displayCalculations(carouselInfo, props.screenSize);
    return calc;
  }, [carouselInfo, props.screenSize]);

  const [resetCarousel, setResetCarousel] = useState<boolean>(false);
  const handleResetCarousel = (value: boolean) => {
    setResetCarousel(value);
  };
  // CAROUSEL REF & READY STATE
  const [carouselIsReady, setCarouselIsReady] = useState<boolean>(false);
  const carouselRef = useRef<HTMLUListElement>(null);

  useLayoutEffect(() => {
    if (carouselRef.current) {
      // console.log("fired");
      if (!carouselIsReady) {
        setCarouselIsReady(true);
      }
      // Config state thumbnailSize, maxSize (scroll limit) & offset (margin left: ml-4 lg:ml-12)
      const thumbnailWidth = carouselRef.current.children[0].clientWidth;
      let marginLeft = 16;
      if (props.screenSize >= 1024) {
        marginLeft = 48;
      }
      setCarouselInfo((prevState) => {
        let newState = { ...prevState, thumbnailSize: thumbnailWidth };
        newState = {
          ...newState,
          maxSize:
            -Math.abs(thumbnailWidth * carouselInfo.thumbnailCount) -
            marginLeft,
        };
        newState = {
          ...newState,
          baseOffset: marginLeft,
        };
        return newState;
      });
    }
  }, [carouselRef, props.screenSize]);

  const [carouselIsActivated, setCarouselIsActivated] =
    useState<boolean>(false);

  const handleCarousel = (signal: string) => {
    if (!carouselIsActivated && carouselIsReady) {
      setCarouselIsActivated(true);
    }

    switch (signal) {
      case "NEXT": {
        const newPos =
          carouselInfo.posX -
          (carouselInfo.thumbnailSize * carouselCalc.displayableThumbnails +
            carouselCalc.offset);

        if (
          newPos -
            carouselInfo.thumbnailSize * carouselCalc.displayableThumbnails <
          carouselInfo.maxSize
        ) {
          if (!resetCarousel) {
            setCarouselInfo((prevState) => {
              let newState = {
                ...prevState,
                posX:
                  carouselCalc.maxScrollX +
                  carouselCalc.visibleThumbnailsRaw *
                    carouselInfo.thumbnailSize +
                  carouselCalc.offset,
              };
              return newState;
            });
            handleResetCarousel(true);
            break;
          } else {
            setCarouselInfo({
              ...carouselInfo,
              posX: -Math.abs(carouselInfo.baseOffset),
            });
            handleResetCarousel(false);
            break;
          }
        }

        if (newPos == carouselCalc.maxScrollX) {
          setCarouselInfo({ ...carouselInfo, posX: 0 });
          break;
        }

        setCarouselInfo({ ...carouselInfo, posX: newPos });
        break;
      }

      case "PREV": {
        const newPos =
          carouselInfo.posX +
          (carouselInfo.thumbnailSize * carouselCalc.displayableThumbnails -
            carouselCalc.offset);
        if (newPos > 0) {
          if (!resetCarousel) {
            handleResetCarousel(true);
            setCarouselInfo({
              ...carouselInfo,
              posX: -Math.abs(carouselInfo.baseOffset),
            });
            break;
          } else {
            handleResetCarousel(false);
            setCarouselInfo((prevState) => {
              let newState = {
                ...prevState,
                posX:
                  carouselCalc.maxScrollX +
                  carouselCalc.visibleThumbnailsRaw *
                    carouselInfo.thumbnailSize +
                  carouselCalc.offset,
              };
              return newState;
            });
            break;
          }
        }
        setCarouselInfo({ ...carouselInfo, posX: newPos });
        break;
      }
      default: {
        console.log("default");
        break;
      }
    }
  };

  return (
    <div className="ml-4 lg:ml-12">
      <button
        className={`carousel-btn rounded-tl-md rounded-bl-md left-0 group ${
          carouselIsActivated ? "block bg-black/50 hover:bg-black/90" : ""
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
        {props.data.map((show) => (
          <Fragment key={`${show.id}`}>
            <ShowVignette show={show} handleOpenPopup={props.handleOpenPopup} />
          </Fragment>
        ))}
      </ul>
    </div>
  );
};

export default Carousel;
