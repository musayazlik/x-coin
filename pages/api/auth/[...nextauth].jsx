import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "../../../libs/clientPromise";
import User from "@models/Users";
import dbConnect from "@/libs/dbConnect";
import bcryptjs from "bcryptjs";
import { uid } from "uid";

export const authOptions = {
  adapter: MongoDBAdapter(clientPromise),
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
            return Promise.resolve(user);
          } else {
            const isUser = await User.findOne({
              walletAddress: credentials.walletAddress,
            });

            if (isUser) {
              return Promise.resolve(isUser);
            } else {
              const newUser = await User.create({
                walletAddress: credentials.walletAddress,
                username: `user${newUserUsernNameId}`,
                email: `user${newUserUsernNameId}@gmail.com`,
              });
              return Promise.resolve(newUser);
            }
          }
        } else {
          const isMail = credentials.isData.includes("@");

          if (isMail) {
            const user = await User.findOne({
              email: credentials.isData,
            });
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
            const isPassword = await bcryptjs.compare(
              credentials.password,
              user.password
            );
            if (isPassword) {
              return Promise.resolve(user);
            }
          }

          return Promise.resolve(null);
        }
      },
    }),
  ],

  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60, // 24 saat
    updateAge: 60 * 60, // 1 hours
  },

  jwt: {
    encryption: true,
    signingKey: process.env.SECRET,
    encryptionKey: process.env.SECRET,
    encryptionAlgorithm: "HS512",
  },

  secret: process.env.SECRET,

  callbacks: {
    async jwt({ token, account, user }) {
      if (account) {
        token.user = account;
      }

      if (user) {
        token.user = user;
      }

      return token;
    },
    async session({ session, token, user }) {
      session.user.name = token.user.name;
      session.user.surname = token.user.surname;
      session.user.username = token.user.username;
      session.user.email = token.user.email;
      session.user.image = token.user.image;
      session.user.memberShipType = token.user.memberShipType;
      session.user.walletAddress = token.user.walletAddress;
      session.user.role = token.user.role;
      session.user.id = token.user._id;

      return session;
    },
  },

  pages: {
    signIn: "/auth/login",
    signOut: "/auth/signout",
    error: "/auth/error", // Error code passed in query string as ?error=
  },
};
export default NextAuth(authOptions);
