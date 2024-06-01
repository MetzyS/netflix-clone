import { FormEvent, Fragment, useState } from "react";
import { LanguageSelectionType } from "../../../types/data";
import BackButton from "../../Signup/BackButton";
import DefaultContainer from "../../ui/DefaultContainer";
import { Form } from "react-router-dom";
import LanguageCheckBox from "./LanguageCheckBox";
import DefaultButton from "../../ui/DefaultButton";

const SetupLanguage = (props: {
  backButtonFunc: () => void;
  content: LanguageSelectionType;
  onSubmit: (languagesId: number[]) => void;
}) => {
  const [selectedLanguage, setSelectedLanguage] = useState<number[]>([0]);

  const handleAddLanguage = (value: number) => {
    setSelectedLanguage((prevSelected) => [...prevSelected, value]);
  };

  const handleRemoveLanguage = (value: number) => {
    setSelectedLanguage(
      selectedLanguage.filter((item) => {
        return item !== value;
      })
    );
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    props.onSubmit(selectedLanguage);
  };
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
          <p className="text-base">
            {props.content.desc[0]}{" "}
            <span className="font-semibold">{props.content.desc[1]}</span>
          </p>
        </div>

        <Form
          className="lg:mt-3 w-full flex flex-col flex-wrap"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="flex flex-col md:block mt-12">
            {props.content.languages.map((item, index) => (
              <Fragment key={`languageCheckbox-${index}`}>
                <LanguageCheckBox
                  lang={item}
                  value={index}
                  onAdd={handleAddLanguage}
                  onRemove={handleRemoveLanguage}
                  defaultLanguage={0}
                />
              </Fragment>
            ))}
          </div>
          <DefaultButton
            type="submit"
            primary={true}
            text={props.content.button}
            className="w-full lg:self-end lg:w-1/2 mt-6 py-4 px-16 rounded-sm"
          ></DefaultButton>
        </Form>
      </div>
    </DefaultContainer>
  );
};

export default SetupLanguage;
