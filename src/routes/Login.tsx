import FadedBackground from "../components/Background/FadedBackground";
import SignupHeader from "../components/Header/SignupHeader";
import { useDataContext } from "../layouts/RootLayout";
import Input from "../components/Form/Input";
import DefaultButton from "../components/ui/DefaultButton";
import { Link } from "react-router-dom";

const Login = () => {
  const { data } = useDataContext();

  return (
    <>
      <FadedBackground>
        <SignupHeader />
        <h1 className="text-3xl font-bold">{data.login.title}</h1>
        <form action="" className="flex flex-col">
          <Input type="email" label={data.form.email} />
          <Input type="password" label={data.form.password} />
          <div>
            <DefaultButton text={data.login.loginButton} primary={true} />
            <p>OR</p>
            <DefaultButton text={data.login.codeButton} />
          </div>
          <Link to="/" className="hover:underline hover:text-neutral-400">
            {data.login.passwordForgot}
          </Link>
          <label htmlFor="rememberMe">
            <input type="checkbox" name="rememberMe" id="rememberMe" />
            <span>{data.login.rememberMe}</span>
          </label>
        </form>
        <p className="text-neutral-400">
          {data.login.firstVisit}{" "}
          <Link to="/" className="font-bold text-white">
            {data.login.signup}
          </Link>
        </p>
      </FadedBackground>
    </>
  );
};

export default Login;
