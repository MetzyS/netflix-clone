type Description = {
  id: {
    id: string;
    title: string;
    text: string;
    videoUrl?: string;
    downloadMovieTitle: string;
    downloadText: string;
  };
};

type Faq = {
  id: {
    id: string;
    question: string;
    answer: string;
  };
};

type Footer = {
  id: {
    title: string;
    link: string;
  };
};

type HeroDataType = {
  title: string;
  subtitle: string;
  form: {
    text: string;
    email: string;
    button: string;
    autocomplete: string;
  };
  offer: {
    title: string;
    subtitle: string;
    linkText: string;
  };
  description: Description;
  faqTitle: string;
  faq: Faq;
  footerText: string;
  footer: Footer;
};

export default HeroDataType;
