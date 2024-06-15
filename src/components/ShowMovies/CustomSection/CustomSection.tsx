import { ResultType } from "../../../types/data";

const CustomSection = (props: { data: ResultType[]; title: string }) => {
  // console.log(props.title);
  return (
    <section className="ml-4 lg:ml-12 z-20 backdrop-blur-[1px] mb-6">
      <h1 className="font-semibold text-lg lg:text-xl xl:text-2xl 2xl:text-3xl my-2">
        {props.title}
      </h1>
      <div className="overflow-visible overflow-x-scroll hide-scrollbar relative">
        <button className="absolute left-0 h-full p-4 rounded-tl-md rounded-bl-md z-30 text-xl font-bold text-transparent bg-transparent hover:bg-black/30 hover:text-white transition-all">
          {"<"}
        </button>
        <ul className="flex justify-between gap-[1vw]">
          {props.data.map((show, index) => {
            console.log(show);
            return (
              <li
                key={`show-${index}`}
                className="w-1/2 flex-shrink-0 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 rounded-lg"
              >
                <button type="button" className="relative flex items-center">
                  <img
                    src={`https://image.tmdb.org/t/p/original/${props.data[index].backdrop_path}`}
                    alt=""
                    className="aspect-[16/9] object-center object-fill rounded-lg"
                  />
                  <span className="absolute top-1/2 left-1/2 text-xl xl:text-2xl 2xl:text-3xl drop-shadow-default text-wrap break-words w-9/12 text-left text-white translate-x-[-50%] translate-y-[-50%]">
                    {show.original_name
                      ? show.original_name
                      : show.original_title}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default CustomSection;
