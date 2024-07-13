export type Header = {
  button: string;
  disconnect: string;
  mainHeader: {
    browseBtn: string;
    browseList: { name: string; link: string }[];
    profileMenu: { name: string; link: string }[];
    disconnect: string;
    notificationMenu: { value: boolean; text: string[] }[];
    searchPlaceholder: string;
  };
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

export type DeviceSelectionType = {
  step: string;
  maxStep: string;
  stepWord: string;
  ofWord: string;
  title: string;
  desc: string[];
  deviceOptions: DeviceOption[];
  otherDevice: {
    name: string;
    desc: string;
  };
  button: string;
};

export type ProfileConfigurationType = {
  step: string;
  maxStep: string;
  stepWord: string;
  ofWord: string;
  title: string;
  desc: string;
  descList: string[];
  mainProfile: string;
  addProfiles: string;
  input: string;
  infoBox: string[];
  button: string;
};

export type KidsProfileType = {
  step: string;
  maxStep: string;
  stepWord: string;
  ofWord: string;
  title: string;
  list: SetupKidsProfilelist[];
  mainProfile: string;
  addProfiles: string;
  noProfiles: string;
  empty: string;
  input: string;
  kids: string;
  button: string;
};

export type ProfileDetailsType = {
  step: string;
  maxStep: string;
  stepWord: string;
  ofWord: string;
  title: string;
  desc: string;
  birthDate: string[];
  birthDateLabel: string;
  month: string[];
  gender: string;
  genderList: string[];
  select: string;
  button: string;
};

export type InfoBoxType = {
  title: string[];
  popUpTitle: string;
  list: SetupInfoBoxList[];
  button: string;
};

export type LanguageSelectionType = {
  step: string;
  maxStep: string;
  stepWord: string;
  ofWord: string;
  title: string;
  desc: string[];
  languages: string[];
  button: string;
};

export type LikeSelectionType = {
  step: string;
  maxStep: string;
  stepWord: string;
  ofWord: string;
  title: string;
  desc: string[];
  list: {};
  buttonSelectionNotFinished: string;
  buttonSelectionFinished: string;
  error: {
    fetchError: string;
  };
};

export type SetUpType = {
  passwordRecovery: PasswordRecoveryType;

  deviceSelection: DeviceSelectionType;

  infoBox: InfoBoxType;

  profileConfiguration: ProfileConfigurationType;

  kidsProfile: KidsProfileType;

  profileDetails: ProfileDetailsType;

  languageSelection: LanguageSelectionType;

  likeSelection: LikeSelectionType;
  processing: {
    title: string;
  };
};

export type isKidType = {
  [id: number]: boolean;
};

export type DataType = {
  page: number;
  results: ResultType[];
  total_pages: number;
  total_results: number;
};

export type ResultType = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  origin_country: string[];
  original_language: string;
  original_name?: undefined | string;
  original_title?: undefined | string;
  overview: string;
  popularity: number;
  poster_path: string;
  first_air_date: string;
  name: string;
  vote_average: number;
  vote_count: number;
};

export type ResultDetailsType = {
  adult: boolean;
  backdrop_path: string;
  created_by: CreatedBy[];
  episode_run_time: any[];
  first_air_date: string;
  genres: Genre[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: LastEpisodeToAir;
  name: string;
  next_episode_to_air: NextEpisodeToAir;
  networks: Network[];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  seasons: Season[];
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
};

export interface CreatedBy {
  id: number;
  credit_id: string;
  name: string;
  original_name: string;
  gender: number;
  profile_path: string;
}

export interface Genre {
  id: number;
  name: string;
}

export interface LastEpisodeToAir {
  id: number;
  name: string;
  overview: string;
  vote_average: number;
  vote_count: number;
  air_date: string;
  episode_number: number;
  episode_type: string;
  production_code: string;
  runtime: number;
  season_number: number;
  show_id: number;
  still_path: string;
}

export interface NextEpisodeToAir {
  id: number;
  name: string;
  overview: string;
  vote_average: number;
  vote_count: number;
  air_date: string;
  episode_number: number;
  episode_type: string;
  production_code: string;
  runtime: any;
  season_number: number;
  show_id: number;
  still_path: string;
}

export interface Network {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface ProductionCompany {
  id: number;
  logo_path?: string;
  name: string;
  origin_country: string;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface Season {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
  vote_average: number;
}

export interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export type ImageCollectionType = {
  backdrops: {
    aspect_ratio: number;
    height: number;
    iso_639_1: boolean | null;
    file_path: string;
    vote_average: number;
    vote_count: number;
    width: number;
  }[];
  id: number;
  logos: [];
  posters: {
    aspect_ratio: number;
    height: number;
    iso_639_1: boolean | null;
    file_path: string;
    vote_average: number;
    vote_count: number;
    width: number;
  }[];
};

export type ProfileChoiceType = {
  title: string;
  addButton: string;
  manageButton: string;
};

export type TopShowBannerType = {
  playButton: string;
  infoButton: string;
  title: string[];
};

export type BackdropVideoInfoType = {
  id: number;
  results: {
    id: string;
    iso_639_1: string;
    iso_3166_1: string;
    key: string;
    name: string;
    official: boolean;
    published_at: string;
    site: string;
    size: number;
    type: string;
  }[];
};

export default LangType;
