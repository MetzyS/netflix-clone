import { Fragment, useEffect, useState } from "react";
import { ResultType } from "../../../types/data";
import ShowDetailsModal from "./ShowDetailsModal";
import { useDataContext } from "../../../layouts/RootLayout";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { ShowDetailsType } from "../../../types/useLocaleTypes/ImportedLocaleTypes";
import { createPortal } from "react-dom";
import ShowVignette from "./ShowVignette";

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

  useEffect(() => {
    if (open === false) {
      bodyOverflow(true);
    } else {
      bodyOverflow(false);
    }
  }, [open]);

  return (
    <>
      {open && selectedShow !== null && createPortal(
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
        </>, document.body)
      }
      <section className="ml-4 lg:ml-12 z-20 backdrop-blur-[1px] mb-6">
        <Link to="/" className="flex items-center group group/title">
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
        <div className="overflow-visible overflow-x-scroll hide-scrollbar relative">
          <button className="absolute left-0 h-full p-4 rounded-tl-md rounded-bl-md z-30 text-xl font-bold text-transparent bg-transparent hover:bg-black/30 hover:text-white transition-all">
            {"<"}
          </button>
          <ul className="flex justify-between gap-[1vw]">
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
