import { useEffect, useState } from "react";
import { fetchSettings } from "./fetchSettings";
import { useDataContext } from "../layouts/RootLayout";
import { ResultEpisodes } from "../types/data";

export type FetchedEpisodesDetails = {
  epDataIsLoading: boolean;
  epData: ResultEpisodes;
  epError: any;
}

const useFetchEpisodes = (props: {
  serieId: number;
  seasonNumber: number;
}
): FetchedEpisodesDetails => {
  const { lang } = useDataContext();
  const [epDataIsLoading, setEpDataIsLoading] = useState<boolean>(true);
  const [epData, setEpData] = useState<any>({});
  const [epError, setEpError] = useState<any>({});

  useEffect(() => {
    let isMounted = true;
    setEpDataIsLoading(true);
    async function fetchEpisodes(serieId: number, seasonNumber: number) {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/tv/${serieId}/season/${seasonNumber}?language=${lang}-${lang}`, fetchSettings.options);
        const responseJson = await response.json();

        if (isMounted == true) {
          setEpData(responseJson);
        }
      } catch (err) {
        setEpError(err);
      } finally {
        setEpDataIsLoading(false);
      }
    };
    fetchEpisodes(props.serieId, props.seasonNumber);
    return () => {
      isMounted = false;
    }
  }, [props.serieId, props.seasonNumber, lang]);
  return { epDataIsLoading, epData, epError };
};

export default useFetchEpisodes;
