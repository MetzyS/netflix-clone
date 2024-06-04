import { useEffect, useState } from "react";
import { DataType, TopShowBannerType } from "../../../types/data";

const TopShowBanner = (props: {
  fetchedData: DataType[];
  lang: string;
  content: TopShowBannerType;
}) => {
  useEffect(() => {
    console.log(props.fetchedData);
    handleLanguage();
  }, [props.lang]);
  const [language, setLanguage] = useState(0);
  const handleLanguage = () => {
    switch (true) {
      case props.lang == "fr":
        setLanguage(0);
        break;
      case props.lang != "fr":
        setLanguage(1);
        break;
      default:
        setLanguage(0);
    }
  };
  return (
    <>
      <div
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${props.fetchedData[language].results[1].backdrop_path})`,
          maskImage:
            "linear-gradient(to bottom, #000 0%, #000 70% ,rgba(0,0,0,0))",
          backgroundPosition: "top",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="w-full h-[50vh] relative"
      >
        <div className="absolute flex items-center size-full bg-gradient-radial px-4 lg:px-14">
          <span>test</span>
        </div>
      </div>
      {/* <div className="h-[56.25vw] relative">
        <div
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${props.fetchedData[language].results[0].backdrop_path)}`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="h-[50%] py-[30%]"
        >
          <div className="absolute top-0 bottom-0 right-0 left-0 bg-[radial-gradient(circle,_rgba(255,255,255,0)_0%,_rgba(0,0,0,0.7)_100%)]">
            <p className="mt-[20%]">
              <span>icon</span>
              <span>
                {props.content.title[0]}1{props.content.title[1]}
              </span>
            </p>
            <p className="text-sm w-[75%] lg:w-[30%]">
              {props.fetchedData[language].results[0].overview}
            </p>
          </div>
        </div>
        <div>
          <div>
            <button>Lecture</button>
            <button>Plus d'infos</button>
          </div>
          <div>
            <span>13+</span>
          </div>
        </div>
      </div> */}
    </>
  );
};
export default TopShowBanner;
