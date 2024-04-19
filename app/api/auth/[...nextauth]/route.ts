import { db } from "@/app/_lib/prisma";
import NextAuth, { AuthOptions } from "next-auth"
import { Adapter } from "next-auth/adapters";
import GoogleProviter from 'next-auth/providers/google'
import { PrismaAdapter } from '@auth/prisma-adapter'

export const authOptions: AuthOptions = {adapter: PrismaAdapter (db) as Adapter,
  providers:[GoogleProviter({
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
     }),
    ],

}

const handler = NextAuth( authOptions);

export { handler as GET, handler as POST };