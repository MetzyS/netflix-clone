import data from "../../data/herocard.json";

const Herocard = (props: { lang: string }) => {
  let content;
  switch (props.lang) {
    case "fr":
      content = data.fr;
      break;
    case "en":
      content = data.en;
      break;
    default:
      content = data.fr;
  }
  return (
    <div>
      <span className="text-6xl font-bold">{content.title}</span>
    </div>
  );
};

export default Herocard;
