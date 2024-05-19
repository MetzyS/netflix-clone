import dummyUsers from "../constants/dummyUsers.json";
import { Users } from "../types/user";

const dummyUser: Users = dummyUsers;

/**
 * Simule un call API avec 1sec de delai (permet d'afficher les spinners...)
 *
 * @param email string
 * @returns boolean
 */
export async function checkEmail(email: string): Promise<boolean> {
  return new Promise<boolean>((resolve) => {
    setTimeout(() => {
      const userExists = Object.values(dummyUser).some(
        (user) => user.email === email
      );
      resolve(userExists);
    }, 1000);
  });
}
