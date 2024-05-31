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

  // useEffect(() => {
  //   if (props.likedItems.length === 3) {
  //     props.likedItems.filter((item) => {
  //       if (item.id != props.id) {
  //         setIsDisabled(true);
  //       } else {
  //         setIsDisabled(false);
  //       }
  //     });
  //   } else {
  //     setIsDisabled(false);
  //   }
  // }, [props.likedItems]);
  // const handleChecked = () => {
  //   if (isChecked === false) {
  //     props.add({ id: props.id, name: props.name });
  //   } else {
  //     props.remove(props.id);
  //   }
  //   setIsChecked(!isChecked);
  // };

  const handleChecked = (id: number) => {
    if (isChecked === false) {
      props.add(id);
    } else {
      props.remove(id);
    }
    setIsChecked(!isChecked);
  };
  return (
    <div className={`relative w-20 rounded-md`}>
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
      <span className="absolute z-30 text-blue-600 font-bold">
        {props.name}
      </span>
    </div>
  );
};

export default LikeCheckbox;
