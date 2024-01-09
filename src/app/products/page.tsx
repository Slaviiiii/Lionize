"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import PublicLayout from "@/app/layouts/Public-layout";
import Sidebar from "@/components/Sidebar";
import Product from "@/components/Product";
import { z } from "zod";
import { trpc } from "@/app/_trpc/client";

const ProductSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  price: z.number(),
  images: z.array(z.string()),
});

export type ProductT = z.infer<typeof ProductSchema>;

export default function Products() {
  const productsData = trpc.getProducts.useQuery<any>();
  let products: ProductT[] = [];

  if (productsData.data) {
    try {
      if (Array.isArray(productsData.data)) {
        products = productsData.data;
      } else {
        products = [productsData.data];
      }
    } catch (err) {
      throw new Error("Invalid product data");
    }
  }

  return (
    <PublicLayout>
      <MaxWidthWrapper>
        <div className="flex flex-col items-start text-left max-sm:items-center">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-50">
            All Products
          </h1>
          <p className="text-xl font-semibold mb-3 mt-1 text-gray-500 dark:text-gray-400">
            On this page you can find everything we produce
          </p>
          <Sidebar />
          <div className="flex justify-center flex-wrap gap-10 mt-14">
            {products.map((product: ProductT) => (
              <Product key={product.description} {...product} />
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </PublicLayout>
  );
}
