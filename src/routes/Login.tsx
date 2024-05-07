import { Form, Link } from "react-router-dom";
import { useDataContext } from "../layouts/RootLayout";
import FadedBackground from "../components/Background/FadedBackground";
import Input from "../components/Form/Input";
import DefaultButton from "../components/ui/DefaultButton";
import Footer from "../components/Herocard/Footer";
import Header from "../components/Header/Header";

const Login = () => {
  const { data, handleChangeBg } = useDataContext();
  handleChangeBg(false);
  return (
    <>
      <FadedBackground className="pb-4">
        <div className="max-w-[1024px] m-auto">
          <Header content={data.header} showButton={false} selectLang={false} />
          <div className="px-6 bg-transparent sm:bg-black/70 sm:py-12 sm:px-20 sm:max-w-lg sm:rounded-lg sm:mx-auto">
            <h1 className="text-3xl font-bold">{data.login.title}</h1>
            <Form action="" className="flex flex-col gap-4 mt-5">
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
            </Form>
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
      <footer className="px-4 mt-12">
        <p className="text-sm xs:hidden">
          {data.login.captcha}{" "}
          <a href="" className="text-blue-500 hover:underline">
            {data.login.captchaLink}
          </a>
        </p>
        <Footer text={data.footerText} data={data.loginFooter} />
      </footer>
    </>
  );
};

export default Login;
