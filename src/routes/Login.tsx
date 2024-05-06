import { ReactEventHandler, useState } from "react";
import FadedBackground from "../components/Background/FadedBackground";
import SignupHeader from "../components/Header/SignupHeader";
import { useDataContext } from "../layouts/RootLayout";
import Input from "../components/Form/Input";

const Login = () => {
  const [isFocus, setIsFocus] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);
  const handleInputFocus = () => {
    setIsFocus(!isFocus);
  };
  const handleEmptyInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.value == null || e.target.value == "") {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  };
  const { data } = useDataContext();

  return (
    <>
      <FadedBackground>
        <SignupHeader />
        <div className="flex flex-col">
          <h1>{data.login.title}</h1>
          <Input
            handleInputFocus={handleInputFocus}
            label={data.form.email}
            isFocus={isFocus}
            onChange={handleEmptyInput}
            isEmpty={isEmpty}
          />
        </div>
      </FadedBackground>
    </>
  );
};

export default Login;
