import { useEffect, useState } from "react";
import { InfoBoxType, ProfileConfigurationType } from "../../../types/data";
import BackButton from "../../Signup/BackButton";
import DefaultContainer from "../../ui/DefaultContainer";
import { UserProfile } from "../../../types/user";
import { BiUser } from "react-icons/bi";
import { BiUserPlus } from "react-icons/bi";

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

  useEffect(() => {
    console.log(profiles);
  }, [profiles]);

  const handleValidInputs = (id: number, isValid: boolean | undefined) => {
    setAreValid((prevState) => ({ ...prevState, [id]: isValid }));
  };

  const handleProfiles = (id: number, name: string) => {
    setProfiles((prevProfiles) => ({ ...prevProfiles, [id]: name }));
  };

  const handleSubmitProfiles = (values: { [key: number]: string }) => {
    // Récupère les valeurs du state "profiles", crée les profiles dans localStorage
    let savedProfiles: UserProfile[] = [];
    Object.values(values).map((profile, index) => {
      if (profile != "") {
        savedProfiles.push({
          id: index,
          username: profile,
          isAdult: true,
          avatarUrl: "",
        });
      }
    });
    handleCreateUser([{ key: "profiles", value: savedProfiles }]);
  };

  const maxProfiles = [1, 2, 3, 4];
  return (
    <DefaultContainer>
      <div className="block lg:flex max-w-[1000px] m-auto">
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
            <p className="font-semibold mb-6 lg:mb-0">
              {props.content.mainProfile}
            </p>
            <InputName
              content={props.content.input}
              profileId={0}
              icon={<BiUser className="size-8" />}
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
                icon={<BiUserPlus className="size-8" />}
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
              showPopupFunc={() => console.log("popup")}
            />
            <DefaultButton
              type="submit"
              primary={true}
              text={props.content.button}
              className="h-14 mt-6 w-full lg:w-1/3 lg:self-end rounded-sm disabled:cursor-default disabled:bg-stone-400"
              disabled={!isFormValid}
              onClick={() => console.log(areValid)}
            />
          </div>
        </Form>
      </div>
    </DefaultContainer>
  );
};

export default SetupProfilesNames;
