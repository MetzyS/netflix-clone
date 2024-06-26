export type UserProfile = {
  id: number;
  username: string;
  avatarUrl?: string;
  isAdult: boolean;
};

export type UserType = {
  username: string;
  email: string;
  password: string;
  number: string;
  fullName: string;
  avatarUrl?: string;
  registerStep: number;
  profiles: UserProfile[];
  selectedProfile: undefined | number;
  preferedDevices: string[];
  authorization: boolean;
  plan: number;
  registered: boolean;
  isConfigured: boolean;
  setupStep: number;
  birthDate: string;
  gender: number;
  preferedLanguages: number[];
  likedShows: number[];
};

export type Users = Record<string, UserType>;
