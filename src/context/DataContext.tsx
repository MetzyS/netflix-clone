import { createContext, useEffect, useState } from "react";
import { DataType } from "../types/data";
import useFetchPopularShows from "../hooks/useFetchPopularShows";

export const DataContext = createContext<any>(null);
export const DataContextProvider = ({
  children,
}: React.PropsWithChildren<{}>) => {
  const { data, dataIsLoading, error } = useFetchPopularShows();
  const [fetchedData, setFetchedData] = useState<{
    data: DataType[];
    dataIsLoading: boolean;
    error: Error | null;
  }>({ data: [], dataIsLoading: true, error: null });

  useEffect(() => {
    setFetchedData({ data, dataIsLoading, error });
  }, [data]);

  return (
    <DataContext.Provider value={fetchedData}>{children}</DataContext.Provider>
  );
};
