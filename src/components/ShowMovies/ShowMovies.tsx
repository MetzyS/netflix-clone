import { useDataContext } from "../../layouts/RootLayout";
import { useEffect, useState } from "react";
import DefaultContainer from "../ui/DefaultContainer";
import { useLocale } from "../../hooks/useLocale";
import ProfileChoice from "./ProfileChoice.tsx/ProfileChoice";
import ShowBackdrop from "./TopShowBanner/ShowBackdrop";
import CustomSection from "./CustomSection/CustomSection";
import SkeletonShowBackdrop from "./Skeleton/SkeletonShowBackdrop";

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

  const handleSelectedProfile = (id: number): void => {
    setProfile(id);
    handleSaveSelectedProfile(id);
  };

  const randomNumber = () => {
    return Math.floor(Math.random() * 10);
  };

  useEffect(() => {
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
                  showData={fetchedPopularShows.data[0].results[randomNumber()]}
                  content={content.topShowBanner}
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
