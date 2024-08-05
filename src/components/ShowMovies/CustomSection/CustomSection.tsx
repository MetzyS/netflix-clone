import { useDataContext } from "../../../layouts/RootLayout";
import { Fragment, useEffect, useState, useRef, useMemo } from "react";
import { Link } from "react-router-dom";
import { createPortal } from "react-dom";
import { ResultType } from "../../../types/data";
import { ShowDetailsType } from "../../../types/useLocaleTypes/ImportedLocaleTypes";
import ShowDetailsModal from "./ShowDetailsModal";
import ShowVignette from "./ShowVignette";
import { MdArrowBackIosNew } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";

const CustomSection = (props: {
  data: ResultType[];
  content: {
    title: string;
    explore: string;
    playButton: string;
  };
  showDetails: ShowDetailsType;
}) => {
  const { bodyOverflow } = useDataContext();
  const [open, setOpen] = useState(false);
  const [selectedShow, setSelectedShow] = useState<null | ResultType>(null);
  const [carouselIsActivated, setCarouselIsActivated] =
    useState<boolean>(false);

  const nextBtnRef = useRef<HTMLButtonElement>(null);
  const prevBtnRef = useRef<HTMLButtonElement>(null);

  const showList = useRef<HTMLUListElement>(null);

  // CAROUSEL STYLE FUNCTION
  const countFullyVisibleThumbnails = (
    screenSize: number,
    baseOffset: number,
    thumbnailSize: number,
    thumbnailCount: number
  ) => {
    // screenSize * 0.1 = 1vw (ul gap-[1vw])
    const GAP = screenSize * 0.1;
    const containerDisplayedWidth = screenSize - baseOffset;
    const visibleThumbnails = Math.floor(
      containerDisplayedWidth / thumbnailSize
    );
    const displayableThumbnails = Math.floor(
      (containerDisplayedWidth - visibleThumbnails * GAP) / thumbnailSize
    );

    const offset = visibleThumbnails * GAP;
    const maxOffset = (thumbnailCount - 1) * GAP;
    const maxScrollX = -Math.abs(thumbnailSize * thumbnailCount + maxOffset);

    console.log(`DISPLAYABLE THUMB = ${displayableThumbnails}`);

    return {
      containerDisplayedWidth,
      visibleThumbnails,
      displayableThumbnails,
      offset,
      maxScrollX,
    };
  };

  // CAROUSEL
  const BASE_OFFSET = 0;
  const [posX, setPosX] = useState<number>(0);
  const [screenSize, setScreenSize] = useState<number>(window.innerWidth);
  const thumbnailCount = useMemo<number>(() => {
    return props.data.length;
  }, [props.data]);
  // const [thumbnailCount, setThumbnailCount] = useState<number>(
  //   props.data.length
  // );
  const [thumbnailSize, setThumbnailSize] = useState<number>(0);
  const [maxSize, setMaxSize] = useState<number>(
    -Math.abs(thumbnailCount * thumbnailSize)
  );
  const [carouselStyleInfos, setCarouselStyleInfos] = useState(
    countFullyVisibleThumbnails(
      screenSize,
      BASE_OFFSET,
      thumbnailSize,
      thumbnailCount
    )
  );

  useEffect(() => {
    if (prevBtnRef.current) {
      prevBtnRef.current.addEventListener("click", () => {
        // console.log("prev");
      });
    }
    if (nextBtnRef.current) {
      nextBtnRef.current.addEventListener("click", () => {
        // console.log("next");
        console.log(
          `posX=${posX}, thumbnailSize=${thumbnailSize}, thumbnailCount=${thumbnailCount}, displayableThumbnails=${carouselStyleInfos.displayableThumbnails}, offset=${carouselStyleInfos.offset}`
        );
        let position =
          posX -
          (thumbnailSize * carouselStyleInfos.displayableThumbnails +
            carouselStyleInfos.offset);

        console.log(`position:${position}`);

        if (position < maxSize) {
          setPosX(
            carouselStyleInfos.maxScrollX +
              carouselStyleInfos.visibleThumbnails * thumbnailSize +
              carouselStyleInfos.offset
          );
        } else if (position == carouselStyleInfos.maxScrollX) {
          setPosX(0);
        } else {
          setPosX(position);
        }
      });
    }
  }, [nextBtnRef, prevBtnRef, carouselStyleInfos]);

  const handleCarouselActivation = () => {
    setCarouselIsActivated(true);
    console.log("activated");
  };

  const handleOpenPopup = (show: ResultType) => {
    setOpen(!open);
    setSelectedShow(show);
  };
  const handleClosePopup = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setOpen(false);
      setSelectedShow(null);
    }
  };

  const funcClosePopup = () => {
    setOpen(false);
    setSelectedShow(null);
  };

  // useEffect screen resize
  useEffect(() => {
    const handleScreenResize = () => {
      setScreenSize(window.innerWidth);
    };
    window.addEventListener("resize", handleScreenResize);
    return () => {
      window.removeEventListener("resize", () => handleScreenResize);
    };
  }, []);

  useEffect(() => {
    if (open === false) {
      bodyOverflow(true);
    } else {
      bodyOverflow(false);
    }
  }, [open]);

  useEffect(() => {
    let tSize = 0;
    if (showList.current) {
      // width du 1er thumbnail
      tSize = showList.current.children[0].clientWidth;
    }
    setThumbnailSize(tSize);
    setMaxSize(-Math.abs(thumbnailCount * thumbnailSize));
    setCarouselStyleInfos(
      countFullyVisibleThumbnails(
        screenSize,
        BASE_OFFSET,
        thumbnailSize,
        thumbnailCount
      )
    );
  }, [props.data, screenSize]);

  return (
    <>
      {open &&
        selectedShow !== null &&
        createPortal(
          <>
            <div className="fixed z-20 backdrop-blur-md bg-black/70 top-0 bottom-0 right-0 left-0"></div>
            <ShowDetailsModal
              closeModalFunction={handleClosePopup}
              btnClose={funcClosePopup}
              backdropImage={selectedShow.backdrop_path}
              show={selectedShow}
              content={props.content}
              showDetailsContent={props.showDetails}
            />
          </>,
          document.body
        )}
      <section className="z-20 backdrop-blur-[1px] mb-6">
        <Link
          to="/"
          className="flex items-center group group/title ml-4 lg:ml-12"
        >
          <h1 className="font-semibold text-lg lg:text-xl xl:text-2xl 2xl:text-3xl my-2">
            {props.content.title}
          </h1>
          <p className="flex items-center mt-1">
            <span className="text-transparent transition-all duration-700 group-hover/title:text-cyan-500 group-hover:ml-2 text-sm font-semibold">
              {props.content.explore}
            </span>
            <IoIosArrowForward className="text-transparent -ml-[90%] transition-all  group-hover:ml-0.5 duration-300 group-hover:text-cyan-500" />
          </p>
        </Link>
        <div className="relative overflow-visible overflow-x-scroll hide-scrollbar">
          <button
            className={`carousel-btn rounded-tl-md rounded-bl-md left-0 group ${
              carouselIsActivated ? "block bg-black/70 hover:bg-black/90" : ""
            }`}
            ref={prevBtnRef}
          >
            <MdArrowBackIosNew className="text-white size-8 transition-all p-1 group-hover:p-0" />
          </button>
          <button
            className="carousel-btn rounded-tr-md rounded-br-md block right-0 text-transparent bg-black/70 hover:bg-black/90 group"
            onClick={handleCarouselActivation}
            ref={nextBtnRef}
          >
            <MdArrowBackIosNew className="rotate-180 text-white size-8 transition-all p-1 group-hover:p-0" />
          </button>
          <ul
            className={`flex justify-between gap-[1vw] transition-all my-0 ${
              carouselIsActivated ? "ml-0" : "ml-4 lg:ml-12"
            }`}
            ref={showList}
            style={{
              transform: `translateX(${posX}px)`,
            }}
          >
            {props.data.map((show, index) => {
              return (
                <Fragment key={`show-${index}`}>
                  <ShowVignette show={show} handleOpenPopup={handleOpenPopup} />
                </Fragment>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default CustomSection;
