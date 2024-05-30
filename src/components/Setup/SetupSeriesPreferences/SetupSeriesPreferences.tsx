import { useDataContext } from "../../../layouts/RootLayout";

const SetupSeriesPreferences = () => {
  const { popularSeries } = useDataContext();
  // console.log(popularSeries);
  return (
    <>
      {Object.entries(popularSeries!).map((item) =>
        console.log(item[1][1].name)
      )}
    </>
  );
  //   return <></>;
};

export default SetupSeriesPreferences;
