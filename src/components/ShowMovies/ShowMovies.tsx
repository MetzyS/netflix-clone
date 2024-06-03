import { useDataContext } from "../../layouts/RootLayout";
import { useEffect, useState } from "react";
import DefaultContainer from "../ui/DefaultContainer";
import { useLocale } from "../../hooks/useLocale";
import ProfileChoice from "./ProfileChoice.tsx/ProfileChoice";

const ShowMovies = (props: { selectedProfile: undefined | number }) => {
  const { setWhiteTheme, lang, user, handleSaveSelectedProfile } =
    useDataContext();
  const { content, isLoading } = useLocale("ShowMovies", lang);
  const [profile, setProfile] = useState<undefined | number>(
    props.selectedProfile
  );

  const handleSelectedProfile = (id: number): void => {
    setProfile(id);
    handleSaveSelectedProfile(id);
  };

  useEffect(() => {
    setWhiteTheme(false);
  }, []);
  return (
    <>
      <DefaultContainer className="w-screen overflow-hidden pt-20 md:px-12">
        {isLoading ? (
          <span>loading</span>
        ) : user && profile === undefined ? (
          <ProfileChoice
            content={content.profileChoice}
            profiles={user.profiles}
            onChange={handleSelectedProfile}
          />
        ) : (
          <div className="bg-red-500 w-full h-96">
            profile selected: {props.selectedProfile}
          </div>
        )}
      </DefaultContainer>
    </>
  );
};
export default ShowMovies;
