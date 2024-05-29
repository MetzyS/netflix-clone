import { ReactElement, useEffect, useState } from "react";
import { InfoBoxType, ProfileConfigurationType } from "../../../types/data";
import BackButton from "../../Signup/BackButton";
import DefaultContainer from "../../ui/DefaultContainer";
import { UserProfile } from "../../../types/user";

import InputName from "./InputName";
import { Form } from "react-router-dom";
import { useDataContext } from "../../../layouts/RootLayout";
import InfoBox from "../InfoBox/InfoBox";
import DefaultButton from "../../ui/DefaultButton";

const SetupProfilesNames = (props: {
  backButtonFunc: () => void;
  content: ProfileConfigurationType;
  submitFunc: () => void;
  userName: string;
  infoBoxContent: InfoBoxType;
  icons: ReactElement[];
  infoBoxIcons: ReactElement[];
}) => {
  const { user, handleCreateUser } = useDataContext();
  const [profiles, setProfiles] = useState<{
    [key: number]: string;
  }>({
    0: user!.username,
    1: "",
    2: "",
    3: "",
    4: "",
  });
  const [areValid, setAreValid] = useState<{
    [key: number]: boolean | undefined;
  }>({
    0: false,
    1: true,
    2: true,
    3: true,
    4: true,
  });
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  useEffect(() => {
    const allInputsAreValid = Object.values(areValid).every(
      (value) => value == true
    );
    setIsFormValid(allInputsAreValid);
  }, [areValid]);

  const handleValidInputs = (id: number, isValid: boolean | undefined) => {
    setAreValid((prevState) => ({ ...prevState, [id]: isValid }));
  };

  const handleProfiles = (id: number, name: string) => {
    setProfiles((prevProfiles) => ({ ...prevProfiles, [id]: name }));
  };

  const handleSubmitProfiles = (values: { [key: number]: string }) => {
    // Récupère les valeurs du state "profiles", crée les profiles dans localStorage
    let savedProfiles: UserProfile[] = [];
    let reorganizedId = 0;
    Object.values(values).map((profile) => {
      // J'utilise reorganizedId comme ID car l'utilisateur peut skip un input
      if (profile != "") {
        savedProfiles.push({
          id: reorganizedId,
          username: profile,
          isAdult: true,
          avatarUrl: "",
        });
        reorganizedId += 1;
      }
    });
    handleCreateUser([{ key: "profiles", value: savedProfiles }]);
    handleCreateUser([{ key: "username", value: savedProfiles[0].username }]);
    props.submitFunc();
  };

  const maxProfiles = [1, 2, 3, 4];
  return (
    <DefaultContainer>
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
          <p className="text-base">{props.content.desc}</p>
          <ul>
            {props.content.descList.map((item, index) => (
              <li
                className="list-disc ml-8 my-2 leading-tight"
                key={`descLi-${index}`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <Form
          onSubmit={(e) => {
            e.preventDefault(), handleSubmitProfiles(profiles);
          }}
          className="lg:mt-16 w-full"
        >
          <div className="my-6">
            <p className="font-semibold mt-12 lg:mt-0 mb-6 lg:mb-0">
              {props.content.mainProfile}
            </p>
            <InputName
              content={props.content.input}
              profileId={0}
              icon={props.icons[0]}
              value={props.userName}
              required={true}
              mainUser={true}
              htmlFor="mainUsername"
              handleValidInput={handleValidInputs}
              saveProfileName={handleProfiles}
            />
          </div>
          <div className="my-8">
            <p className="font-semibold mb-6 lg:mb-0">
              {props.content.addProfiles}
            </p>
            {maxProfiles.map((item, index) => (
              <InputName
                content={props.content.input}
                key={`addprofile-${index}`}
                profileId={item}
                icon={props.icons[1]}
                htmlFor={`username-${index}`}
                handleValidInput={handleValidInputs}
                saveProfileName={handleProfiles}
              />
            ))}
          </div>
          <div className="sm:ml-10 flex flex-col">
            {" "}
            <InfoBox
              content={props.infoBoxContent}
              icons={props.infoBoxIcons}
            />
            <DefaultButton
              type="submit"
              primary={true}
              text={props.content.button}
              className="h-14 mt-6 w-full lg:w-1/3 lg:self-end rounded-sm disabled:cursor-default disabled:bg-stone-400"
              disabled={!isFormValid}
            />
          </div>
        </Form>
      </div>
    </DefaultContainer>
  );
};

export default SetupProfilesNames;
