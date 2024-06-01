import { useDataContext } from "../../../layouts/RootLayout";
import { ProfileDetailsType } from "../../../types/data";
import BackButton from "../../Signup/BackButton";
import DefaultContainer from "../../ui/DefaultContainer";
import BirthDatePicker from "./BirthDatePicker";

const SetupProfileDetails = (props: {
  backButtonFunc: () => void;
  content: ProfileDetailsType;
  onSubmit: (birthDetails: { date: string; gender: number }) => void;
}) => {
  const { user } = useDataContext();
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
            {user!.username}
            {props.content.title}
          </h1>
          <p className="text-base">{props.content.desc}</p>
        </div>
        <BirthDatePicker
          inputText={props.content.birthDate}
          label={props.content.birthDateLabel}
          gender={props.content.gender}
          genderList={props.content.genderList}
          months={props.content.month}
          select={props.content.select}
          btn={props.content.button}
          onSubmit={props.onSubmit}
        />
      </div>
    </DefaultContainer>
  );
};

export default SetupProfileDetails;
