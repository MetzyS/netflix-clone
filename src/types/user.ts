export type UserProfile = {
  id: number;
  username: string;
  avatarUrl?: string;
  isAdult: boolean;
};

export type UserType = {
  id: number;
  username: string;
  email: string;
  fullName: string;
  avatarUrl?: string;
  profiles: Record<number, UserProfile>;
  authorization: number;
};

export type Users = Record<string, UserType>;
