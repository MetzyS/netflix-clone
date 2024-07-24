import { FooterType, HeroPageType, SetUpType, SignupType } from "../data";

export type FooterLocaleType = {
  content: FooterType;
  isLoading: boolean;
};

export type HeroPageLocaleType = {
  content: HeroPageType;
  isLoading: boolean;
};

export type SignUpLocaleType = {
  content: SignupType;
  isLoading: boolean;
};

export type SetUpLocaleType = {
  content: SetUpType;
  isLoading: boolean;
};

export type ShowDetailsType = {
  recommended: string;
  seasons: string;
  distribution: string;
  genres: string;
  genreDetails: string;
  episodes: string;
  episode: string;
  miniSerie: string;
  similar: string;
  about: string;
  minutes: string;
};
