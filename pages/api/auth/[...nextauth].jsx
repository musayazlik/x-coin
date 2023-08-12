import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "../../../libs/clientPromise";
import User from "@models/Users";
import dbConnect from "@/libs/dbConnect";
import bcryptjs from "bcryptjs";
import { uid } from "uid";

export const authOptions = {
  adapter: MongoDBAdapter(clientPromise, {
    collections: {
      Accounts: "accounts",
      Sessions: "sessions",
      Users: "users",
      VerificationTokens: "verificationTokens",
    },
    databaseName: "xCoin",
  }),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        walletAddress: { label: "Wallet Address", type: "text" },
        isData: { label: "Username or Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        await dbConnect();

        const newUserUsernNameId = uid(10);

        if (credentials.walletAddress) {
          const user = await User.findOne({
            walletAddress: credentials.walletAddress,
          });

          if (user) {
            if (user.isActive === false || user.isDeleted === true) {
              return Promise.reject(
                new Error(
                  "Your account is not active or has been deleted. Please contact the administrator."
                )
              );
            }
            return Promise.resolve(user);
          } else {
            const newUser = await User.create({
              walletAddress: credentials.walletAddress,
              username: `user${newUserUsernNameId}`,
              email: `user${newUserUsernNameId}@gmail.com`,
            });
            return Promise.resolve(newUser);
          }
        } else {
          const isMail = credentials.isData.includes("@");

          if (isMail) {
            const user = await User.findOne({
              email: credentials.isData,
            });

            if (!user) {
              return Promise.reject(
                new Error("Your username or password is incorrect.")
              );
            }

            if (user.isActive === false || user.isDeleted === true) {
              return Promise.reject(
                new Error("Your account is not active or has been deleted.")
              );
            }
            const isPassword = await bcryptjs.compare(
              credentials.password,
              user.password
            );

            if (isPassword) {
              return Promise.resolve(user);
            }
          } else {
            const user = await User.findOne({
              username: credentials.isData,
            });

            if (!user) {
              return Promise.reject(
                new Error("Your username or password is incorrect.")
              );
            }

            if (user.isActive === false || user.isDeleted === true) {
              return Promise.reject(
                new Error("Your username or password is incorrect.")
              );
            }
            const isPassword = await bcryptjs.compare(
              credentials.password,
              user.password
            );
            if (isPassword) {
              return Promise.resolve(user);
            }
          }

          return Promise.reject(
            new Error("Your username or password is incorrect.")
          );
        }
      },
    }),
  ],

  session: {
    strategy: "jwt",
    maxAge: 21600, // 6 hours
    updateAge: 600, // 1 hour
  },

  debug: process.env.NODE_ENV === "development" ? true : false,

  jwt: {
    encryption: true,
    signingKey: process.env.SECRET,
    encryptionKey: process.env.SECRET,
    encryptionAlgorithm: "HS512",
  },

  secret: process.env.SECRET,

  callbacks: {
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async jwt({ token, account, user }) {
      if (user) {
        token.name = user.name;
        token.surname = user.surname;
        token.username = user.username;
        token.email = user.email;
        token.picture = user.image;
        token.memberShipType = user.memberShipType;
        token.walletAddress = user.walletAddress;
        token.role = user.role;
      }

      return token;
    },
    async session({ session, token, user }) {
      session.user.name = token.name;
      session.user.surname = token.surname;
      session.user.username = token.username;
      session.user.email = token.email;
      session.user.image = token.picture;
      session.user.memberShipType = token.memberShipType;
      session.user.walletAddress = token.walletAddress;
      session.user.role = token.role;
      session.user.id = token.sub;

      return session;
    },
  },

  pages: {
    signIn: "/auth/login",
    signOut: "/auth/signout",
    error: "/auth/login", // Error code passed in query string as ?error=
  },
};
export default NextAuth(authOptions);
