import { CreateToken } from "./JWTokenKit";

export async function TokenCookie(email) {
  let token = await CreateToken(email);
  return {
    "Set-Cookie": `token=${token}; Path=/; HttpOnly; SameSite=Strict; Max-Age=3600`,
  };
}
