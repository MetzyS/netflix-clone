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
  preferedDevices: string[];
  authorization: boolean;
  plan: number;
  registered: boolean;
  isConfigured: boolean;
  setupStep: number;
  birthDate: string;
  gender: number;
};

export type Users = Record<string, UserType>;
