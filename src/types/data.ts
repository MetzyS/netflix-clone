export type Header = {
  button: string;
  disconnect: string;
};

type Description = {
  id: string;
  title: string;
  text: string;
  videoUrl?: string;
  downloadMovieTitle?: string;
  downloadText?: string;
};

type DescriptionMap = Record<string, Description>;

export type FaqType = {
  id: string;
  question: string;
  answer: string;
};

type FaqMap = Record<string, FaqType>;

type Footer = {
  title: string;
  link: string;
};
type FooterMap = Record<string, Footer>;

type LoginFooter = {
  title: string;
  link: string;
};
type LoginFooterMap = Record<string, LoginFooter>;

type PlanCard = {
  title: string;
  options: string[];
  price: string;
  qualityDesc: string;
  resolution: string;
  spacialAudio: string;
  supportedDevices: string[];
  maxSimulDeviceCount: string;
  downloadDevice: string;
  ads: string;
};

export type Form = {
  text: string;
  email: string;
  password: string;
  button: string;
  autocomplete: string;
  error: string[];
  specialOfferEmailCheckbox: string;
};

export type Signup = {
  stepWord: string[];
  maxStep: string;
  firstStepTitle: string;
  firstStepDesc: string;
  firstButton: string;
  signupTitle: string;
  signupDesc: string;
  signupCheckbox: string;
  firstStepPlanTitle: string;
  firstStepPlanDesc: string[];
  firstStepPlanChoiceTitle: string;
  firstStepPlanChoiceList: string[];
  firstStepPlanChoiceCards: Record<string, PlanCard>;
  firstStepConditions: string[];
  secondStepBackTitle: string;
  secondStepBackDesc: string;
};

type DataType = {
  header: Header;
  title: string;
  subtitle: string;
  form: Form;
  offer: {
    title: string;
    subtitle: string;
    linkText: string;
  };
  description: DescriptionMap;
  faqTitle: string;
  faq: FaqMap;
  footerText: string;
  footer: FooterMap;
  login: {
    title: string;
    loginButton: string;
    codeButton: string;
    passwordForgot: string;
    rememberMe: string;
    firstVisit: string;
    signup: string;
    captcha: string;
    captchaLink: string;
  };
  loginFooter: LoginFooterMap;
  signup: Signup;
  signupFooterText: string;
  signupFooter: FooterMap;
};

export default DataType;
