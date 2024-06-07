import { ResultType } from "../../../types/data";

const CustomSection = (props: { data: ResultType[]; title: string }) => {
  console.log(props.title);
  return (
    <section className="-mt-[10vh]">
      <h1>{props.title}</h1>
      <div className="flex gap-3 overflow-x-scroll whitespace-nowrap">
        <div className="w-1/2 flex-shrink-0 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 rounded-lg">
          <img
            src={`https://image.tmdb.org/t/p/original/${props.data[0].poster_path}`}
            alt=""
            className="h-fit aspect-video object-cover object-top rounded-lg"
          />
        </div>
        <div className="w-1/2 flex-shrink-0 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 rounded-lg">
          <img
            src={`https://image.tmdb.org/t/p/original/${props.data[0].poster_path}`}
            alt=""
            className="h-fit aspect-video object-cover object-top rounded-lg"
          />
        </div>
        <div className="w-1/2 flex-shrink-0 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 rounded-lg">
          <img
            src={`https://image.tmdb.org/t/p/original/${props.data[0].poster_path}`}
            alt=""
            className="h-fit aspect-video object-cover object-top rounded-lg"
          />
        </div>
        <div className="w-1/2 flex-shrink-0 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 rounded-lg">
          <img
            src={`https://image.tmdb.org/t/p/original/${props.data[0].poster_path}`}
            alt=""
            className="h-fit aspect-video object-cover object-top rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default CustomSection;
