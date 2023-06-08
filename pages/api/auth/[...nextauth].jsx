import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../libs/clientPromise";
import User from "@models/Users";
import dbConnect from "@/libs/dbConnect";
import bcryptjs from "bcryptjs";
import { uid } from "uid";

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
              console.log("User var");
              return Promise.resolve(isUser);
            } else {
              console.log("User yok");
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
