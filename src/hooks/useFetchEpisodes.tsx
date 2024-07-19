import { useEffect, useState } from "react";
import { fetchSettings } from "./fetchSettings";

const useFetchEpisodes = (props: {
  serieId: number;
  seasonNumber: number;
}): {
  isLoading: boolean;
  data: any;
  error: any;
} => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<any>({});
  const [error, setError] = useState<any>({});

  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);
    const fetchEpisodes = async (serieId: number, seasonNumber: number) => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/tv/${serieId}/season/${seasonNumber}`, fetchSettings.options);
        const responseJson = await response.json();

        if (isMounted == true) {
          setData(responseJson);
        }
      } catch (err) {
        setError(err);
      }
    };
    fetchEpisodes(props.serieId, props.seasonNumber);
  }, []);
  return { isLoading, data, error };
};

export default useFetchEpisodes;
