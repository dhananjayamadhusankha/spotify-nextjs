// import spotifyWebApi, { LOGIN_URL } from "@/lib/spotify";
// import NextAuth from "next-auth";
// import { JWT } from "next-auth/jwt";
// import SpotifyProvider from "next-auth/providers/spotify";

// const jwtSecret = process.env.JWT_SECRET;

// // async function refreshAccessToken(token: JWT): Promise<JWT> {
// //   try {
// //     spotifyWebApi.setAccessToken(token.access_token);
// //     spotifyWebApi.setRefreshToken(token.refresh_token);

// //     const { body: refreshedTokens } = await spotifyWebApi.refreshAccessToken();
// //     console.log("Refreshed tokens", refreshedTokens);

// //     return {
// //       ...token,
// //       access_token: refreshedTokens.access_token,
// //       expires_at: Date.now() + refreshedTokens.expires_in * 1000,
// //       refresh_token: refreshedTokens.refresh_token ?? token.refresh_token,
// //     };
// //   } catch (error) {
// //     console.error("Error refreshing access token", error);

// //     return {
// //       ...token,
// //       error: "RefreshAccessTokenError",
// //     };
// //   }
// // }

// export default NextAuth({
//   providers: [
//     SpotifyProvider({
//       clientId: process.env.NEXT_PUBLIC_CLIENT_ID as string,
//       clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET as string,
//       authorization: LOGIN_URL,
//     }),
//   ],
//   secret: jwtSecret,
//   pages: {
//     signIn: "/login",
//   },
//   callbacks: {
//     async jwt({ token, account, user }) {
//       // initial sign in
//       if (user && account) {
//         return {
//           //   ...token,
//           access_token: account.access_token,
//           refresh_token: account.refresh_token,
//           username: account.providerAccountId,
//           expires_at: account.expires_at,
//         };
//       }
//       // Return previous token if the access token has not expired yet
//       else if (Date.now() < token.expires_at * 1000) {
//         console.log("EXISITING ACCESS TOKEN IS VALID");
//         return token;
//       } else {
//         if (!token.refresh_token) {
//           throw new Error("Missing refresh token");
//         }

//         try {
//           spotifyWebApi.setAccessToken(token.access_token);
//           spotifyWebApi.setRefreshToken(token.refresh_token);

//           const { body: refreshedTokens } =
//             await spotifyWebApi.refreshAccessToken();
//           console.log("Refreshed tokens", refreshedTokens);

//           return {
//             ...token,
//             access_token: refreshedTokens.access_token,
//             expires_at: Math.floor(
//               Date.now() / 1000 + (refreshedTokens.expires_in as number)
//             ),
//             refresh_token: refreshedTokens.refresh_token ?? token.refresh_token,
//           };
//         } catch (error) {
//           console.error("Error refreshing access token", error);
//           // The error property can be used client-side to handle the refresh token error
//           return { ...token, error: "RefreshAccessTokenError" as const };
//         }
//       }

//       //   console.log("ACCESS TOKEN HAS EXPIRED, REFRESHING...");
//       //   return await refreshAccessToken(token);
//     },
//   },
// });

// declare module "next-auth" {
//   interface Session {
//     error?: "RefreshAccessTokenError";
//   }
// }

// declare module "next-auth/jwt" {
//   interface JWT {
//     access_token: string;
//     expires_at: number;
//     refresh_token: string;
//     error?: "RefreshAccessTokenError";
//   }
// }
