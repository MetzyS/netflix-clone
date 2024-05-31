import { DataType } from "./data";
import { HeaderStyle } from "./headerstyle";
import { UserProfile, UserType } from "./user";

export type ContextType = {
  // infos user
  lang: string;
  user: UserType | undefined;
  isRegistered: boolean;
  registerStep: number | undefined;
  isConfigured: boolean;
  userEmail: string;
  userPassword: string;
  isConnected: boolean;
  isLoading: boolean;
  headerStyle: HeaderStyle;

  // fetched data
  fetchedData: { data: DataType[]; dataIsLoading: boolean };
  // popularSeries: [string, DataType][] | undefined;
  // handlers user
  handleCreateUser: (
    values: Array<{
      key: keyof UserType;
      value: string | number | UserProfile | {};
    }>
  ) => void;
  handleChangeLang: (value: string) => void;
  handleUserEmail: (email: string) => void;
  handleUserPassword: (password: string) => void;
  handleRegisterAccount: (value: boolean) => void;
  handleSubmitRegister: (value: string) => Promise<Boolean>;
  handleAccountIsConfigured: (value: boolean) => void;

  // handlers style
  setWhiteTheme: (value: boolean) => void;
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

  // handler fetch
};
