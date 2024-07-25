import { useEffect, useState } from "react";
// import { DataType } from "../types/data";
import { fetchSettings } from "./fetchSettings";

const useFetchVideo = (
  id: number
): {
  videoData: any;
  videoDataIsLoading: boolean;
  errrrr: Error | null;
} => {
  const [videoData, setVideoData] = useState([]);
  const [videoDataIsLoading, setVideoDataIsLoading] = useState<boolean>(true);
  const [errrrr, setErrrrr] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;
    setVideoDataIsLoading(true);

    const fetchVideo = async (id: number) => {
      try {
        const result = await fetch(
          `https://api.themoviedb.org/3/tv/${id}/videos?language=en-US`,
          fetchSettings.options
        );
        const response = await result.json();
        isMounted && setVideoData(response);
      } catch (err: any) {
        isMounted && setErrrrr(Error(err.message));
      } finally {
        isMounted && setVideoDataIsLoading(false);
      }
    };
    fetchVideo(id);
    return () => {
      isMounted = false;
    };
  }, []);

  return { videoData, videoDataIsLoading, errrrr };
};

export default useFetchVideo;
