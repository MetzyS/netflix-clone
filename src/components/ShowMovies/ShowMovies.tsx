import { useDataContext } from "../../layouts/RootLayout";
import { Fragment, useEffect, useState } from "react";
import DefaultContainer from "../ui/DefaultContainer";
import { useLocale } from "../../hooks/useLocale";
import ProfileChoice from "./ProfileChoice.tsx/ProfileChoice";
import ShowBackdrop from "./TopShowBanner/ShowBackdrop";
import CustomSection from "./CustomSection/CustomSection";
import SkeletonShowBackdrop from "./Skeleton/SkeletonShowBackdrop";
import { fetchSettings } from "../../hooks/fetchSettings";
import { BackdropVideoInfoType } from "../../types/data";
import { ShowDetailsType } from "../../types/useLocaleTypes/ImportedLocaleTypes";

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
  const [backdropVideoInfos, setBackdropVideoInfos] =
    useState<null | BackdropVideoInfoType>(null);

  useEffect(() => {
    setWhiteTheme(false);
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
          setBackdropVideoInfos(response);
        } catch (err: any) {
          throw new Error(err.message);
        }
      };
      fetchVideo(fetchedPopularShows.data[0].results[0].id);
    }
  }, [fetchedPopularShows.dataIsLoading]);

  const handleSelectedProfile = (id: number): void => {
    setProfile(id);
    handleSaveSelectedProfile(id);
  };

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
                  showData={fetchedPopularShows.data[0].results[0]}
                  content={content.topShowBanner}
                  backdropVideoInfos={backdropVideoInfos}
                />
                <div
                  className="-mt-[3vh]
lg:-mt-[10vw] xl:-mt-[15vw]"
                >
                  {fetchedPopularShows.data.map((page, index) => {
                    if (page.results.length != 0) {
                      return (
                        <Fragment key={`customSection-${index}`}>
                          <CustomSection
                            content={{
                              title: content.sections[index].title,
                              explore: content.exploreBtn,
                              playButton: content.topShowBanner.playButton,
                            }}
                            showDetails={content.showDetails as ShowDetailsType}
                            data={page.results}
                          />
                        </Fragment>
                      );
                    }
                  })}
                </div>
              </>
            )}
          </>
        )}
      </DefaultContainer>
    </>
  );
};
export default ShowMovies;
