// Vérification si l'utilisateur est déjà entrain de créer un compte (check sessionStorage)
/**
 * Check si l'utilisateur est déjà en procédure de création de compte
 * @remarks
 * "isCreating" localStorage
 * @returns boolean
 */
export const checkIfUserIsCreatingAccount = (): boolean => {
  const user = localStorage.getItem("user");
  if (user && JSON.parse(user).registered) {
    return JSON.parse(user).registered;
  }
  return false;
};
/**
 * Check à quelle étape de l'inscription l'utilisateur s'est arrêté.
 * undefined = aucune info enregistrée
 * @returns number | undefined
 */
export const checkUserRegisterStep = (): number | undefined => {
  let step: number | undefined = 0;
  const userDataRaw = localStorage.getItem("user");
  let parsedUserData;
  if (userDataRaw) {
    parsedUserData = JSON.parse(userDataRaw);
    step = parsedUserData.registerStep;
  }
  return step;
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
  registerStep: number,
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
          authorization: true,
          plan: plan,
          profiles: {},
          avatarUrl: "",
          registerStep: registerStep,
        };
        localStorage.setItem("user", JSON.stringify(userInfos));
        localStorage.setItem("isCreating", "false");
      }
    : () => {
        const userEmail = email.split("@");
        const username = userEmail[0];
        const userInfos = {
          email: email,
          password: password,
          username: username,
          fullName: "",
          plan: 0,
          authorization: false,
          profiles: {},
          avatarUrl: "",
          registerStep: registerStep,
        };
        localStorage.setItem("user", JSON.stringify(userInfos));
        localStorage.setItem("isCreating", "true");
      };
};
