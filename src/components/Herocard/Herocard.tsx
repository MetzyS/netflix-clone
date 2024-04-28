import data from "../../data/herocard.json";
import bg from "../../assets/herobg.jpg";
import DefaultButton from "../ui/DefaultButton";
import { MdArrowForwardIos } from "react-icons/md";

const Herocard = (props: { lang: string }) => {
  let content;
  let height;
  switch (props.lang) {
    case "fr":
      content = data.fr;
      height = "min-h-[42rem]";
      break;
    case "en":
      content = data.en;
      height = "min-h-[38rem]";
      break;
    default:
      content = data.fr;
      height = "min-h-[42rem]";
      break;
  }
  return (
    <>
      <div className="pointer-events-none">
        <div
          className={`absolute ${height} w-full top-0 left-0 right-0 overflow-hidden`}
        >
          <div className="relative top-0 bottom-0 right-0 left-0 h-full"></div>
          <img
            aria-hidden="true"
            src={bg}
            alt=""
            className="absolute top-0 object-cover scale-125 -translate-y-[20%] h-full w-full -z-10"
          />
          <div className="absolute top-0 right-0 bottom-0 left-0 bg-black/40 bg-gradient-to-t from-black/30 to-black/70 w-full h-full -z-10"></div>
        </div>
      </div>
      <div className="pt-10 flex flex-col">
        <h1 className="text-4xl md:text-5xl font-bold leading-snug">
          {content.title}
        </h1>
        <h2 className="text-xl mt-4">{content.subtitle}</h2>
        <div className="mt-6 px-6">
          <form action="">
            <h3 className="text-xl leading-normal">{content.text}</h3>
            <div className="flex flex-col md:flex-row justify-center gap-6 mt-4">
              <div className="flex flex-col border-2 border-neutral-500 rounded-md bg-blue-400/15 px-4 py-1 backdrop-blur-[1px] md:w-full justify-center ring-default">
                <label
                  htmlFor="register-email"
                  className="text-neutral-300 text-sm text-start"
                >
                  {content.email}
                </label>
                <input
                  type="email"
                  autoComplete="email"
                  className="bg-transparent border-none outline-none"
                />
              </div>
              <DefaultButton
                text={content.button}
                className="flex gap-3 text-xl items-center justify-between w-fit self-center md:text-2xl"
                icon={<MdArrowForwardIos className="size-5" />}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Herocard;
