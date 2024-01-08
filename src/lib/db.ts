import "@/lib/config";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
import { products, users } from "./schema";
import * as schema from "./schema";

export const db = drizzle(sql, { schema });

export const getUsers = async () => {
  const selectResult = await db.select().from(users);
  return selectResult;
};

export type NewUser = typeof users.$inferInsert;
export type NewProduct = typeof products.$inferInsert;

export const insertUser = async (user: NewUser) => {
  return db.insert(users).values(user).returning();
};

export const getUsers2 = async () => {
  const result = await db.query.users.findMany();
  return result;
};

export const insertProduct = async (product: NewProduct) => {
  return db.insert(products).values(product).returning();
};
