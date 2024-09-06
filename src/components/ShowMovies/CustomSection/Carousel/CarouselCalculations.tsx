import { CarouselInfoType, ResultType } from "../../../../types/data";

export const arraySplit = (array: any[], size: number) => {
  let oldArray = array;
  let newArray = [];
  for (let i = 0; i < oldArray.length; i + size) {
    newArray.push(oldArray.splice(i, i + size));
  }
  return newArray;
};

export const shuffle = (
  signal: string,
  array: [],
  count: { prev: number; current: number; next: number }
) => {
  let newState = count;
  switch (signal) {
    case "next":
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

    case "prev":
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

export const displayCalculations = (
  carouselInfo: CarouselInfoType,
  screenSize: number
) => {
  const displayableWidth = carouselInfo.screenSize - carouselInfo.baseOffset;
  // console.log(
  //   `displayableWidth = ${displayableWidth} , thumbnailSize: ${carouselInfo.thumbnailSize}`
  // );
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
  const maxOffset = (carouselInfo.thumbnailCount - 1) * (screenSize * 0.01);
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
