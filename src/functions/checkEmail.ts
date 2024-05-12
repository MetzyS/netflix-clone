import dummyUsers from "../data/dummyUsers.json";
import { Users } from "../types/user";

const dummyUser: Users = dummyUsers;

export async function checkEmail(email: string): Promise<boolean> {
  return new Promise<boolean>((resolve) => {
    setTimeout(() => {
      const userExists = Object.values(dummyUser).some(
        (user) => user.email === email
      );
      resolve(userExists);
    }, 1500);
  });
}
