import { CgSpinner } from "react-icons/cg";

const LoadingSpinner = () => {
  return (
    <div className="flex w-full h-max">
      <CgSpinner className="animate-spin w-20 aspect-square" />
    </div>
  );
};

export default LoadingSpinner;
