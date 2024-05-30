import { useDataContext } from "../../../layouts/RootLayout";

const SetupSeriesPreferences = () => {
  const { fetchedData } = useDataContext();
  console.log(fetchedData);
  return <>{fetchedData.dataIsLoading ? <div>loading</div> : <div>ok</div>}</>;
  //   return <></>;
};

export default SetupSeriesPreferences;
