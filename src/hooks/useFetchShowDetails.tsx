import { useEffect, useState } from "react";
import { ResultType } from "../types/data";
import { fetchSettings } from "./fetchSettings";

const useFetchShowDetails = (props: {
  id: number;
}): {
  data: ResultType[];
  dataIsLoading: boolean;
} => {
  const [data, setData] = useState<ResultType[]>([]);
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

    fetchDetails(props.id);

    return () => {
      isMounted = false;
    };
  }, []);

  return { data, dataIsLoading };
};

export default useFetchShowDetails;
