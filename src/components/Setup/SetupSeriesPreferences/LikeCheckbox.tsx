import { ReactElement, useEffect, useState } from "react";

const LikeCheckbox = (props: {
  id: number;
  name: string;
  src: string;
  checkedIcon: ReactElement;
  add: (id: number) => void;
  remove: (id: number) => void;
  selectedShows: number[];
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    props.selectedShows.length === 3
      ? setIsDisabled(true)
      : setIsDisabled(false);

    props.selectedShows.includes(props.id) && setIsDisabled(false);
  }, [props.selectedShows]);

  const handleChecked = (id: number) => {
    if (isChecked === false) {
      props.add(id);
    } else {
      props.remove(id);
    }
    setIsChecked(!isChecked);
  };
  return (
    <div className={`relative w-[75px] sm:w-20 rounded-md`}>
      {isChecked ? (
        <span className="absolute bg-black/60 size-full rounded-md">
          {props.checkedIcon}
        </span>
      ) : (
        <></>
      )}
      <img
        src={`https://image.tmdb.org/t/p/w92/${props.src}`}
        alt=""
        className="size-full pointer-events-none rounded-md"
      />
      <input
        type="checkbox"
        name={`serie-${props.id}`}
        id={`serie-${props.id}`}
        className="appearance-none absolute top-0 right-0 bottom-0 left-0"
        onChange={() => handleChecked(props.id)}
        disabled={isDisabled}
      />
    </div>
  );
};

export default LikeCheckbox;
