// Vérification si l'utilisateur est déjà entrain de créer un compte (check sessionStorage)
/**
 * Check si l'utilisateur est déjà en procédure de création de compte
 * @remarks
 * "isCreating" localStorage
 * @returns boolean
 */
export const checkIfUserIsCreatingAccount = (): Boolean => {
  let isCreating: boolean;
  const creationStorage = sessionStorage.getItem("isCreating");
  creationStorage ? (isCreating = true) : (isCreating = false);
  return isCreating;
};

/**
 * Sauvegarde les infos saisies par l'utilisateur pour pouvoir reprendre la ou il s'est arrêté
 *
 * @remarks
 * modifie le statut de "isCreating" @ localStorage
 * modifie le statut de "user" @ localStorage
 *
 * @param email: string
 * @param password: string
 * @param plan: number
 */
export const storeUserAccountCreationInfo = (
  email: string,
  password: string,
  plan?: number
) => {
  plan
    ? () => {
        const userEmail = email.split("@");
        const username = userEmail[0];
        const userInfos = {
          email: email,
          password: password,
          username: username,
          fullName: "",
          authorization: plan,
          profiles: {},
          avatarUrl: "",
        };
        sessionStorage.setItem("user", JSON.stringify(userInfos));
        sessionStorage.setItem("isCreating", "false");
      }
    : () => {
        const userEmail = email.split("@");
        const username = userEmail[0];
        const userInfos = {
          email: email,
          password: password,
          username: username,
          fullName: "",
          authorization: undefined,
          profiles: {},
          avatarUrl: "",
        };
        sessionStorage.setItem("user", JSON.stringify(userInfos));
        sessionStorage.setItem("isCreating", "true");
      };
};
