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
          backgroundImage: `url(https://image.tmdb.org/t/p/original${props.fetchedData[language].results[0].backdrop_path})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="py-40"
      >
        <div>
          <p>
            <span>icon</span>
            <span>
              {props.content.title[0]}1{props.content.title[1]}
            </span>
          </p>
          <p>{props.fetchedData[language].results[0].overview}</p>
        </div>
        <div>
          <div>
            <button>Lecture</button>
            <button>Plus d'infos</button>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};
export default TopShowBanner;
