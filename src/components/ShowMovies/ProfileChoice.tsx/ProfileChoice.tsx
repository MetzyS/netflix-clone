import { ProfileChoiceType } from "../../../types/data";
import { UserProfile } from "../../../types/user";
import DefaultContainer from "../../ui/DefaultContainer";
import ProfileIconOne from "../../../assets/profile-0.png";
import ProfileIconTwo from "../../../assets/profile-1.png";
import ProfileIconThree from "../../../assets/profile-2.png";
import ProfileIconFour from "../../../assets/profile-3.png";
import ProfileIconFive from "../../../assets/profile-4.png";
import { IoMdAddCircle } from "react-icons/io";

const ProfileChoice = (props: {
  content: ProfileChoiceType;
  profiles: UserProfile[];
  onChange: (id: number) => void;
}) => {
  const profileIcon = [
    ProfileIconOne,
    ProfileIconTwo,
    ProfileIconThree,
    ProfileIconFour,
    ProfileIconFive,
  ];
  return (
    <DefaultContainer className="absolute top-0 right-0 left-0 bottom-0 bg-neutral-800 flex items-center justify-center">
      <div className="flex flex-col m-auto max-w-[550px]">
        <h1 className="text-center font-semibold text-3xl">
          {props.content.title}
        </h1>
        <div className="flex gap-2 w-full flex-wrap justify-center mt-8">
          {props.profiles.map((item, index) => (
            <button
              type="button"
              className="text-center text-neutral-400 hover:text-white group/item relative"
              onClick={() => props.onChange(item.id)}
              key={`profileBtn-${item.id}`}
            >
              <img
                src={profileIcon[index]}
                alt=""
                className="max-w-[100px] rounded-md border border-transparent group-hover/item:border-white"
              />
              {item.isAdult ? (
                <></>
              ) : (
                <span className="absolute font-bold text-red-500 bottom-7 right-2 drop-shadow-[1px_1px_3px_rgba(255,255,255,1)]">
                  kids
                </span>
              )}
              <span className="text-sm">{item.username}</span>
            </button>
          ))}
          {props.profiles.length < 5 && (
            <button
              type="button"
              className="flex flex-col justify-between max-w-[100px] h-[120] text-sm group/button ml-4 text-neutral-400 hover:text-white"
            >
              <IoMdAddCircle className="m-auto size-20 text-neutral-600 group-hover/button:text-neutral-300" />
              <span className="mx-auto">{props.content.addButton}</span>
            </button>
          )}
        </div>
        <button
          type="button"
          className="mt-6 py-2 px-4 border border-neutral-400 w-max m-auto text-sm text-neutral-400 hover:border-white hover:text-white"
        >
          {props.content.manageButton}
        </button>
      </div>
    </DefaultContainer>
  );
};

export default ProfileChoice;
