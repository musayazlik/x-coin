import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../libs/clientPromise";
import { connectMetamask } from "@services/metamaskConnect";
import User from "@models/Users";
import dbConnect from "@/libs/dbConnect";

export const authOptions = {
  // Configure one or more authentication providers

  adapter: MongoDBAdapter(clientPromise, {
    databaseName: "xCoin",
  }),
  providers: [
    // CredentialsProvider({
    //   name: "Email and Password",
    //   credentials: {
    //     email: { label: "Email", type: "email" },
    //     password: { label: "Password", type: "password" },
    //   },
    //   authorize: async (credentials) => {
    //     // E-posta ve şifreyle kullanıcı doğrulama işlemleri
    //     const user = await User.findOne({
    //       email: credentials.email,
    //       password: credentials.password,
    //     }).lean();

    //     if (user) {
    //       return Promise.resolve(user);
    //     } else {
    //       return Promise.resolve(null);
    //     }
    //   },
    // }),
    CredentialsProvider({
      name: "MetaMask",
      credentials: {},
      authorize: async (credentials) => {
        await dbConnect();
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
