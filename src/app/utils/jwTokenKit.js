import { SignJWT, jwtVerify } from "jose";

//JWT Token Create
export async function CreateToken(email) {
  const secret = new TextEncoder().encode(process.env.SECRET_KEY);
  let token = await new SignJWT({ email: email })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setIssuer(process.env.ISSUER)
    .setExpirationTime(process.env.EXPIRATION)
    .sign(secret);
  return token;
}

// JWT Token Verify
export async function VerifyToken(token) {
  const secret = new TextEncoder().encode(process.env.SECRET_KEY);
  let decodedString = await jwtVerify(token, secret);
  return decodedString["payload"];
}
