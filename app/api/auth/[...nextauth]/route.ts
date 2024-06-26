import { db } from "@/app/_lib/prisma";
import NextAuth from "next-auth"
import { Adapter } from "next-auth/adapters";
import GoogleProviter from 'next-auth/providers/google'
import { PrismaAdapter } from '@auth/prisma-adapter'

const handler = NextAuth({ adapter: PrismaAdapter (db) as Adapter,
  providers:[GoogleProviter({
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOFLE_CLIENT_SECRET as string,
     }),
    ],
});

export { handler as GET, handler as POST };