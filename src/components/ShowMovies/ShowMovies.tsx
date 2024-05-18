import Header from "../Header/Header";
import DataType from "../../types/data";
import { UserType } from "../../types/user";

const ShowMovies = (props: {
  lang: string;
  content: DataType;
  user: UserType | undefined;
}) => {
  return (
    <>
      <div className="w-screen overflow-hidden pr-4">
        <Header content={props.content.header} className="p-6" />
      </div>
    </>
  );
};
export default ShowMovies;
