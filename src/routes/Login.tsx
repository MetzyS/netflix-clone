import FadedBackground from "../components/Background/FadedBackground";
import SignupHeader from "../components/Header/SignupHeader";
import { useDataContext } from "../layouts/RootLayout";
import Input from "../components/Form/Input";

const Login = () => {
  const { data } = useDataContext();

  return (
    <>
      <FadedBackground>
        <SignupHeader />
        <div className="flex flex-col">
          <h1>{data.login.title}</h1>
          <Input type="email" label={data.form.email} />
          <Input type="password" label={data.form.password} />
        </div>
      </FadedBackground>
    </>
  );
};

export default Login;
