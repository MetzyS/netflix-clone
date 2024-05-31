import { useState, useEffect } from "react";
import { DataType } from "../types/data";

const useFetch = (): {
  data: DataType[];
  dataIsLoading: boolean;
} => {
  const apiKey = import.meta.env.VITE_TMDB_AUTH_TOKEN;

  const [data, setData] = useState<DataType[]>([]);

  const [dataIsLoading, setDataIsLoading] = useState<boolean>(true);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
  };

  useEffect(() => {
    let isMounted = true;
    setDataIsLoading(true);

    const fetchTopRatedSeries = async () => {
      try {
        const [responseFr, responseEn] = await Promise.all([
          fetch(
            "https://api.themoviedb.org/3/tv/top_rated?laguage=fr&page=1",
            options
          ),
          fetch(
            "https://api.themoviedb.org/3/tv/top_rated?laguage=en&page=1",
            options
          ),
        ]);
        const resultFr = await responseFr.json();
        const resultEn = await responseEn.json();

        if (isMounted) {
          setData([resultFr, resultEn]);
        }
      } catch (error) {
        console.error(error);
      } finally {
        if (isMounted) {
          setDataIsLoading(false);
        }
      }
    };

    fetchTopRatedSeries();
    return () => {
      isMounted = false;
    };
  }, []);

  return { data, dataIsLoading };
};
export default useFetch;
