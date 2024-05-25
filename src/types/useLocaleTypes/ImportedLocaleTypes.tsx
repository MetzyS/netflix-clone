import { FooterType, HeroPageType, SignupType } from "../data";

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
