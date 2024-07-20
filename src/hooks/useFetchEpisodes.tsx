import { useEffect, useState } from "react";
import { fetchSettings } from "./fetchSettings";
import { useDataContext } from "../layouts/RootLayout";
import { ResultEpisodes } from "../types/data";

const useFetchEpisodes = (props: {
  serieId: number;
  seasonNumber: number;
}): {
  isLoading: boolean;
  data: any;
  error: any;
} => {
  const { lang } = useDataContext();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<any>({});
  const [error, setError] = useState<any>({});

  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);
    const fetchEpisodes = async (serieId: number, seasonNumber: number) => {
      try {
        console.log(`FETCH URL: https://api.themoviedb.org/3/tv/${serieId}/season/${seasonNumber}?language=${lang}-${lang}`)
        const response = await fetch(`https://api.themoviedb.org/3/tv/${serieId}/season/${seasonNumber}?language=${lang}-${lang}`, fetchSettings.options);
        const responseJson = await response.json();

        if (isMounted == true) {
          setData(responseJson);
        }
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchEpisodes(props.serieId, props.seasonNumber);
    return () => {
      isMounted = false;
    }
  }, []);
  return { isLoading, data, error };
};

export default useFetchEpisodes;
