import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { client } from '@/sanity/lib/client';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        studentId: { label: "Student ID", type: "text" },
        fullName: { label: "Full Name", type: "text" }
      },
      async authorize(credentials: any) {
        if (!credentials?.studentId || !credentials?.fullName) {
          return null;
        }

        // Query student from Sanity using both ID and Full Name
        // We use 'lower' to make the name check case-insensitive
        const query = `*[_type == "student" && studentId == $studentId && lower(fullName) == lower($fullName)][0]{
          _id,
          studentId,
          fullName,
          grade
        }`;
        
        const student = await client.fetch(query, { 
          studentId: credentials.studentId.trim(),
          fullName: credentials.fullName.trim()
        });

        if (!student) {
          return null; // Login fails if the ID and Name don't match
        }

        return {
          id: student._id,
          name: student.studentId, // We use ID as name for the dashboard query logic
          email: student.fullName, // Store full name here for display in the UI
        };
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        token.studentId = user.name;
        token.fullName = user.email;
      }
      return token;
    },
    async session({ session, token }: any) {
      if (session?.user) {
        (session.user as any).name = token.studentId; 
        (session.user as any).fullName = token.fullName;
      }
      return session;
    }
  },
  pages: {
    signIn: '/login',
    error: '/login'
  },
  session: {
    strategy: "jwt"
  },
  secret: process.env.NEXTAUTH_SECRET
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };