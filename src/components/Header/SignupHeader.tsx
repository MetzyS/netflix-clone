import Logo from "../ui/Logo";

const SignupHeader = () => {
  return (
    <header>
      <div className="flex flex-col justify-between">
        <div>
          <Logo className="w-12" />
        </div>
        <div>
          <a href="">Sign In</a>
        </div>
      </div>
    </header>
  );
};

export default SignupHeader;
