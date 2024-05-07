import { useNavigate } from "react-router-dom";
import DefaultButton from "../components/ui/DefaultButton";
import Logo from "../components/ui/Logo";
import { IoArrowBack } from "react-icons/io5";

const ErrorPage = () => {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  document.body.classList.remove("bg-white");
  // const { handleChangeBg } = useDataContext();
  // handleChangeBg(false);
  return (
    <div className="w-screen overflow-hidden pr-4 min-h-screen">
      <div className="max-w-[1024px] m-auto text-center">
        <header className="flex flex-wrap items-center relative p-6 justify-between gap-2">
          <Logo className="w-24 lg:w-40" />
          <div className="flex items-center gap-2">
            <DefaultButton onClick={handleClick} icon={<IoArrowBack />} />
          </div>
        </header>
      </div>
      <div className="w-full flex items-center justify-center">
        <span>404</span>
      </div>
    </div>
  );
};

export default ErrorPage;
