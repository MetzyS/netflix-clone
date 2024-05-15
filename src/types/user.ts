export type UserProfile = {
  username: string;
  avatarUrl?: string;
  isAdult: boolean;
};

export type UserType = {
  username: string;
  email: string;
  password: string;
  fullName: string;
  avatarUrl?: string;
  profiles: Record<number, UserProfile>;
  authorization: number;
};

export type Users = Record<string, UserType>;
