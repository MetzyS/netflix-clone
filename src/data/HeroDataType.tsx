type Description = {
  id: string;
  title: string;
  text: string;
  videoUrl?: string;
  downloadMovieTitle?: string;
  downloadText?: string;
};

type DescriptionMap = Record<string, Description>;

type Faq = {
  id: string;
  question: string;
  answer: string;
};

type FaqMap = Record<string, Faq>;

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

type HeroDataType = {
  header: {
    button: string;
  };
  title: string;
  subtitle: string;
  form: {
    text: string;
    email: string;
    password: string;
    button: string;
    autocomplete: string;
  };
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
};

export default HeroDataType;
