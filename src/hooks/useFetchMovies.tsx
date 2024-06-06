import { useEffect, useState } from "react";
import { ResultType } from "../types/data";
import { fetchSettings } from "./fetchSettings";

const useFetchMovies = (props: {
  page: number;
  genre?: string;
}): {
  data: ResultType[];
  dataIsLoading: boolean;
} => {
  const [data, setData] = useState<ResultType[]>([]);
  const [dataIsLoading, setDataIsLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;
    setDataIsLoading(true);

    const fetchMovies = async (page: number) => {
      try {
        const response = await fetch("", fetchSettings.options);
        const responseJson = await response.json();

        if (isMounted) {
          setData(responseJson);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setDataIsLoading(false);
      }
    };

    fetchMovies(props.page);

    return () => {
      isMounted = false;
    };
  }, []);

  return { data, dataIsLoading };
};

export default useFetchMovies;
