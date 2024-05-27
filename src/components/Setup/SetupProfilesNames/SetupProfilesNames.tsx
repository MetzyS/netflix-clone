import { useState } from "react";
import { ProfileConfigurationType } from "../../../types/data";
import BackButton from "../../Signup/BackButton";
import DefaultContainer from "../../ui/DefaultContainer";
import { UserProfile } from "../../../types/user";
import { BiUser } from "react-icons/bi";
import { BiUserPlus } from "react-icons/bi";

import InputName from "./InputName";

const SetupProfilesNames = (props: {
  backButtonFunc: () => void;
  content: ProfileConfigurationType;
  submitFunc: () => void;
  userName: string;
}) => {
  const [profiles, setProfiles] = useState<UserProfile[]>([]);
  const addProfile = (values: UserProfile[]) => {
    values.map((item) => {});
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
        <div className="lg:mt-16 w-full">
          <div className="my-6">
            <p className="font-semibold mb-6 lg:mb-0">
              {props.content.mainProfile}
            </p>
            <InputName
              content={props.content.input}
              id={0}
              icon={<BiUser className="size-8" />}
              value={props.userName}
              //   onChange={}
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
              />
            ))}
          </div>
        </div>
      </div>
    </DefaultContainer>
  );
};

export default SetupProfilesNames;
