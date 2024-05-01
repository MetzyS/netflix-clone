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

type HeroDataType = {
  title: string;
  subtitle: string;
  text: string;
  email: string;
  button: string;
  offer: {
    title: string;
    subtitle: string;
    linkText: string;
  };
  description: Description;
  faqTitle: string;
  faq: Faq;
};

export default HeroDataType;
