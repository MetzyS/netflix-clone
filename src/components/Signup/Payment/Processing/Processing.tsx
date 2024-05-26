import { useEffect, useState } from "react";
import InputSpinner from "../../../Form/InputSpinner";
import Container from "../Container";
import ThumbsUpAnimation from "../Animations/ThumbsUpAnimation";
import DefaultButton from "../../../ui/DefaultButton";
import { Processing as ProcessingType } from "../../../../types/data";

const Processing = (props: {
  handleSubmitPayment: () => void;
  content: ProcessingType;
}) => {
  const defaultText: string = "";
  const [text, setText] = useState<string>(defaultText);
  const [processingIsLoading, setProcessingIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setProcessingIsLoading(false);
    }, 2000);
    if (processingIsLoading) {
      for (let i = 0; i <= 3; i++) {
        text.length <= 3
          ? setTimeout(() => {
              setText(text + ".");
            }, 500)
          : setText("");
      }
    }
  }, [text]);
  return (
    <div className="mt-16">
      <Container>
        <h1 className="signup-title mt-1 leading-10 sm:text-center w-full">
          {processingIsLoading
            ? `${props.content.checking}${text}`
            : `${props.content.confirmation}`}
        </h1>
        <div className="transition-opacity">
          {processingIsLoading ? (
            <InputSpinner className="mt-12 mx-auto" bg="text-white" />
          ) : (
            <div className="w-full flex flex-col items-center justify-center">
              <ThumbsUpAnimation className="" />
              <DefaultButton
                onClick={props.handleSubmitPayment}
                className="mt-6 text-2xl w-3/4"
                text={props.content.button}
                primary={true}
              />
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};
export default Processing;
