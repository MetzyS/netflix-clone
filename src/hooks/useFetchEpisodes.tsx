import { useEffect, useState } from "react";
import { fetchSettings } from "./fetchSettings";

const useFetchEpisodes = (props: {
  showId: number;
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
    const fetchEpisodes = async (showId: number) => {
      try {
        const response = await fetch("", fetchSettings.options);
        const responseJson = await response.json();

        if (isMounted == true) {
          setData(responseJson);
        }
      } catch (err) {
        setError(err);
      }
    };
  }, []);
  return { isLoading, data, error };
};

export default useFetchEpisodes;
