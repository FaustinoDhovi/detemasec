import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { client } from '@/app/sanity/client';
import bcrypt from 'bcryptjs';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        fullName: { label: "Full Name", type: "text" },
        schoolId: { label: "School ID", type: "text" }
      },
      async authorize(credentials) {
        if (!credentials) return null;
        
        const query = `*[_type == "student" && schoolId == $schoolId][0]`;
        const user = await client.fetch(query, { 
          schoolId: credentials.schoolId 
        });

        if (user && 
            user.fullName.toLowerCase() === credentials.fullName.toLowerCase() &&
            await bcrypt.compare(credentials.schoolId, user.password)) {
          return { 
            id: user._id, 
            name: user.fullName, 
            email: user.schoolId 
          };
        }
        return null;
      }
    })
  ],
  session: { strategy: "jwt" },
  pages: { signIn: '/portal' },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
