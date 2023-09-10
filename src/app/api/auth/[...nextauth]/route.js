import nextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
export const authOptions = {
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.SECRET_KEY,
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
};

const handler = nextAuth(authOptions);
export { handler as GET, handler as POST };
