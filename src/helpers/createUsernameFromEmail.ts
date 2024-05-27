/**
 * Découpe l'adresse email à "@" et return la premiere partie
 * @example: email: "helloworld@mail.com" => return: "helloworld"
 *
 * @param email string
 * @returns string
 */
export const createUsernameFromEmail = (email: string): string => {
  const userEmail = email.split("@");
  const username = userEmail[0].toLocaleLowerCase().replace(/[~=+_.-]/gi, "");
  return username;
};
