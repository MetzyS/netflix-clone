import DataType from "./data";
import { UserProfile, UserType } from "./user";

export type ContextType = {
  lang: string;
  user: UserType | undefined;
  data: DataType;
  userEmail: string;
  isCreated: boolean;
  isConnected: boolean;
  isLoading: boolean;
  // handleCreateUser: (values: {
  //   key: keyof UserType;
  //   value: string | number | UserProfile;
  // }) => void;
  handleCreateUser: (
    values: Array<{
      key: keyof UserType;
      value: string | number | UserProfile;
    }>
  ) => void;
  handleChangeLang: (value: string) => void;
  handleChangeBg: (value: boolean) => void;
  handleUserEmail: (value: string) => void;
  handleCreateAccount: (value: boolean) => void;
  handleDisconnect: (value: boolean) => void;
  handleConnect: (value: boolean) => void;
  handleSubmitRegister: (value: string) => Promise<Boolean>;
};
