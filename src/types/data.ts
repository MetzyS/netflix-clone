export type Header = {
  button: string;
  disconnect: string;
};

export type HeroDescription = {
  id: string;
  title: string;
  text: string;
  videoUrl?: string;
  downloadMovieTitle?: string;
  downloadText?: string;
};

type DescriptionMap = Record<string, HeroDescription>;

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

export type PlanCard = {
  title: string;
  options: string[];
  price: string;
  occurence: string;
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
  finishSignup: string;
  finishSettingup: string;
};

type PaymentChoice = {
  creditCard: string;
  mobileBill: string;
  paypal: string;
  giftCode: string;
};

export type CreditCardOption = {
  title: string;
  cardNumber: string;
  expDate: string;
  cvv: string;
  nameOnCard: string;
  allowCardCheckbox: string;
  confirmationCheckbox: string;
  confirmationButton: string;
  errorMessageConfirmation: string;
  errorMessageCCNumber: string;
  errorMessageExpDate: string;
  errorMessageCVV: string;
  errorMessageName: string;
  cvvPopupText: string;
};

export type MobileOption = {
  title: string;
  desc: string;
  secDesc: string;
  numberInput: string;
  errorMessageInput: string;
  confirmationButton: string;
  confirmationCheckbox: string;
  errorMessageConfirmation: string;
  descButton: string;
};

export type PaypalOption = {
  title: string;
  desc: string;
  confirmationButton: string;
  errorMessageConfirmation: string;
  confirmationCheckbox: string;
};

export type NetflixGiftCard = {
  title: string;
  pinInput: string;
  confirmationButton: string;
  confirmationCheckbox: string;
  errorMessageConfirmation: string;
};

export type Payment = {
  title: string;
  desc: string;
  subDesc: string[];
  encrypted: string;
  paymentTypes: PaymentChoice;
  creditCardOption: CreditCardOption;
  mobileOption: MobileOption;
  paypalOption: PaypalOption;
  netflixGiftCard: NetflixGiftCard;
};

export type Processing = {
  checking: string;
  confirmation: string;
  error: string;
  button: string;
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
  paymentStep: Payment;
};

export type SignupType = {
  form: Form;
  signup: Signup;
  signupFooter: string;
  signupFooterText: FooterMap;
  processing: Processing;
};

export type FooterType = {
  footerText: string;
  footer: FooterMap;
};

export type LangType = {
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

export type HeroPageType = {
  title: string;
  subtitle: string;
  form: Form;
  offer: {
    title: string;
    subtitle: string;
    linkText: string;
  };
  description: Record<string, HeroDescription>;
  faqTitle: string;
  faq: Record<string, FaqType>;
};

export type DeviceOption = {
  name: string;
  desc: string;
  iconUrl: string;
};

export type SetupInfoBoxList = {
  iconUrl: string;
  desc: string;
};

export type SetupKidsProfilelist = {
  title: string;
  desc: string;
};

export type PasswordRecoveryType = {
  title: string;
  desc: string[];
  form: {
    title: string;
    desc: string[];
    input: string;
    inputError: string;
    button: string;
  };
};

export type SetUpType = {
  passwordRecovery: PasswordRecoveryType;

  deviceSelection: {
    step: string;
    maxStep: string;
    title: string;
    desc: string;
    deviceOptions: DeviceOption[];
    otherDevice: {
      name: string;
      desc: string;
    };
    button: string;
  };

  infoBox: {
    iconUrl: string;
    title: string;
    list: SetupInfoBoxList[];
    button: string;
  };

  profileConfiguration: {
    step: string;
    maxStep: string;
    title: string;
    desc: string;
    descList: string[];
    mainProfile: string;
    addProfiles: string;
    input: string;
    infoBox: string[];
    button: string;
  };

  kidsProfile: {
    step: string;
    maxStep: string;
    title: string;
    list: SetupKidsProfilelist[];
    mainProfile: string;
    addProfiles: string;
    input: string;
    kids: string;
    button: string;
  };

  profileDetails: {
    step: string;
    maxStep: string;
    title: string;
    desc: string;
    birthDate: string[];
    gender: string;
    select: string;
    button: string;
  };
  languageSelection: {
    step: string;
    maxStep: string;
    title: string;
    desc: string[];
    languages: string[];
    button: string;
  };
  likeSelection: {
    step: string;
    maxStep: string;
    title: string;
    desc: string[];
    list: {};
    buttonSelectionNotFinished: string;
    buttonSelectionFinished: string;
  };
  processing: {
    title: string;
  };
};

export default LangType;
