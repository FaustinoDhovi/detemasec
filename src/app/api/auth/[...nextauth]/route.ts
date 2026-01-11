import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { client } from '@/sanity/lib/client';  // CORRECT PATH
import bcrypt from 'bcryptjs';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        studentId: { label: "Student ID", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.studentId || !credentials?.password) {
          return null;
        }

        // Query student from Sanity
        const query = `*[_type == "student" && studentId == $studentId][0]{
          _id,
          studentId,
          fullName,
          email,
          portalPassword
        }`;
        
        const student = await client.fetch(query, { 
          studentId: credentials.studentId 
        });

        if (!student || !student.portalPassword) {
          return null;
        }

        // Compare passwords (you should hash passwords in Sanity)
        const isValid = await bcrypt.compare(
          credentials.password, 
          student.portalPassword
        );

        if (!isValid) {
          return null;
        }

        return {
          id: student._id,
          studentId: student.studentId,
          name: student.fullName,
          email: student.email
        };
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.studentId = user.studentId;
      }
      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.studentId = token.studentId;
      }
      return session;
    }
  },
  pages: {
    signIn: '/portal/login',
    error: '/portal/login'
  },
  session: {
    strategy: "jwt"
  },
  secret: process.env.NEXTAUTH_SECRET
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
