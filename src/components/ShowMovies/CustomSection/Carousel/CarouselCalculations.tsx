import {
  CarouselCalcType,
  CarouselInfoType,
  ResultType,
} from "../../../../types/data";

// Ancienne methode, rajoute trop de complexité.
export const arraySplit = (array: any[], size: number) => {
  let oldArray = array;
  let newArray = [];
  for (let i = 0; i < oldArray.length; i + size) {
    newArray.push(oldArray.splice(i, i + size));
  }
  return newArray;
};

// Ancienne methode, rajoute trop de complexité.
export const unShuffle = (
  array: [ResultType[]],
  count: { prev: number; current: number; next: number }
) => {
  let unShuffledCount = count;
  unShuffledCount.prev = array.length - 1;
  unShuffledCount.current = 0;
  unShuffledCount.next = 1;
  return unShuffledCount;
};

// Ancienne methode, rajoute trop de complexité.
export const shuffle = (
  signal: string,
  array: [ResultType[]],
  count: { prev: number; current: number; next: number }
) => {
  let newState = count;
  switch (signal) {
    case "NEXT":
      if (count.current + 1 > array.length - 1) {
        // Reset carousel
        newState.prev = newState.current;
        newState.current = 0;
        newState.next = 1;
      } else {
        // Avance d'1 step chaque state
        newState.prev = newState.current;
        newState.current += 1;
        if (newState.current + 1 > array.length - 1) {
          // next > array.length =
          newState.next = 0;
        } else {
          // next < array.length
          newState.next = newState.current + 1;
        }
      }
      break;

    case "PREV":
      if (newState.current - 1 < 0) {
        // if current < 0, current = last item
        newState.current = array.length - 1;
        newState.prev = newState.current - 1;
        newState.next = 0;
      } else {
        newState.current -= 1;
        newState.next = newState.current + 1;
        if (newState.current === 0) {
          // Reset carousel
          newState.prev = array.length - 1;
          newState.next = 1;
        } else {
          newState.prev = newState.current - 1;
        }
      }
      break;

    default:
      console.log("Carousel signal error");
      break;
  }
  return newState;
};

export const displayCalculations = (carouselInfo: CarouselInfoType) => {
  const displayableWidth = carouselInfo.screenSize - carouselInfo.baseOffset;
  const visibleThumbnails = Math.floor(
    displayableWidth / carouselInfo.thumbnailSize
  );
  const offset = Math.ceil(
    visibleThumbnails * (carouselInfo.screenSize * 0.01)
  );
  const displayableWidthWithoutGaps = displayableWidth - offset;
  const displayableThumbnails = Math.floor(
    displayableWidthWithoutGaps / carouselInfo.thumbnailSize
  );
  const visibleThumbnailsRaw =
    displayableWidthWithoutGaps / carouselInfo.thumbnailSize;
  const maxOffset =
    (carouselInfo.thumbnailCount - 1) * (carouselInfo.screenSize * 0.01);
  const maxScrollX = -Math.abs(
    carouselInfo.thumbnailSize * carouselInfo.thumbnailCount + maxOffset
  );

  return {
    displayableWidth,
    visibleThumbnails,
    offset,
    displayableWidthWithoutGaps,
    displayableThumbnails,
    visibleThumbnailsRaw,
    maxOffset,
    maxScrollX,
  };
};

export const carouselCalculationsHandler = (
  signal: string,
  carouselInfo: CarouselInfoType,
  carouselCalc: CarouselCalcType,
  resetCarousel: boolean,
  setCarouselInfo: (prevState: any) => void,
  handleResetCarousel: (value: boolean) => void
) => {
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
          setCarouselInfo((prevState: any) => {
            let newState = {
              ...prevState,
              posX:
                carouselCalc.maxScrollX +
                carouselCalc.visibleThumbnailsRaw * carouselInfo.thumbnailSize +
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
          setCarouselInfo((prevState: any) => {
            let newState = {
              ...prevState,
              posX:
                carouselCalc.maxScrollX +
                carouselCalc.visibleThumbnailsRaw * carouselInfo.thumbnailSize +
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
