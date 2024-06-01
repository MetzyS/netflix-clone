import { ChangeEvent, Fragment, ReactElement, useState } from "react";
import { useDataContext } from "../../../layouts/RootLayout";
import { InfoBoxType, KidsProfileType, isKidType } from "../../../types/data";
import BackButton from "../../Signup/BackButton";
import InfoBox from "../InfoBox/InfoBox";
import DefaultButton from "../../ui/DefaultButton";
import DefaultContainer from "../../ui/DefaultContainer";
import imgKidsFr from "../../../assets/kids-fr.png";
import imgKidsEn from "../../../assets/kids-en.png";
import ProfileItem from "./ProfileItem";
import { UserProfile } from "../../../types/user";

const SetupProfilesIsAdult = (props: {
  backButtonFunc: () => void;
  onSubmit: (profile: UserProfile[]) => void;
  content: KidsProfileType;
  icons: ReactElement[];
  infoBoxContent: InfoBoxType;
  infoBoxIcons: ReactElement[];
}) => {
  const emptyProfilesLength = { length: 4 };
  const { user, lang } = useDataContext();
  const [savedProfiles, setSavedProfiles] = useState(user!.profiles);
  const defaultKidValues: isKidType = savedProfiles.reduce((acc, profile) => {
    acc[profile.id] = !profile.isAdult;
    return acc;
  }, {} as isKidType);
  const [isKid, setIsKid] = useState<isKidType>(defaultKidValues);

  const handleIsKid = (
    e: ChangeEvent<HTMLInputElement>,
    id: keyof isKidType,
    value: boolean
  ) => {
    setIsKid((prevState) => ({ ...prevState, [id]: value }));
  };

  const handleSaveChanges = () => {
    let updatedProfiles: UserProfile[] = [];
    Object.keys(isKid).map((item) => {
      // Object keys retourne un tableau de string, même si les keys sont des nombres
      const id = Number(item);
      updatedProfiles.push({
        id: id,
        username: savedProfiles[id].username,
        isAdult: !isKid[id],
        avatarUrl: "",
      });
    });
    props.onSubmit(updatedProfiles);
  };

  const bulletListColors = ["bg-green-600", "bg-yellow-400", "bg-pink-400"];
  let Kidsimg;
  switch (lang) {
    case "fr":
      Kidsimg = imgKidsFr;
      break;
    case "en":
      Kidsimg = imgKidsEn;
      break;
    default:
      Kidsimg = imgKidsFr;
  }
  return (
    <DefaultContainer className="mb-16">
      <div className="block lg:flex max-w-[1000px] sm:px-12 m-auto">
        <div className="lg:w-2/3 lg:mr-24">
          <BackButton onClick={props.backButtonFunc} />
          <p className="flex gap-1 uppercase mt-4 text-sm text-neutral-800">
            {props.content.stepWord}
            <span className="font-semibold">{props.content.step}</span>
            {props.content.ofWord}
            <span className="font-semibold">{props.content.maxStep}</span>
          </p>
          <h1 className="signup-title font-bold lg:text-4xl">
            {props.content.title}
          </h1>
          <ul className="text-base mt-6">
            {props.content.list.map((item, index) => (
              <Fragment key={`descList-${index}`}>
                <li className="font-semibold lg:font-bold flex items-center gap-2 lg:text-lg">
                  <span
                    className={`block rounded-full size-3 ${bulletListColors[index]}`}
                  ></span>
                  {item.title}
                </li>
                <li className="mb-3 ml-5">{item.desc}</li>
              </Fragment>
            ))}
          </ul>
          <img src={Kidsimg} alt="" />
        </div>
        <div className="flex flex-col w-full lg:mt-16 ">
          <p className="my-6 font-semibold">{props.content.mainProfile}</p>
          <div className="flex items-center mb-4">
            <span className="mr-3">{props.icons[0]}</span>
            <div className="border border-neutral-400 p-3 flex bg-stone-100 rounded-sm relative w-full">
              <span className="absolute text-xs top-0.5 text-neutral-500">
                {props.content.input}
              </span>
              <span className="font-semibold pt-3">
                {savedProfiles[0].username}
              </span>
            </div>
          </div>
          <p className="my-6 font-semibold">{props.content.addProfiles}</p>
          {/* Si aucun profil supplémentaire n'a été enregistré */}
          {savedProfiles.length == 1 && (
            <span className="mb-3 italic">{props.content.noProfiles}</span>
          )}
          {savedProfiles.length == 1 &&
            Array.from({ length: emptyProfilesLength.length }).map(
              (_, index) => (
                <Fragment key={`emptyProfile-${index}`}>
                  <ProfileItem
                    icon={props.icons[1]}
                    label={props.content.input}
                    text={props.content.kids}
                    username=""
                    checkbox={false}
                    isEmpty={true}
                    isEmptyText={props.content.empty}
                    isKid={false}
                  />
                </Fragment>
              )
            )}

          {savedProfiles.map((profile, index) => {
            if (index !== 0) {
              return (
                <ProfileItem
                  key={`profile-${index}`}
                  icon={props.icons[1]}
                  id={profile.id}
                  label={props.content.input}
                  text={props.content.kids}
                  username={profile.username}
                  isEmpty={false}
                  checkbox={true}
                  isEmptyText={props.content.empty}
                  onCheck={handleIsKid}
                  isKid={isKid[profile.id]}
                />
              );
            }
          })}
          <div className="sm:ml-10 flex flex-col mt-4">
            <InfoBox
              content={props.infoBoxContent}
              icons={props.infoBoxIcons}
            />
            <DefaultButton
              primary={true}
              className="w-full p-4 rounded-sm mt-6"
              text={props.content.button}
              onClick={handleSaveChanges}
            />
          </div>
        </div>
      </div>
    </DefaultContainer>
  );
};

export default SetupProfilesIsAdult;
