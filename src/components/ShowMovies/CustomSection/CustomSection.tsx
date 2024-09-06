import { useDataContext } from "../../../layouts/RootLayout";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createPortal } from "react-dom";
import { ResultType } from "../../../types/data";
import { ShowDetailsType } from "../../../types/useLocaleTypes/ImportedLocaleTypes";
import ShowDetailsModal from "./ShowDetailsModal";
import { IoIosArrowForward } from "react-icons/io";
import Carousel from "./Carousel/Carousel";
import { arraySplit } from "./Carousel/CarouselCalculations";

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

  // console.log(props.data);

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

  // console.log(props.data);

  const [screenSize, setScreenSize] = useState<number>(window.innerWidth);
  const [carouselData, setCarouselData] = useState<any>([]);
  const handleCarouselData = (quotient: number) => {
    let newData = Array.from(props.data);
    let test = arraySplit(newData, quotient);
    console.log(test);
    setCarouselData(test);
  };

  // SCREEN RESIZE
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
    // handleCarouselData()
    switch (true) {
      case window.innerWidth < 640:
        handleCarouselData(2);
        break;
      case window.innerWidth > 640 && window.innerWidth < 1024:
        handleCarouselData(4);
        break;
      case window.innerWidth >= 1024:
        handleCarouselData(5);
        break;
      // default:
      //   handleCarouselData(2);
      //   break;
    }
  }, [screenSize]);

  useEffect(() => {
    if (open === false) {
      bodyOverflow(true);
    } else {
      bodyOverflow(false);
    }
  }, [open]);

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
          {/* <Carousel
            data={props.data}
            handleOpenPopup={handleOpenPopup}
            screenSize={screenSize}
          /> */}
        </div>
      </section>
    </>
  );
};

export default CustomSection;
