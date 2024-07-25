import { ResultDetailsType } from "../../../types/data";

const ShowDetailsSeasonSelect = (props: {
  episodeText: string;
  multipleSeasons: boolean;
  season: number | string;
  handleSetSeason: (season: number | string) => void;
  data: ResultDetailsType;
}) => {
  console.log(props.multipleSeasons);
  return (
    <div className="mt-12">
      <div className="mb-2 md:flex md:justify-between md:items-center">
        <h3 className="text-xl lg:text-2xl">{props.episodeText}</h3>
        {props.multipleSeasons && (
          <select
            className="bg-white/5 p-3 border border-neutral-500 rounded-md font-semibold"
            defaultValue={props.season}
            onChange={(e) => props.handleSetSeason(e.currentTarget.value)}
          >
            {props.data.seasons.map((season, index) => (
              <option
                value={season.season_number}
                key={`season-${index}`}
                className="text-black"
              >
                {season.name}
              </option>
            ))}
          </select>
        )}
      </div>
    </div>
  );
};

export default ShowDetailsSeasonSelect;
