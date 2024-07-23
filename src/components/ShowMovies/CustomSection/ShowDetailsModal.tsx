import { useEffect, useMemo, useState } from "react";
import { IoClose } from "react-icons/io5";
import { Episode, ResultEpisodes, ResultType } from "../../../types/data";
import { FaCheck, FaPlay } from "react-icons/fa6";
import { BsHandThumbsUp } from "react-icons/bs";
import useFetchShowDetails from "../../../hooks/useFetchShowDetails";
import { ShowDetailsType } from "../../../types/useLocaleTypes/ImportedLocaleTypes";

import useFetchEpisodes from "../../../hooks/useFetchEpisodes";

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
  const { data, dataIsLoading } = useFetchShowDetails(props.show.id);
  const { epDataIsLoading, epData, epError } = useFetchEpisodes({
    serieId: props.show.id,
    seasonNumber: Number(season),
  });

  const multipleSeasons = useMemo(() => {
    if (data != undefined && data.seasons.length > 1) {
      return true;
    }
    return false;
  }, [dataIsLoading]);

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
      <div className="fixed transition-all h-[100vh] w-full lg:w-[90vw] xl:w-[50vw] top-0 lg:top-[2vh] lg:left-[50%] lg:-translate-x-[50%] bg-neutral-900 z-30 rounded-md overflow-y-scroll modal-scrollbar pb-24">
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
              <div className="flex gap-2 mt-6">
                <button
                  type="button"
                  className="px-4 lg:px-6 py-2 bg-neutral-200 hover:bg-neutral-400 text-sm lg:text-lg text-black rounded-md flex gap-2 items-center"
                >
                  <FaPlay className="size-5 lg:size-8" />
                  {props.content.playButton}
                </button>
                <button
                  type="button"
                  className="p-3 h-fit rounded-full bg-black/30 border border-neutral-400 text-white hover:text-white hover:border-white"
                >
                  <FaCheck />
                </button>
                <div className="group/likeBtn flex gap-2">
                  <button
                    type="button"
                    className="p-3 h-fit rounded-full bg-black/30 border border-neutral-400 text-neutral-400 hover:text-neutral-200 hover:border-neutral-200"
                  >
                    <BsHandThumbsUp />
                  </button>
                  <button
                    type="button"
                    className="p-3 h-fit rounded-full bg-black/30 border border-neutral-400 text-neutral-400 hover:text-neutral-200 hover:border-neutral-200 hidden group-hover/likeBtn:block"
                  >
                    <BsHandThumbsUp className="rotate-180" />
                  </button>
                </div>
              </div>
              {dataIsLoading
                ? ""
                : data && (
                    <>
                      <div className="mt-20 lg:flex lg:justify-between">
                        <div className="lg:max-w-[75%]">
                          <p className="flex gap-2 flex-wrap text-neutral-400 font-semibold">
                            <span className="text-green-500">
                              {`${props.showDetailsContent.recommended} ${(
                                props.show.vote_average * 10
                              ).toFixed(0)} %`}
                            </span>
                            <span>{data.first_air_date.substring(0, 4)}</span>
                            <span>
                              {`${data.seasons.length} ${props.showDetailsContent.seasons}`}{" "}
                            </span>
                            <span className="px-2 border text-xs rounded-md">
                              HD
                            </span>
                          </p>
                          <ul className="flex gap-2 text-neutral-300 font-semibold">
                            {data.genres.map((genre, index) => (
                              <li key={`genre-${index}`}>
                                {genre.name.toLowerCase()}
                              </li>
                            ))}
                          </ul>

                          <p className="mt-4 text-sm lg:max-w-[75%]">
                            {data.overview}
                          </p>
                        </div>
                        <div className="mt-4 lg:mt-0 text-sm lg:w-full lg:ml-12">
                          <ul className="flex flex-wrap mb-4">
                            <li className="text-neutral-500">
                              {`${props.showDetailsContent.distribution}:`}
                            </li>
                            {data.production_companies.map((company, index) => (
                              <li key={`dist-${index}`} className="ml-2">
                                {company.name},
                              </li>
                            ))}
                          </ul>
                          <ul className="flex flex-wrap mb-4">
                            <li className="text-neutral-500">
                              {`${props.showDetailsContent.genres}:`}
                            </li>
                            {data.genres.map((genre, index) => (
                              <li key={`gnr-${index}`} className="ml-2">
                                {genre.name}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      {/* episode + select season */}
                      <div className="mt-12">
                        <div className="mb-2 lg:flex lg:justify-between lg:items-center">
                          <h3 className="text-xl lg:text-2xl">
                            {props.showDetailsContent.episodes}
                          </h3>
                          {multipleSeasons && (
                            <select
                              className="bg-white/5 p-3 border border-neutral-500 rounded-md font-semibold"
                              defaultValue={season}
                              onChange={(e) =>
                                handleSetSeason(e.currentTarget.value)
                              }
                            >
                              {data.seasons.map((season, index) => (
                                <option
                                  value={season.season_number}
                                  key={`season-${index}`}
                                  className="text-black"
                                >
                                  {season.name}
                                </option>
                              ))}
                            </select>
                          )}
                        </div>
                      </div>
                      {/* map episodes */}
                      {/* Div de test */}
                      <div
                        className="border border-transparent border-b-neutral-700 rounded-md py-2 lg:py-6 lg:px-8 hover:border-neutral-700 hover:bg-neutral-800 cursor-pointer flex flex-col md:grid md:grid-cols-[200px_auto]"
                        key={`episode-32409240924092}`}
                      >
                        <div className="flex order-2 md:order-1 w-full md:w-auto pb-2">
                          <span className="self-center px-2 lg:px-4 text-xl">
                            0
                          </span>
                          <img
                            src={`https://image.tmdb.org/t/p/original//41neXsH222hV2zrsTyw8h7javon.jpg`}
                            alt={`image episode`}
                            className="w-[154px] max-h-24 md:h-auto mx-auto md:mx-0 md:self-center"
                          />
                        </div>
                        <div className="flex flex-col md:grid order-1">
                          <p className="flex justify-between px-4 self-center lg:self-start my-2 md:my-0 w-full">
                            <span className="w-full text-center md:w-max md:text-left">
                              Le Petit Ethernopien
                            </span>
                            <span className="hidden md:block">23</span>
                          </p>
                          <p className="hidden md:block text-wrap break-words">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Deleniti tempore id fugiat iure quasi qui
                            possimus officiis molestiae. Delectus laudantium
                            corporis ratione beatae cumque quibusdam eos aperiam
                            adipisci illum vitae. Ut, sapiente! Quia id eligendi
                            rerum. Nesciunt hic autem expedita veniam iure
                            aspernatur necessitatibus tempore porro commodi
                            perferendis, minima dolores esse deleniti, nisi
                            maiores. Non assumenda consequuntur accusamus at
                            soluta! Natus, nobis itaque perspiciatis cupiditate
                            eos est iusto possimus iste iure labore saepe
                            voluptate laudantium impedit. Incidunt cupiditate
                            iste porro voluptate laudantium libero facilis
                            eveniet aperiam nihil, quos quasi! Earum. Incidunt
                            quisquam quas minima possimus, deleniti quam, nobis,
                            porro modi molestiae iusto perspiciatis. Alias animi
                            aliquid ratione sequi. Doloremque consequatur
                            possimus mollitia quis impedit aspernatur nulla quia
                            officiis ea necessitatibus! Odit itaque dolorum
                            optio ab excepturi, libero, modi, et distinctio
                            fugit illum ad rerum nostrum eaque mollitia repellat
                            totam facere? Aliquid reiciendis magni, temporibus
                            adipisci vitae maiores laboriosam iste amet.
                            Assumenda, dicta cumque facilis non a aliquid hic,
                            vel laboriosam voluptate aut, fugit odio voluptates
                            sapiente quo dolor nisi itaque in harum
                            reprehenderit. Impedit itaque, vitae rem aspernatur
                            iusto assumenda. Vitae eius consequatur, asperiores,
                            sunt aut nulla, quia doloribus nemo officia et ullam
                            omnis aperiam beatae. Iste veniam consequuntur
                            deserunt perferendis similique omnis nam. Nisi
                            labore ut corrupti recusandae illum? Voluptates quod
                            consequatur totam officiis labore sapiente dolorum
                            eligendi perspiciatis sed optio, quidem, non, ipsam
                            ut tenetur quaerat similique. Ratione veritatis iure
                            blanditiis at eum officiis vitae alias nobis totam.
                            Culpa dolores quibusdam minus earum quaerat neque
                            enim odit. Adipisci, culpa. In culpa explicabo illum
                            ex tempore! Quibusdam modi nemo itaque quae corrupti
                            ipsa deserunt, asperiores voluptatibus voluptatum
                            ipsam sapiente! Tenetur corrupti praesentium aliquid
                            perspiciatis vero recusandae quasi harum inventore
                            obcaecati quidem tempore laboriosam, sed minus sequi
                            accusantium, at iusto omnis voluptates in nulla
                            saepe est voluptatum itaque soluta. Dignissimos.
                          </p>
                        </div>
                      </div>
                      {epData !== null && epData.episodes && (
                        <>
                          {epData.episodes &&
                            epData.episodes.map((episode: Episode, index) => (
                              <div
                                className="flex flex-col md:grid md:grid-cols-[200px_auto] border border-transparent border-b-neutral-700 rounded-md py-2 lg:py-6 lg:px-8 hover:border-neutral-700 hover:bg-neutral-800 cursor-pointer"
                                key={`episode-${index}`}
                              >
                                <div className="flex order-2 md:order-1 w-full md:w-auto pb-2">
                                  <span className="self-center px-2 lg:px-4 text-xl">
                                    {episode.episode_number}
                                  </span>
                                  <img
                                    src={`https://image.tmdb.org/t/p/w154/${episode.still_path}`}
                                    alt={`image episode ${episode.episode_number}`}
                                    className="w-[154px] h-auto md:h-auto mx-auto md:mx-0"
                                  />
                                </div>
                                <div className="flex flex-col md:flex-grow order-1 overflow-hidden truncate text-wrap">
                                  <p className="flex justify-between px-4 self-center lg:self-start my-2 md:my-0 w-full">
                                    <span className="w-full text-center md:w-max md:text-left">
                                      {episode.name
                                        ? episode.name
                                        : `${props.showDetailsContent.episode} ${episode.episode_number}`}
                                    </span>
                                    <span className="hidden md:block">
                                      {episode.runtime}
                                    </span>
                                  </p>
                                  <p className="hidden md:block">
                                    {episode.overview}
                                  </p>
                                </div>
                              </div>
                            ))}
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
