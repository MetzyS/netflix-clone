import profilesFr from "../../../assets/profiles-fr.png";
import profilesEn from "../../../assets/profiles-en.png";

const Profiles = (props: { lang: string }) => {
  let img;
  switch (props.lang) {
    case "fr":
      img = profilesFr;
      break;
    case "en":
      img = profilesEn;
      break;
    default:
      img = profilesFr;
  }
  return (
    <>
      <img src={img} alt="" />
    </>
  );
};

export default Profiles;
