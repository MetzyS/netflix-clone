import { useState, useRef, useLayoutEffect, useMemo, useEffect } from "react";
import {
  CarouselCalcType,
  CarouselInfoType,
  ResultType,
} from "../../../../types/data";
import ShowVignette from "../ShowVignette";
import {
  displayCalculations,
  carouselCalculationsHandler,
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

  useEffect(() => {
    setCarouselDataIsReady(false);
    if (props.data.length > 0) {
      setCarouselDataIsReady(true);
    }
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
    const calc: CarouselCalcType = displayCalculations(carouselInfo);
    return calc;
  }, [carouselInfo, props.screenSize]);

  const [resetCarousel, setResetCarousel] = useState<boolean>(false);
  const handleResetCarousel = (value: boolean) => {
    setResetCarousel(value);
  };

  useLayoutEffect(() => {
    if (carouselRef.current && carouselDataIsReady) {
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
  }, [carouselRef, props.screenSize, carouselDataIsReady]);

  const handleCarousel = (signal: string) => {
    carouselCalculationsHandler(
      signal,
      carouselInfo,
      carouselCalc,
      resetCarousel,
      setCarouselInfo,
      handleResetCarousel
    );
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
