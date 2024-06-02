import { useDataContext } from "../../layouts/RootLayout";
import { useEffect, useState } from "react";
import DefaultContainer from "../ui/DefaultContainer";
import { useLocale } from "../../hooks/useLocale";
import ProfileChoice from "./ProfileChoice.tsx/ProfileChoice";

const ShowMovies = () => {
  const { setWhiteTheme, lang, user, handleSaveSelectedProfile } =
    useDataContext();
  const { content, isLoading } = useLocale("ShowMovies", lang);
  const [selectedProfile, setSelectedProfile] = useState<undefined | number>(
    user!.selectedProfile
  );

  const handleSelectedProfile = (id: number): void => {
    setSelectedProfile(id);
    {
      handleSaveSelectedProfile(id);
    }
    console.log("selected:", id);
  };
  useEffect(() => {
    setWhiteTheme(false);
  }, []);
  return (
    <>
      <DefaultContainer className="w-screen overflow-hidden px-4 md:px-12 pt-36">
        {isLoading ? (
          <span>loading</span>
        ) : user && selectedProfile === undefined ? (
          <ProfileChoice
            content={content.profileChoice}
            profiles={user.profiles}
            onChange={handleSelectedProfile}
          />
        ) : (
          <div>profile selected: {selectedProfile}</div>
        )}
      </DefaultContainer>
    </>
  );
};
export default ShowMovies;
