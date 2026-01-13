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

        // This query splits the name by space and joins it back together (no spaces)
        // then compares it to the 'clean' name sent from the frontend.
        const query = `*[_type == "student" && studentId == $studentId && lower(string::split(fullName, " ") >> join("")) == $cleanInputName][0]{
          _id,
          studentId,
          fullName
        }`;
        
        const student = await client.fetch(query, { 
          studentId: credentials.studentId,
          cleanInputName: credentials.fullName // This is already stripped of spaces
        });

        if (!student) {
          return null;
        }

        return {
          id: student._id,
          name: student.studentId, 
          email: student.fullName, 
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
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };