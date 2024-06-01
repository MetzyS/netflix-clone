import InputSpinner from "../../Form/InputSpinner";
import DefaultContainer from "../../ui/DefaultContainer";
import SetupTopBanner from "../../../assets/setup-top-banner.png";

const SetupProfileHomepage = (props: {
  content: {
    title: string;
  };
}) => {
  return (
    <>
      <DefaultContainer className="h-full">
        <div className="relative max-w-[1000px] m-auto">
          <img
            src={SetupTopBanner}
            alt=""
            className="z-0 -mt-16 h-[300px] object-cover m-auto"
          />
          <h1 className="text-center">{props.content.title}</h1>
          <InputSpinner
            className="text-white fill-red-500 mt-12"
            size="size-14"
          />
          <img src="" alt="" className="w-full bg-red-500" />
        </div>
      </DefaultContainer>
    </>
  );
};

export default SetupProfileHomepage;
