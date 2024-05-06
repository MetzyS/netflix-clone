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
  };
};

export default HeroDataType;
