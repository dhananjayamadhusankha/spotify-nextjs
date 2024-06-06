// types/next-auth.d.ts
import NextAuth, { DefaultSession, DefaultJWT } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      accessToken: string;
      refreshToken: string;
      username: string;
      accessTokenExpires: number;
    } & DefaultSession["user"];
  }

  interface JWT extends DefaultJWT {
    accessToken: string;
    refreshToken: string;
    username: string;
    accessTokenExpires: number;
    error?: string;
  }
}
