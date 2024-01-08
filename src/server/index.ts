import { migrate } from "drizzle-orm/vercel-postgres/migrator";
import { publicProcedure, router } from "./trpc";
import { products } from "@/lib/schema";
import { db } from "@/lib/db";

migrate(db, { migrationsFolder: "drizzle" });

export const appRouter = router({
  getProducts: publicProcedure.query(async () => {
    return await db.select().from(products);
  }),
});

export type AppRouter = typeof appRouter;
