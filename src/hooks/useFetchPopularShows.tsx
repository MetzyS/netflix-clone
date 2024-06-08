import { useState, useEffect } from "react";
import { DataType } from "../types/data";
import { fetchSettings } from "./fetchSettings";

const useFetchPopularShows = (): {
  data: DataType[];
  dataIsLoading: boolean;
  error: Error | null;
} => {
  const [data, setData] = useState<DataType[]>([]);

  const [dataIsLoading, setDataIsLoading] = useState<boolean>(true);

  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;
    setDataIsLoading(true);

    const fetchTopRatedShows = async () => {
      try {
        const results = await Promise.allSettled([
          fetch(
            "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&vote_count.gte=10000",
            fetchSettings.options
          ),
          fetch(
            "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=2&sort_by=popularity.desc&vote_count.gte=10000",
            fetchSettings.options
          ),
          fetch(
            "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&vote_count.gte=10000",
            fetchSettings.options
          ),
          fetch(
            "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=2&sort_by=popularity.desc&vote_count.gte=10000",
            fetchSettings.options
          ),
        ]);

        for (const result of results) {
          if (result.status === "rejected") {
            throw new Error(result.reason);
          }
          const response = (result as PromiseFulfilledResult<Response>).value;
          if (!response.ok) {
            setError(Error(`Erreur: ${response.status}`));
          }
        }
        const dataResults = results.map(
          (result) => (result as PromiseFulfilledResult<Response>).value
        );
        const dataJson = await Promise.all(
          dataResults.map((response) => response.json())
        );

        if (isMounted) {
          setData(dataJson);
        }
      } catch (err) {
        if (isMounted) {
          setError(err as Error);
        }
      } finally {
        if (isMounted) {
          setDataIsLoading(false);
        }
      }
    };

    fetchTopRatedShows();
    return () => {
      isMounted = false;
    };
  }, []);

  return { data, dataIsLoading, error };
};
export default useFetchPopularShows;
