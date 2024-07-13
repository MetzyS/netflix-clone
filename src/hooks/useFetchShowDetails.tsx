import { useEffect, useState } from "react";
import { ResultDetailsType } from "../types/data";
import { fetchSettings } from "./fetchSettings";

const useFetchShowDetails = (
  id: number
): {
  data: ResultDetailsType | undefined;
  dataIsLoading: boolean;
} => {
  const [data, setData] = useState<ResultDetailsType | undefined>();
  const [dataIsLoading, setDataIsLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;
    setDataIsLoading(true);

    const fetchDetails = async (id: number) => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/tv/${id}?language=en-US`,
          fetchSettings.options
        );
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

    fetchDetails(id);

    return () => {
      isMounted = false;
    };
  }, []);

  return { data, dataIsLoading };
};

export default useFetchShowDetails;
