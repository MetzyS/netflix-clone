import {
  useState,
  useRef,
  Fragment,
  useLayoutEffect,
  useMemo,
  useEffect,
} from "react";
import { CarouselInfoType, ResultType } from "../../../../types/data";
import ShowVignette from "../ShowVignette";
import {
  displayCalculations,
  // shuffle,
  // unShuffle,
} from "./CarouselCalculations";
import CarouselButtons from "./CarouselButtons";

const Carousel = (props: {
  data: ResultType[];
  handleOpenPopup: (show: ResultType) => void;
  screenSize: number;
}) => {
  const carouselRef = useRef<HTMLUListElement>(null);
  const [carouselIsActivated, setCarouselIsActivated] =
    useState<boolean>(false);

  const [carouselDataIsReady, setCarouselDataIsReady] =
    useState<boolean>(false);

  const [carouselIsReady, setCarouselIsReady] = useState<boolean>(false);

  // const [buttonIsDisabled, setButtonIsDisabled] = useState<boolean>(false);

  useEffect(() => {
    setCarouselDataIsReady(false);
    setCarouselDataIsReady(true);
  }, [props.data]);

  const handleCarouselButtons = (signal: string) => {
    if (!carouselIsActivated) {
      setCarouselIsActivated(true);
    }
    handleCarousel(signal);
  };
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
    const calc = displayCalculations(carouselInfo);
    return calc;
  }, [carouselInfo, props.screenSize]);

  const [resetCarousel, setResetCarousel] = useState<boolean>(false);
  const handleResetCarousel = (value: boolean) => {
    setResetCarousel(value);
  };

  useLayoutEffect(() => {
    if (carouselRef.current && carouselDataIsReady) {
      setCarouselIsReady(false);
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
      setCarouselIsReady(true);
    }
  }, [carouselRef, props.screenSize, carouselDataIsReady]);

  // const [carouselIsActivated, setCarouselIsActivated] =
  //   useState<boolean>(false);

  const handleCarousel = (signal: string) => {
    // if (!carouselIsActivated && carouselIsReady) {
    //   setCarouselIsActivated(true);
    // }
    switch (signal) {
      case "NEXT": {
        console.log(`oldPos = ${carouselInfo.posX}`);
        console.log(carouselInfo);
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
            console.log(`newPos = ${carouselInfo.posX}`);
            break;
          } else {
            setCarouselInfo({
              ...carouselInfo,
              posX: -Math.abs(carouselInfo.baseOffset),
            });
            handleResetCarousel(false);
            console.log(`newPos = ${carouselInfo.posX}`);
            break;
          }
        }

        if (newPos == carouselCalc.maxScrollX) {
          setCarouselInfo({ ...carouselInfo, posX: 0 });
          console.log(`newPos = ${carouselInfo.posX}`);
          break;
        }

        setCarouselInfo({ ...carouselInfo, posX: newPos });
        console.log(`newPos = ${carouselInfo.posX}`);
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
    <div className="ml-4 lg:ml-12 overflow-hidden">
      <CarouselButtons
        isActivated={carouselIsActivated}
        handleButtons={handleCarouselButtons}
      />
      <ul
        className="flex justify-between gap-[1vw] transition-all duration-700 my-0"
        ref={carouselRef}
        style={{
          transform: `translateX(${carouselInfo.posX}px)`,
        }}
      >
        {carouselDataIsReady &&
          props.data.map((show) => (
            <ShowVignette
              show={show}
              handleOpenPopup={props.handleOpenPopup}
              key={`test-${show.id}`}
            />
          ))}
      </ul>
    </div>
  );
};

export default Carousel;
