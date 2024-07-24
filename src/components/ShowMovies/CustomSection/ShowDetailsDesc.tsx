import { ResultDetailsType } from "../../../types/data";
import { ShowDetailsType } from "../../../types/useLocaleTypes/ImportedLocaleTypes";

const ShowDetailsDesc = (props: {
  text: ShowDetailsType;
  averageVote: number;
  data: ResultDetailsType;
}) => {
  return (
    <div className="mt-20 lg:flex lg:justify-between">
      <div className="lg:max-w-[75%]">
        <p className="flex gap-2 flex-wrap text-neutral-400 font-semibold">
          <span className="text-green-500">
            {`${props.text.recommended} ${(props.averageVote * 10).toFixed(
              0
            )} %`}
          </span>
          <span>{props.data.first_air_date.substring(0, 4)}</span>
          <span>{`${props.data.seasons.length} ${props.text.seasons}`} </span>
          <span className="px-2 border text-xs rounded-md">HD</span>
        </p>
        <ul className="flex gap-2 text-neutral-300 font-semibold">
          {props.data.genres.map((genre, index) => (
            <li key={`genre-${index}`}>{genre.name.toLowerCase()}</li>
          ))}
        </ul>

        <p className="mt-4 text-sm lg:max-w-[75%]">{props.data.overview}</p>
      </div>
      <div className="mt-4 lg:mt-0 text-sm lg:w-full lg:ml-12">
        <ul className="flex flex-wrap mb-4">
          <li className="text-neutral-500">{`${props.text.distribution}:`}</li>
          {props.data.production_companies.map((company, index) => (
            <li key={`dist-${index}`} className="ml-2">
              {company.name},
            </li>
          ))}
        </ul>
        <ul className="flex flex-wrap mb-4">
          <li className="text-neutral-500">{`${props.text.genres}:`}</li>
          {props.data.genres.map((genre, index) => (
            <li key={`gnr-${index}`} className="ml-2">
              {genre.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ShowDetailsDesc;
