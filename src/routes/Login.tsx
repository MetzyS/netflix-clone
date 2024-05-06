import FadedBackground from "../components/Background/FadedBackground";
import SignupHeader from "../components/Header/SignupHeader";
import { useDataContext } from "../layouts/RootLayout";
import Input from "../components/Form/Input";
import DefaultButton from "../components/ui/DefaultButton";

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
        </form>
        <div>
          <DefaultButton text={data.login.loginButton} primary={true} />
          <p>OR</p>
          <DefaultButton text={"test"} />
        </div>
      </FadedBackground>
    </>
  );
};

export default Login;
