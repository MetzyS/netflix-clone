import { Link } from "react-router-dom";
import Logo from "../ui/Logo";

const SignupHeader = () => {
  return (
    <header className="flex flex-wrap items-center relative p-6 justify-between gap-2 bg-white/0">
      <div className="flex flex-col justify-between">
        <Link to="/">
          <Logo className="w-24 lg:w-40 py-1" />
        </Link>
      </div>
    </header>
  );
};

export default SignupHeader;
