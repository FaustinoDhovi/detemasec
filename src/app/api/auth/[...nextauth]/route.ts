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
        if (!credentials?.studentId || !credentials?.fullName) return null;

        try {
          // Find student by ID first
          const student = await client.fetch(
            `*[_type == "student" && studentId == $studentId][0]{ _id, studentId, fullName }`,
            { studentId: credentials.studentId.trim() }
          );

          if (!student) return null;

          // Normalize both names: lowercase and remove all extra spaces
          const cleanDbName = student.fullName.toLowerCase().replace(/\s+/g, ' ').trim();
          const cleanInputName = credentials.fullName.toLowerCase().replace(/\s+/g, ' ').trim();

          if (cleanDbName === cleanInputName) {
            return {
              id: student._id,
              name: student.studentId, 
              email: student.fullName, 
            };
          }
          return null;
        } catch (error) {
          console.error('Auth error:', error);
          return null;
        }
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
  pages: { signIn: '/login', error: '/login' },
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };