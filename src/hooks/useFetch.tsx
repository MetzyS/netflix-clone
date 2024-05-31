import { useState, useEffect } from "react";
import { DataType } from "../types/data";

const useFetch = (): {
  data: DataType[];
  dataIsLoading: boolean;
} => {
  const apiKey = import.meta.env.VITE_TMDB_AUTH_TOKEN;

  const [data, setData] = useState<DataType[]>([]);
  const [movies, setMovies] = useState<DataType[]>([]);

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
        const [
          responseSeriesFr,
          responseSeriesEn,
          responseMoviesFr,
          responseMoviesEn,
        ] = await Promise.all([
          fetch(
            "https://api.themoviedb.org/3/tv/top_rated?language=fr-FR&page=1",
            options
          ),
          fetch(
            "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
            options
          ),
          fetch(
            "https://api.themoviedb.org/3/movie/top_rated?language=fr-FR&page=1",
            options
          ),
          fetch(
            "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
            options
          ),
        ]);
        const seriesFr = await responseSeriesFr.json();
        const seriesEn = await responseSeriesEn.json();
        const moviesFr = await responseMoviesFr.json();
        const moviesEn = await responseMoviesEn.json();

        if (isMounted) {
          setData([seriesFr, seriesEn, moviesFr, moviesEn]);
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
