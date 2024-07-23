import { useEffect, useState } from "react";
import { ResultType } from "../../../types/data";
import ShowDetailsModal from "./ShowDetailsModal";
import { useDataContext } from "../../../layouts/RootLayout";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { ShowDetailsType } from "../../../types/useLocaleTypes/ImportedLocaleTypes";
import { createPortal } from "react-dom";

const CustomSection = (props: {
  data: ResultType[];
  content: {
    title: string;
    explore: string;
    playButton: string;
  };
  showDetails: ShowDetailsType;
}) => {
  console.log("effins")
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
                <li
                  key={`show-${index}`}
                  className="w-1/2 flex-shrink-0 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 rounded-lg"
                >
                  <button
                    type="button"
                    className="relative flex items-center"
                    onClick={() => handleOpenPopup(show)}
                  >
                    <img
                      src={`https://image.tmdb.org/t/p/w780/${props.data[index].backdrop_path}`}
                      alt=""
                      className="aspect-[16/9] object-center object-fill rounded-lg"
                    />
                    <span className="absolute top-1/2 left-1/2 text-xl xl:text-2xl 2xl:text-3xl drop-shadow-default text-wrap break-words w-9/12 text-left text-white translate-x-[-50%] translate-y-[-50%]">
                      {show.original_name
                        ? show.original_name
                        : show.original_title}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default CustomSection;
