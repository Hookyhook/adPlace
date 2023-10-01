import type { NextAuthOptions } from "next-auth";
import Github from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    Github({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
    Credentials({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(
        credentials: Record<"username" | "password", string> | undefined
      ) {
        const user = { id: "1", name: "J Smith", password: "password" };
        if (
          user.password === credentials?.password &&
          user.name === credentials?.username
        ) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
};
