import { IoIosThumbsUp } from "react-icons/io";
import { useDataContext } from "../../../layouts/RootLayout";
import SerieCheckbox from "./LikeCheckbox";
import { Fragment } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { DataType, LikeSelectionType } from "../../../types/data";
import BackButton from "../../Signup/BackButton";
import DefaultContainer from "../../ui/DefaultContainer";
import { Form } from "react-router-dom";

const SetupLikeSelection = (props: {
  content: LikeSelectionType;
  backButtonFunc: () => void;
  onSubmit: (values: { id: number; name: string }[]) => void;
}) => {
  const { user, fetchedData } = useDataContext();
  // console.log(popularSeries);
  const [isLoading, setIsLoading] = useState(true);
  const [popularSeries, setPopularSeries] = useState<[string, DataType][]>();
  const [likedShow, setLikedShow] = useState<{ id: number; name: string }[]>(
    []
  );

  const addLikedShow = (values: { id: number; name: string }) => {
    setLikedShow((prevState) => [...prevState, values]);
  };

  const removeLikedShow = (id: number) => {
    setLikedShow(
      likedShow.filter((item) => {
        return item.id != id;
      })
    );
  };

  useEffect(() => {
    console.log(likedShow);
  }, [likedShow]);

  useEffect(() => {
    setIsLoading(true);
    if (fetchedData.data != null) {
      let pop = Object.entries(fetchedData.data).filter((item) => {
        {
          if (item[1].weight > 95) {
            return {
              item,
            };
          }
          return null;
        }
      });
      setPopularSeries(pop);
      console.log(popularSeries);
      setIsLoading(false);
    }
  }, [fetchedData]);

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

              <Form className="flex gap-2 flex-wrap mt-6 max-w-[500px] m-auto">
                {Object.entries(popularSeries!).map((item) => {
                  const serie = item[1][1];
                  return (
                    <Fragment key={`serie-${serie.id}`}>
                      <SerieCheckbox
                        id={serie.id}
                        name={serie.name}
                        src={serie.image.medium}
                        checkedIcon={
                          <IoIosThumbsUp className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-8 text-white" />
                        }
                        add={addLikedShow}
                        remove={removeLikedShow}
                      />
                    </Fragment>
                  );
                })}
              </Form>
            </div>
          </DefaultContainer>
        </>
      )}
    </>
  );
};

export default SetupLikeSelection;
