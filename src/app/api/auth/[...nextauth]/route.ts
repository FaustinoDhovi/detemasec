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

        // We use lower() on both the stored name and input name for a case-insensitive match
        // We use an exact match for studentId as it is a unique identifier (e.g., DET-2026-001)
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
          console.log("Login failed for:", credentials.studentId); // Helps you debug in Vercel logs
          return null;
        }

        return {
          id: student._id,
          name: student.studentId, // Critical: This is used for the Dashboard query
          email: student.fullName, // Storing display name in email field
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
        // This makes session.user.name equal to DET-2026-xxx
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