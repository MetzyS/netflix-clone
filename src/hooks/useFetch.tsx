import { useState, useEffect } from "react";

const useFetch = (): {
  data: any;
  dataIsLoading: boolean;
} => {
  const [data, setData] = useState<any>(null);
  const [dataIsLoading, setDataIsLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;
    setDataIsLoading(true);

    const fetchData = async () => {
      const response = await fetch("https://api.tvmaze.com/shows");
      const json = await response.json();
      setData(json);
      setDataIsLoading(false);
    };
    fetchData();
    return () => {
      isMounted = false;
    };
  }, []);

  return { data, dataIsLoading };
};
export default useFetch;
