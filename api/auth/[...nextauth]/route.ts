import { PrismaAdapter } from "@next-auth/prisma-adapter"
import type { NextAuthOptions } from "next-auth"
import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"
import { compare } from "bcrypt"

import prisma from "@/lib/prisma"

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Senha", type: "password" },
        userType: { label: "Tipo de Usuário", type: "text" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password || !credentials?.userType) {
          return null
        }

        let user

        if (credentials.userType === "student") {
          user = await prisma.student.findUnique({
            where: {
              email: credentials.email,
            },
          })
        } else if (credentials.userType === "company") {
          user = await prisma.company.findUnique({
            where: {
              email: credentials.email,
            },
          })
        } else if (credentials.userType === "institution") {
          user = await prisma.institution.findUnique({
            where: {
              email: credentials.email,
            },
          })
        }

        if (!user) {
          return null
        }

        const isPasswordValid = await compare(credentials.password, user.password)

        if (!isPasswordValid) {
          return null
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          userType: credentials.userType,
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          userType: user.userType,
        }
      }
      return token
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          userType: token.userType,
        },
      }
    },
  },
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
