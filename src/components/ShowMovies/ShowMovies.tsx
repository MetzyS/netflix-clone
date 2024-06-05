import { useDataContext } from "../../layouts/RootLayout";
import { useEffect, useState } from "react";
import DefaultContainer from "../ui/DefaultContainer";
import { useLocale } from "../../hooks/useLocale";
import ProfileChoice from "./ProfileChoice.tsx/ProfileChoice";
import ShowBackdrop from "./TopShowBanner/ShowBackdrop";

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
          <span>loading</span>
        ) : user && profile === undefined ? (
          <ProfileChoice
            content={content.profileChoice}
            profiles={user.profiles}
            onChange={handleSelectedProfile}
          />
        ) : (
          <>
            {fetchedPopularShows.dataIsLoading ? (
              <div>loading</div>
            ) : (
              <ShowBackdrop
                showData={fetchedPopularShows.data[0].results[randomNumber()]}
                // title={fetchedPopularShows[0].results[1].name}
                // backdropImageUrl={`url(https://image.tmdb.org/t/p/original${fetchedPopularShows[0].results[1].backdrop_path})`}
                content={content.topShowBanner}
              />
            )}
          </>
        )}
      </DefaultContainer>
    </>
  );
};
export default ShowMovies;
