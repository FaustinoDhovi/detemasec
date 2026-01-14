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
          console.log('❌ Missing credentials');
          return null;
        }

        try {
          const query = `*[_type == "student" && studentId == $studentId][0]{
            _id,
            studentId,
            fullName
          }`;
          
          console.log('🔍 Searching for student:', credentials.studentId);
          
          const student = await client.fetch(query, { 
            studentId: credentials.studentId
          });

          console.log('📊 Student found:', student);

          if (!student) {
            console.log('❌ No student found with ID:', credentials.studentId);
            return null;
          }

          // Compare names (remove spaces, case insensitive)
          const cleanDbName = student.fullName.replace(/\s+/g, '').toLowerCase();
          const cleanInputName = credentials.fullName.toLowerCase();
          
          console.log('🔄 Comparing names:', cleanDbName, '===', cleanInputName);

          if (cleanDbName === cleanInputName) {
            console.log('✅ Authentication successful');
            return {
              id: student._id,
              name: student.studentId, 
              email: student.fullName, 
            };
          }

          console.log('❌ Name mismatch');
          return null;
        } catch (error) {
          console.error('💥 Auth error:', error);
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
  pages: {
    signIn: '/login',
    error: '/login'
  },
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };