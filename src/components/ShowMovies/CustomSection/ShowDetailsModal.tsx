import { Fragment, useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { Episode, ResultType } from "../../../types/data";
import { FaCheck, FaPlay } from "react-icons/fa6";
import { BsHandThumbsUp } from "react-icons/bs";
import useFetchShowDetails from "../../../hooks/useFetchShowDetails";
import { ShowDetailsType } from "../../../types/useLocaleTypes/ImportedLocaleTypes";

import useFetchEpisodes from "../../../hooks/useFetchEpisodes";
import EpisodeDetail from "./EpisodeDetail";
import LoadingSpinner from "../../ui/LoadingSpinner";
import ShowDetailsButtons from "./ShowDetailsButtons";
import ShowDetailsDesc from "./ShowDetailsDesc";
import ShowDetailsSeasonSelect from "./ShowDetailsSeeasonSelect";

const ShowDetailsModal = (props: {
  closeModalFunction: (e: KeyboardEvent) => void;
  btnClose: () => void;
  backdropImage: string;
  show: ResultType;
  content: {
    title: string;
    explore: string;
    playButton: string;
  };
  showDetailsContent: ShowDetailsType;
}) => {
  const [season, setSeason] = useState<number | string>(1);
  const [multipleSeasons, setMultipleSeasons] = useState<boolean>(false);
  const { data, dataIsLoading } = useFetchShowDetails(props.show.id);
  const { epDataIsLoading, epData, epError } = useFetchEpisodes({
    serieId: props.show.id,
    seasonNumber: Number(season),
  });

  useEffect(() => {
    setMultipleSeasons(() => {
      if (data != undefined && data.seasons.length > 1) {
        return true;
      }
      return false;
    });
  }, [data]);

  const handleSetSeason = (number: number | string) => {
    setSeason(Number(number));
  };

  useEffect(() => {
    document.addEventListener("keydown", props.closeModalFunction);
    return () => {
      document.removeEventListener("keydown", props.closeModalFunction);
    };
  }, []);

  return (
    <>
      <div className="fixed transition-all h-[100vh] w-full lg:w-[90vw] xl:w-[60vw] top-0 lg:top-[2vh] lg:left-[50%] lg:-translate-x-[50%] bg-neutral-900 z-30 rounded-md overflow-y-scroll modal-scrollbar pb-24">
        {/* backdrop */}
        <div>
          <button
            className="absolute right-5 top-5 z-30"
            onClick={props.btnClose}
          >
            <IoClose className="size-8 rounded-full bg-neutral-800 p-1" />
          </button>
          <div className="w-full h-full relative">
            <img
              src={`https://image.tmdb.org/t/p/original/${props.backdropImage}`}
              alt=""
              className="rounded-l-md bg-faded aspect-video"
            />
            <div className="absolute top-[40%] lg:top-[50%] px-8 lg:px-12">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
                {props.show.name ? props.show.name : props.show.original_title}
              </h1>
              <ShowDetailsButtons
                playButtonText={props.content.playButton}
                iconCheck={FaCheck}
                iconPlay={FaPlay}
                iconThumbsUp={BsHandThumbsUp}
              />
              {dataIsLoading
                ? ""
                : data && (
                    <>
                      <ShowDetailsDesc
                        text={props.showDetailsContent}
                        averageVote={props.show.vote_average}
                        data={data}
                      />
                      {/* episode + select season */}
                      <ShowDetailsSeasonSelect
                        episodeText={props.showDetailsContent.episodes}
                        multipleSeasons={multipleSeasons}
                        season={season}
                        handleSetSeason={handleSetSeason}
                        data={data}
                      />

                      {epDataIsLoading ? (
                        <LoadingSpinner />
                      ) : (
                        <>
                          {epData !== null && epData.episodes && (
                            <>
                              {epData.episodes &&
                                epData.episodes.map(
                                  (episode: Episode, index) => (
                                    <Fragment key={`episode-${index}`}>
                                      <EpisodeDetail
                                        episode={episode}
                                        minutes={
                                          props.showDetailsContent.minutes
                                        }
                                      />
                                    </Fragment>
                                  )
                                )}
                            </>
                          )}
                        </>
                      )}
                    </>
                  )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowDetailsModal;
