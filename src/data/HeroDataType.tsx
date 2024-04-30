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
  description: {
    "0": {
      id: string;
      title: string;
      text: string;
      videoUrl?: string;
      downloadMovieTitle: string;
      downloadText: string;
    };
    "1": {
      id: string;
      title: string;
      text: string;
      videoUrl?: string;
      downloadMovieTitle: string;
      downloadText: string;
    };
    "2": {
      id: string;
      title: string;
      text: string;
      videoUrl?: string;
      downloadMovieTitle: string;
      downloadText: string;
    };
    "3": {
      id: string;
      title: string;
      text: string;
      videoUrl?: string;
      downloadMovieTitle?: string;
      downloadText?: string;
    };
  };
};

export default HeroDataType;
