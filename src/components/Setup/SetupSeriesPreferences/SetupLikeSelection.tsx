import { IoIosThumbsUp } from "react-icons/io";
import { useDataContext } from "../../../layouts/RootLayout";
import SerieCheckbox from "./LikeCheckbox";
import { Fragment } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { LikeSelectionType, ResultType } from "../../../types/data";
import BackButton from "../../Signup/BackButton";
import DefaultContainer from "../../ui/DefaultContainer";
import { Form } from "react-router-dom";
import DefaultButton from "../../ui/DefaultButton";

const SetupLikeSelection = (props: {
  content: LikeSelectionType;
  backButtonFunc: () => void;
  onSubmit: (values: { id: number; name: string }[]) => void;
}) => {
  const { user, fetchedData, lang } = useDataContext();

  const [data, setData] = useState<ResultType[]>([]);
  const [movies, setMovies] = useState<ResultType[]>([]);
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
    if (fetchedData.dataIsLoading === false) {
      if (lang === "fr") {
        setData(fetchedData.data[0].results);
        setMovies(fetchedData.data[2].results);
      } else if (lang === "en") {
        setData(fetchedData.data[1].results);
        setMovies(fetchedData.data[3].results);
      }
    }
  }, [lang, fetchedData]);

  useEffect(() => {
    setIsLoading(fetchedData.dataIsLoading);
  }, [fetchedData]);

  // const handleSubmit = (e: FormEvent) => {
  //   e.preventDefault();
  //   console.log("submit:", likedShow);
  // };
  console.log(data);
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
                className="flex gap-2 flex-wrap mt-6 max-w-[500px] m-auto"
                // onSubmit={(e) => handleSubmit(e)}
              >
                {Object.entries(data).map((item, index) => {
                  const serie = data[index];
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
                {Object.entries(movies).map((item, index) => {
                  const serie = movies[index];
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
                <DefaultButton
                  text={
                    disabled
                      ? props.content.buttonSelectionNotFinished
                      : props.content.buttonSelectionFinished
                  }
                  disabled={disabled}
                />
              </Form>
            </div>
          </DefaultContainer>
        </>
      )}
    </>
  );
};

export default SetupLikeSelection;
