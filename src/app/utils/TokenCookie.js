import { CreateToken } from "./jwTokenKit";

export async function TokenCookie(email) {
  let token = await CreateToken(email);
  return {
    // "Set-Cookie": `token=${token}; Path=/; HttpOnly; Max-Age=7200; SameSite=Strict`,
    "Set-Cookie": `token=${token}; Path=/`,
  };
}
