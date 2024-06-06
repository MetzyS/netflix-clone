import { useState, useEffect } from "react";
import { DataType } from "../types/data";
import { fetchSettings } from "./fetchSettings";

const useFetchPopularShows = (): {
  data: DataType[];
  dataIsLoading: boolean;
} => {
  const [data, setData] = useState<DataType[]>([]);

  const [dataIsLoading, setDataIsLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;
    setDataIsLoading(true);

    const fetchTopRatedShows = async () => {
      try {
        const [
          responseSeriesFr,
          responseSeriesFrSecPage,
          responseMoviesFr,
          responseMoviesFrSecPage,
        ] = await Promise.all([
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
        const seriesFr = await responseSeriesFr.json();
        const seriesEn = await responseSeriesFrSecPage.json();
        const moviesFr = await responseMoviesFr.json();
        const moviesEn = await responseMoviesFrSecPage.json();

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

    fetchTopRatedShows();
    return () => {
      isMounted = false;
    };
  }, []);

  return { data, dataIsLoading };
};
export default useFetchPopularShows;
