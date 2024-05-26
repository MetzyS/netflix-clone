export type UserProfile = {
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
  profiles: Record<number, UserProfile>;
  authorization: boolean;
  plan: number;
  registered: boolean;
  setupStep: number;
  isConfigured: boolean;
};

export type Users = Record<string, UserType>;
