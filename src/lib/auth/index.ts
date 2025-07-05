import { db } from "@/lib/db";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { admin } from "better-auth/plugins";

export const auth = betterAuth({
  database: prismaAdapter(db, {
    provider: "sqlite",
  }),
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
  plugins: [admin()],
  events: {
    async onLogin({
      user,
    }: {
      user: { id: string; name?: string; image?: string };
    }) {
      await db.user.update({
        where: { id: user.id },
        data: {
          name: user.name,
          image: user.image,
        },
      });
    },
  },
});
