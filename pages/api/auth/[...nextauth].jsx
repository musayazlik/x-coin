import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../libs/clientPromise";
import User from "@models/Users";
import dbConnect from "@/libs/dbConnect";
import bcryptjs from "bcryptjs";

export const authOptions = {
  adapter: MongoDBAdapter(clientPromise, {
    databaseName: "xCoin",
  }),
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      authorize: async (credentials) => {
        await dbConnect();

        if (credentials.walletAddress) {
          const user = await User.findOne({
            walletAddress: credentials.walletAddress,
          });

          if (user) {
            return Promise.resolve(user);
          } else {
            const createUser = await User.create({
              walletAddress: credentials.walletAddress,
            });
            return Promise.resolve(createUser);
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
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },

  secret: process.env.SECRET,

  pages: {
    signIn: "/auth/login",
    signOut: "/auth/signout",
    error: "/auth/error", // Error code passed in query string as ?error=
  },
};
export default NextAuth(authOptions);
