import { Form, Link, useNavigate } from "react-router-dom";
import { useDataContext } from "../layouts/RootLayout";
import FadedBackground from "../components/Background/FadedBackground";
import Input from "../components/Form/Input";
import DefaultButton from "../components/ui/DefaultButton";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { FormEvent, useState } from "react";
import { createUsernameFromEmail } from "../hooks/UserIsCreatingAccount/createUsernameFromEmail";
import { UserProfile } from "../types/user";

const Login = () => {
  const { data, handleChangeBg, userEmail, isConnected, handleCreateUser } =
    useDataContext();
  handleChangeBg(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (email: string) => {
    setEmail(email);
  };
  const handlePassword = (password: string) => {
    setPassword(password);
  };

  const handleLogin = (email: string, password: string) => {
    handleCreateUser([
      { key: "email", value: email },
      { key: "password", value: password },
      { key: "authorization", value: 1 },
      { key: "profiles", value: {} },
      { key: "avatarUrl", value: "" },
      { key: "username", value: createUsernameFromEmail(email) },
      { key: "fullName", value: "" },
    ]);
  };
  return (
    <>
      {isConnected ? (
        <div>Connected</div>
      ) : (
        <div className="h-screen flex flex-col">
          <FadedBackground className="pb-4 w-screen flex-grow">
            <div className="m-auto">
              <Header
                content={data.header}
                showButton={false}
                selectLang={false}
                className="p-6"
              />
              <div className="px-6 max-w-[1024px] bg-transparent sm:bg-black/70 sm:py-12 sm:px-20 sm:max-w-lg sm:rounded-lg sm:mx-auto h-[700px]">
                <h1 className="text-3xl font-bold">{data.login.title}</h1>
                <Form
                  // method="post"
                  action="/"
                  className="flex flex-col gap-4 mt-5"
                  onSubmit={() => handleLogin(email, password)}
                >
                  <Input
                    type="email"
                    label={data.form.email}
                    error={data.form.error}
                    value={userEmail}
                    onChange={handleEmail}
                  />
                  <Input
                    type="password"
                    label={data.form.password}
                    error={data.form.error}
                    onChange={handlePassword}
                  />
                  <div>
                    <DefaultButton
                      type="submit"
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
                      className="mr-4 checkbox checkbox-default"
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
        </div>
      )}
    </>
  );
};

export default Login;
