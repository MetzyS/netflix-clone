/**
 * Verif si l'utilisateur est connecté
 * @remarks
 * "user" dans localStorage
 * @returns Boolean
 */
export const userIsConnected = (): boolean => {
  let isConnected: boolean;
  const user = localStorage.getItem("user");
  user ? (isConnected = true) : (isConnected = false);
  // console.log(isConnected);
  return isConnected;
};
