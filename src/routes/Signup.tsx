import Header from "../components/Header/Header";
import { useDataContext } from "../layouts/RootLayout";
import SingupDevices from "../assets/signupDevices.png";
import Footer from "../components/Herocard/Footer";

const Signup = () => {
  const { data, handleChangeBg } = useDataContext();
  handleChangeBg(true);
  return (
    <>
      <Header
        content={data.header}
        selectLang={false}
        className="border-b border-neutral-200"
        link="/login"
        logoClassname="w-36 lg:w-40"
        showButton={false}
        transparentButton={true}
      />
      <div className="max-w-[340px] m-auto text-center text-black pt-6 mb-32">
        <img
          src={SingupDevices}
          alt=""
          className="mt-[100px] mb-10 mx-auto max-w-[250px]"
        />
        <p className="mt-4 text-sm step mb-4 text-neutral-800">
          ÉTAPE <span className="font-semibold">1</span> SUR{" "}
          <span className="font-semibold">{data.signup.maxStep}</span>
        </p>
        <div className="flex flex-col items-center">
          <h1 className="font-semibold text-3xl mb-4 text-neutral-800">
            {data.signup.firstStepTitle}
          </h1>
          <p className="text-lg max-w-[300px] text-neutral-800">
            {data.signup.firstStepDesc}
          </p>
        </div>
        <button
          type="button"
          className="py-3 w-full text-white text-2xl rounded-md bg-[#e50914] hover:bg-[#f6121d] my-6"
        >
          {data.signup.firstButton}
        </button>
      </div>
      <div>
        <Footer
          data={data.signupFooter}
          text={data.signupFooterText}
          selectBg="bg-white"
          selectTextColor="text-neutral-600"
          className="bg-[#f3f3f3] border-t border-t-black/10"
          textColor="text-black"
          selectBorderColor="border-black/30"
        />
      </div>
    </>
  );
};

export default Signup;
