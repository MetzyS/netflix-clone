import { Link } from "react-router-dom";
import { useDataContext } from "../layouts/RootLayout";
import FadedBackground from "../components/Background/FadedBackground";
import SignupHeader from "../components/Header/SignupHeader";
import Input from "../components/Form/Input";
import DefaultButton from "../components/ui/DefaultButton";

const Login = () => {
  const { data } = useDataContext();

  return (
    <>
      <FadedBackground className="pb-4">
        <div className="max-w-[1024px] m-auto">
          <SignupHeader />
          <div className="px-6 xs:bg-black/70 xs:py-12 xs:px-20 xs:max-w-lg xs:rounded-lg xs:mx-auto">
            <h1 className="text-3xl font-bold">{data.login.title}</h1>
            <form action="" className="flex flex-col gap-4 mt-5">
              <Input type="email" label={data.form.email} />
              <Input type="password" label={data.form.password} />
              <div>
                <DefaultButton
                  text={data.login.loginButton}
                  primary={true}
                  className="w-full"
                />
                <p className="text-center my-4 text-secondary">OR</p>
                <DefaultButton
                  text={data.login.codeButton}
                  className="w-full"
                />
              </div>
              <Link
                to="/"
                className="hover:underline hover:text-neutral-400 text-center my-3"
              >
                {data.login.passwordForgot}
              </Link>
              <label htmlFor="rememberMe" className="flex items-center">
                <input
                  type="checkbox"
                  name="rememberMe"
                  id="rememberMe"
                  className="mr-4 checkbox-default"
                />
                <p className="">{data.login.rememberMe}</p>
              </label>
            </form>
            <p className="text-secondary my-8">
              {data.login.firstVisit}{" "}
              <Link to="/" className="font-bold text-white">
                {data.login.signup}
              </Link>
            </p>
            <p className="text-sm hidden xs:block mt-6">
              {data.login.captcha}{" "}
              <a href="" className="text-blue-500 hover:underline">
                {data.login.captchaLink}
              </a>
            </p>
          </div>
        </div>
      </FadedBackground>
      <footer className="px-4">
        <p className="text-sm xs:hidden">
          {data.login.captcha}{" "}
          <a href="" className="text-blue-500 hover:underline">
            {data.login.captchaLink}
          </a>
        </p>
      </footer>
    </>
  );
};

export default Login;
