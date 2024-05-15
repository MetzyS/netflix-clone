import Header from "../Header/Header";
import DataType from "../../types/data";

const ShowMovies = (props: { lang: string; content: DataType }) => {
  return (
    <>
      <div className="w-screen overflow-hidden pr-4">
        <Header content={props.content.header} className="p-6" />
      </div>
    </>
  );
};
export default ShowMovies;
