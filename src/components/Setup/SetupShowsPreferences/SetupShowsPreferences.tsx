import { IoIosThumbsUp } from "react-icons/io";
import { useDataContext } from "../../../layouts/RootLayout";
import SerieCheckbox from "./LikeCheckbox";
import { Fragment } from "react/jsx-runtime";
import { FormEvent, useEffect, useState } from "react";
import { LikeSelectionType, ResultType } from "../../../types/data";
import BackButton from "../../Signup/BackButton";
import DefaultContainer from "../../ui/DefaultContainer";
import { Form } from "react-router-dom";
import DefaultButton from "../../ui/DefaultButton";

const SetupShowsPreferences = (props: {
  content: LikeSelectionType;
  backButtonFunc: () => void;
  onSubmit: (likedShowsId: number[]) => void;
}) => {
  const { user, fetchedPopularShows } = useDataContext();

  const [series, setSeries] = useState<ResultType[]>([]);
  const [seriesSecPage, setSeriesSecPage] = useState<ResultType[]>([]);

  const [movies, setMovies] = useState<ResultType[]>([]);
  const [moviesSecPage, setMoviesSecPage] = useState<ResultType[]>([]);

  const [isLoading, setIsLoading] = useState(true);
  const [selectedShows, setSelectedShows] = useState<number[]>([]);
  const [disabled, setDisabled] = useState<boolean>(true);

  const addSelected = (id: number) => {
    setSelectedShows((prevState) => [...prevState, id]);
  };

  const removeSelected = (id: number) => {
    setSelectedShows(
      selectedShows.filter((item) => {
        return item !== id;
      })
    );
  };

  useEffect(() => {
    if (selectedShows.length >= 3) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [selectedShows]);

  useEffect(() => {
    setIsLoading(fetchedPopularShows.dataIsLoading);

    if (
      fetchedPopularShows.data[0] != undefined &&
      fetchedPopularShows.data[3] != undefined
    ) {
      setSeries(fetchedPopularShows.data[0].results);
      setMovies(fetchedPopularShows.data[1].results);
      setSeriesSecPage(fetchedPopularShows.data[2].results);
      setMoviesSecPage(fetchedPopularShows.data[3].results);
    }
  }, [fetchedPopularShows]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    props.onSubmit(selectedShows);
  };
  return (
    <>
      {isLoading ? (
        <>loading</>
      ) : (
        <>
          <DefaultContainer>
            <div className="block lg:flex max-w-[1000px] m-auto sm:px-12">
              <div className="lg:w-1/3">
                <BackButton onClick={props.backButtonFunc} />
                <p className="flex gap-1 uppercase mt-4 text-sm text-neutral-800">
                  {props.content.stepWord}
                  <span className="font-semibold">{props.content.step}</span>
                  {props.content.ofWord}
                  <span className="font-semibold">{props.content.maxStep}</span>
                </p>
                <h1 className="signup-title font-bold lg:text-4xl">
                  {user!.username}
                  {props.content.title}
                </h1>
                <p className="xs:text-lg">
                  {props.content.desc[0]}{" "}
                  <span className="font-semibold">{props.content.desc[1]}</span>
                </p>
              </div>

              <Form
                className="flex flex-col mt-6 lg:w-2/3 lg:items-end"
                onSubmit={(e) => handleSubmit(e)}
              >
                <div className="relative flex gap-2 flex-wrap lg:max-w-[435px]">
                  {Object.entries(series).map((item) => {
                    const serie = item[1];
                    return (
                      <Fragment key={`serie-${serie.id}`}>
                        <SerieCheckbox
                          id={serie.id}
                          name={serie.name}
                          src={serie.poster_path}
                          checkedIcon={
                            <IoIosThumbsUp className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-8 text-white" />
                          }
                          add={addSelected}
                          remove={removeSelected}
                          selectedShows={selectedShows}
                        />
                      </Fragment>
                    );
                  })}
                  {Object.entries(movies).map((item) => {
                    const movie = item[1];
                    return (
                      <Fragment key={`serie-${movie.id}`}>
                        <SerieCheckbox
                          id={movie.id}
                          name={movie.name}
                          src={movie.poster_path}
                          checkedIcon={
                            <IoIosThumbsUp className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-8 text-white" />
                          }
                          add={addSelected}
                          remove={removeSelected}
                          selectedShows={selectedShows}
                        />
                      </Fragment>
                    );
                  })}
                  {Object.entries(moviesSecPage).map((item) => {
                    const movie = item[1];
                    return (
                      <Fragment key={`serie-${movie.id}`}>
                        <SerieCheckbox
                          id={movie.id}
                          name={movie.name}
                          src={movie.poster_path}
                          checkedIcon={
                            <IoIosThumbsUp className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-8 text-white" />
                          }
                          add={addSelected}
                          remove={removeSelected}
                          selectedShows={selectedShows}
                        />
                      </Fragment>
                    );
                  })}
                  {Object.entries(seriesSecPage).map((item) => {
                    const movie = item[1];
                    return (
                      <Fragment key={`serie-${movie.id}`}>
                        <SerieCheckbox
                          id={movie.id}
                          name={movie.name}
                          src={movie.poster_path}
                          checkedIcon={
                            <IoIosThumbsUp className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-8 text-white" />
                          }
                          add={addSelected}
                          remove={removeSelected}
                          selectedShows={selectedShows}
                        />
                      </Fragment>
                    );
                  })}
                </div>
                <div className="sticky bottom-0 w-full mx-auto pb-6 pt-12 mt-6 bg-gradient-to-b from-transparent to-white shadow-sm pointer-events-none lg:flex lg:items-end">
                  <DefaultButton
                    type="submit"
                    text={
                      disabled
                        ? props.content.buttonSelectionNotFinished
                        : props.content.buttonSelectionFinished
                    }
                    disabled={disabled}
                    primary={true}
                    className="py-6 disabled:bg-stone-300 disabled:text-stone-600 w-full pointer-events-auto disabled:cursor-default lg:w-1/2 lg:ml-auto"
                  />
                </div>
              </Form>
            </div>
          </DefaultContainer>
        </>
      )}
    </>
  );
};

export default SetupShowsPreferences;
