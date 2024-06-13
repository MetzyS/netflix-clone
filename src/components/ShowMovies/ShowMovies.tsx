import { useDataContext } from "../../layouts/RootLayout";
import { useEffect, useState } from "react";
import DefaultContainer from "../ui/DefaultContainer";
import { useLocale } from "../../hooks/useLocale";
import ProfileChoice from "./ProfileChoice.tsx/ProfileChoice";
import ShowBackdrop from "./TopShowBanner/ShowBackdrop";
import CustomSection from "./CustomSection/CustomSection";
import SkeletonShowBackdrop from "./Skeleton/SkeletonShowBackdrop";
import { fetchSettings } from "../../hooks/fetchSettings";
import { BackdropVideoInfoType } from "../../types/data";

const ShowMovies = (props: { selectedProfile: undefined | number }) => {
  const {
    setWhiteTheme,
    lang,
    user,
    handleSaveSelectedProfile,
    fetchedPopularShows,
  } = useDataContext();
  const { content, isLoading } = useLocale("ShowMovies", lang);
  const [profile, setProfile] = useState<undefined | number>(
    props.selectedProfile
  );
  const [nb, setNb] = useState<number>(() => {
    return Math.floor(Math.random() * 10);
  });
  const [backdropVideoInfos, setBackdropVideoInfos] =
    useState<null | BackdropVideoInfoType>(null);

  // if (!fetchedPopularShows.dataIsLoading) {
  //   const { videoData } = useFetchVideo(
  //     fetchedPopularShows.data[0].results[nb].id
  //   );
  //   console.log(videoData);
  // }

  useEffect(() => {
    if (
      !fetchedPopularShows.dataIsLoading &&
      fetchedPopularShows.error === null
    ) {
      const fetchVideo = async (id: number) => {
        try {
          const result = await fetch(
            `https://api.themoviedb.org/3/tv/${id}/videos?language=en-US`,
            fetchSettings.options
          );
          const response = await result.json();
          console.log(response);
          setBackdropVideoInfos(response);
        } catch (err: any) {
          throw new Error(err.message);
        }
      };
      fetchVideo(fetchedPopularShows.data[0].results[nb].id);
    }
  }, [fetchedPopularShows.dataIsLoading]);

  const handleSelectedProfile = (id: number): void => {
    setProfile(id);
    handleSaveSelectedProfile(id);
  };

  useEffect(() => {
    const randomNumber = () => {
      const nb = Math.floor(Math.random() * 10);
      setNb(nb);
      return nb;
    };
    randomNumber();
    setWhiteTheme(false);
  }, []);

  return (
    <>
      <DefaultContainer className="w-screen overflow-hidden">
        {isLoading ? (
          <SkeletonShowBackdrop error={fetchedPopularShows.error} />
        ) : user && profile === undefined ? (
          <ProfileChoice
            content={content.profileChoice}
            profiles={user.profiles}
            onChange={handleSelectedProfile}
          />
        ) : (
          <>
            {fetchedPopularShows.dataIsLoading ||
            fetchedPopularShows.error != null ? (
              <SkeletonShowBackdrop error={fetchedPopularShows.error} />
            ) : (
              <>
                <ShowBackdrop
                  showData={fetchedPopularShows.data[0].results[nb]}
                  content={content.topShowBanner}
                  backdropVideoInfos={backdropVideoInfos}
                />
                <CustomSection
                  title={content.sections[0].title}
                  data={fetchedPopularShows.data[0].results}
                />
              </>
            )}
          </>
        )}
      </DefaultContainer>
    </>
  );
};
export default ShowMovies;
