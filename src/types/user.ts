export type UserProfile = {
  id: number;
  username: string;
  isAdult: boolean;
};

type UserProfileMap = Record<number, UserProfile>;

export type UserType = {
  id: number;
  username: string;
  email: string;
  fullName: string;
  avatarUrl?: string;
  profiles: UserProfileMap;
};
