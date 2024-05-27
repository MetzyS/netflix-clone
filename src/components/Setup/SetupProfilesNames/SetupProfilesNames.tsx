import { useState } from "react";
import { InfoBoxType, ProfileConfigurationType } from "../../../types/data";
import BackButton from "../../Signup/BackButton";
import DefaultContainer from "../../ui/DefaultContainer";
import { UserProfile } from "../../../types/user";
import { BiUser } from "react-icons/bi";
import { BiUserPlus } from "react-icons/bi";

import InputName from "./InputName";
import { Form } from "react-router-dom";
import { useDataContext } from "../../../layouts/RootLayout";
import { usernameValidate } from "../../../helpers/InputValidation";
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
  const [profiles, setProfiles] = useState<UserProfile[]>([]);
  const [mainUsername, setMainUsername] = useState(user!.username);
  const [mainUsernameIsValid, setMainUsernameIsValid] = useState(true);

  const handleChangeMainUsername = (value: string) => {
    setMainUsernameIsValid(usernameValidate(value));
    setMainUsername(value);
  };

  const handleSaveMainUsername = (value: string) => {
    if (mainUsernameIsValid) {
      handleCreateUser([{ key: "username", value: mainUsername }]);
    }
  };

  const addProfile = (name: string) => {
    setProfiles((prevProfiles) => [
      ...prevProfiles,
      { username: name, avatarUrl: "", isAdult: true },
    ]);
  };

  const removeProfile = (name: string) => {
    setProfiles(
      profiles.filter((profile) => {
        return profile.username !== name;
      })
    );
  };

  const changeUsername = (name: string) => {
    handleCreateUser([{ key: "username", value: name }]);
  };

  const testProfiles = (profiles: UserProfile[]) => {};
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
            e.preventDefault(), console.log("submit");
          }}
          className="lg:mt-16 w-full"
        >
          <div className="my-6">
            <p className="font-semibold mb-6 lg:mb-0">
              {props.content.mainProfile}
            </p>
            <InputName
              content={props.content.input}
              id={0}
              icon={<BiUser className="size-8" />}
              value={props.userName}
              onChange={handleChangeMainUsername}
              required={true}
              htmlFor="mainUsername"
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
                id={item}
                icon={<BiUserPlus className="size-8" />}
                onChange={addProfile}
                htmlFor={`username-${index}`}
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
              className="h-14 mt-6 w-full lg:w-1/3 lg:self-end rounded-sm"
            />
          </div>
        </Form>
      </div>
    </DefaultContainer>
  );
};

export default SetupProfilesNames;
