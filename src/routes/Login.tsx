import { Form, Link, useNavigate } from "react-router-dom";
import { useDataContext } from "../layouts/RootLayout";
import FadedBackground from "../components/Background/FadedBackground";
import Input from "../components/Form/Input";
import DefaultButton from "../components/ui/DefaultButton";
import Footer from "../components/Footer/Footer";
import { useEffect, useState } from "react";
import { createUsernameFromEmail } from "../helpers/createUsernameFromEmail";
import DefaultContainer from "../components/ui/DefaultContainer";
import { useLocale } from "../hooks/useLocale";

const Login = () => {
  const navigate = useNavigate();
  const {
    user,
    lang,
    setWhiteTheme,
    handleCreateUser,
    handleHeaderStyle,
    handleAccountIsConfigured,
  } = useDataContext();
  const { content, isLoading } = useLocale("Login", lang);
  useEffect(() => {
    setWhiteTheme(false);
    handleHeaderStyle([{ key: "showBtn", value: false }]);
    // l'utilisateur n'a pas fini de s'inscrire => signup
    user && user.registerStep != 0 && navigate("/signup");
    // l'utilisateur à terminé l'inscription / est déjà connecté => index
    user && user.authorization == true && navigate("/");
  }, [user]);
  const [email, setEmail] = useState(user ? user.email : "");
  const [password, setPassword] = useState(user ? user.password : "");

  const handleEmail = (email: string) => {
    setEmail(email);
  };
  const handlePassword = (password: string) => {
    setPassword(password);
  };

  const handleLogin = (email: string, password: string) => {
    handleCreateUser([
      { key: "username", value: createUsernameFromEmail(email) },
      { key: "email", value: email },
      { key: "password", value: password },
      { key: "number", value: "" },
      { key: "fullName", value: "" },
      { key: "avatarUrl", value: "" },
      { key: "registerStep", value: 6 },
      { key: "profiles", value: [] },
      { key: "preferedDevices", value: [] },
      { key: "authorization", value: true },
      { key: "plan", value: 0 },
      { key: "registered", value: true },
      { key: "isConfigured", value: true },
      { key: "setupStep", value: 9 },
      { key: "birthDate", value: "01/01/1990" },
    ]);
    handleAccountIsConfigured(true);
  };
  return (
    <>
      {isLoading ? (
        <></>
      ) : (
        <DefaultContainer className="h-screen flex flex-col">
          <FadedBackground className="pb-4 w-screen flex-grow">
            <div className="m-auto pt-32 sm:pt-24">
              <div className="px-6 max-w-[1024px] bg-transparent sm:bg-black/70 sm:py-12 sm:px-20 sm:max-w-lg sm:rounded-lg sm:mx-auto h-[700px]">
                <h1 className="text-3xl font-bold">{content.login.title}</h1>
                <Form
                  action="/"
                  className="flex flex-col gap-4 mt-5"
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleLogin(email, password);
                  }}
                >
                  <Input
                    type="email"
                    label={content.form.email}
                    error={content.form.error}
                    value={email}
                    onChange={handleEmail}
                  />
                  <Input
                    type="password"
                    value={password}
                    label={content.form.password}
                    error={content.form.error}
                    onChange={handlePassword}
                  />
                  <div>
                    <DefaultButton
                      type="submit"
                      text={content.login.loginButton}
                      primary={true}
                      className="w-full"
                    />
                    <p className="text-center my-4 text-secondary">OR</p>
                    <DefaultButton
                      text={content.login.codeButton}
                      className="w-full"
                    />
                  </div>
                  <Link
                    to="/"
                    className="hover:underline hover:text-neutral-400 text-center my-3"
                  >
                    {content.login.passwordForgot}
                  </Link>
                  <label htmlFor="rememberMe" className="flex items-center">
                    <input
                      type="checkbox"
                      name="rememberMe"
                      id="rememberMe"
                      className="mr-4 checkbox checkbox-default"
                    />
                    <p className="">{content.login.rememberMe}</p>
                  </label>
                </Form>
                <p className="text-secondary my-8">
                  {content.login.firstVisit}{" "}
                  <Link to="/" className="font-bold text-white">
                    {content.login.signup}
                  </Link>
                </p>
                <p className="text-sm hidden xs:block mt-6">
                  {content.login.captcha}{" "}
                  <a href="" className="text-blue-500 hover:underline">
                    {content.login.captchaLink}
                  </a>
                </p>
              </div>
            </div>
          </FadedBackground>
          <footer className="px-4 mt-12">
            <p className="text-sm xs:hidden">
              {content.login.captcha}{" "}
              <a href="" className="text-blue-500 hover:underline">
                {content.login.captchaLink}
              </a>
            </p>
            <Footer />
          </footer>
        </DefaultContainer>
      )}
    </>
  );
};

export default Login;
