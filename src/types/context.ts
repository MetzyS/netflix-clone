import DataType from "./data";

export type ContextType = {
  lang: string;
  data: DataType;
  userEmail: string;
  isCreated: boolean;
  isConnected: boolean;
  handleChangeLang: (value: string) => void;
  handleChangeBg: (value: boolean) => void;
  handleUserEmail: (value: string) => void;
  handleCreateAccount: (value: boolean) => void;
  handleConnected: (value: boolean) => void;
  handleSubmitRegister: (value: string) => void;
};
