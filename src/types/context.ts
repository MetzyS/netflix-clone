import { HeaderStyle } from "./headerstyle";
import { UserProfile, UserType } from "./user";

export type ContextType = {
  // infos user
  lang: string;
  user: UserType | undefined;
  isRegistered: boolean;
  userEmail: string;
  userPassword: string;
  isConnected: boolean;
  isLoading: boolean;
  isCreatingAccount: boolean;
  registerStep: number | undefined;
  headerStyle: HeaderStyle;
  accountIsConfigured: boolean;

  // handlers user
  handleCreateUser: (
    values: Array<{
      key: keyof UserType;
      value: string | number | UserProfile | {};
    }>
  ) => void;
  setIsRegistered: (value: boolean) => void;
  handleChangeLang: (value: string) => void;
  handleUserEmail: (email: string) => void;
  handleUserPassword: (password: string) => void;
  handleCreateAccount: (value: boolean) => void;
  handleSubmitRegister: (value: string) => Promise<Boolean>;

  // handlers style
  resetHeaderStyle: () => void;
  handleHeaderStyle: (
    values: Array<{
      key: keyof HeaderStyle;
      value: string | boolean;
    }>
  ) => void;
  handleChangeBg: (value: boolean) => void;

  // handlers connexion
  handleDisconnect: () => void;
  handleConnect: () => void;
};
