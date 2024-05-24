import LangType, { PlanCard } from "./data";
import { UserProfile, UserType } from "./user";

export type ContextType = {
  lang: string;
  user: UserType | undefined;
  data: LangType;
  plans: Record<string, PlanCard>;
  isRegistered: boolean;
  userEmail: string;
  userPassword: string;
  isCreated: boolean;
  isConnected: boolean;
  isLoading: boolean;
  isCreatingAccount: boolean;
  registerStep: number | undefined;
  // header handlers
  handleShowHeaderBtn: (value: boolean) => void;
  handleHeaderBg: (value: string) => void;
  handleFixedHeader: (value: boolean) => void;
  handleResizeOnScroll: (value: boolean) => void;
  handleShowHeaderSelectLang: (value: boolean) => void;
  handleHeaderTransparentBtn: (value: boolean) => void;
  // user handlers
  setIsRegistered: (value: boolean) => void;
  handleCreateUser: (
    values: Array<{
      key: keyof UserType;
      value: string | number | UserProfile | {};
    }>
  ) => void;
  handleChangeLang: (value: string) => void;
  handleChangeBg: (value: boolean) => void;
  handleUserEmail: (email: string) => void;
  handleUserPassword: (password: string) => void;
  handleCreateAccount: (value: boolean) => void;
  handleDisconnect: () => void;
  handleConnect: () => void;
  handleSubmitRegister: (value: string) => Promise<Boolean>;
};
