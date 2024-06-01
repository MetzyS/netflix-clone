import InputSpinner from "../../Form/InputSpinner";
import DefaultContainer from "../../ui/DefaultContainer";
import SetupTopBanner from "../../../assets/setup-top-banner.png";
import SetupBotBanner from "../../../assets/setup-bot-banner.png";

const SetupProfileHomepage = (props: {
  content: {
    title: string;
  };
  saveInfos: () => void;
}) => {
  props.saveInfos();
  return (
    <>
      <DefaultContainer className="h-full">
        <div className="relative max-w-[1000px] m-auto flex flex-col">
          <img
            src={SetupTopBanner}
            alt=""
            className="-mt-16 h-[300px] object-cover m-auto"
          />
          <div className="mt-6 lg:my-16">
            <h1 className="text-center font-semibold text-xl">
              {props.content.title}
            </h1>
            <InputSpinner
              className="text-white fill-red-500 mt-2"
              size="size-14"
            />
          </div>
          <img
            src={SetupBotBanner}
            alt=""
            className="h-[300px] object-cover m-auto"
          />
        </div>
      </DefaultContainer>
    </>
  );
};

export default SetupProfileHomepage;
