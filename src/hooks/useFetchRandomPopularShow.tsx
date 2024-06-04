import { useState, useEffect } from "react";
import { DataType, ImageCollectionType } from "../types/data";

const useFetchRandomPopularShowImages = (
  fetchedData: DataType[]
): {
  imageData: ImageCollectionType[];
  imageDataIsLoading: boolean;
} => {
  const apiKey = import.meta.env.VITE_TMDB_AUTH_TOKEN;
  const [imageData, setImageData] = useState<ImageCollectionType[]>([]);

  const [imageDataIsLoading, setDataIsLoading] = useState<boolean>(true);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
  };

  useEffect(() => {
    const random = Math.floor(Math.random() * 10);
    let randomSerie = fetchedData[0].results[random].id;
    let isMounted = true;
    setDataIsLoading(true);

    const fetchTopRatedShows = async () => {
      try {
        const responseImages = await fetch(
          `https://api.themoviedb.org/3/tv/${randomSerie}/images`,
          options
        );

        const showImages = await responseImages.json();

        if (isMounted) {
          setImageData([showImages]);
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

  return { imageData, imageDataIsLoading };
};

export default useFetchRandomPopularShowImages;
