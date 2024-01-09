"use client";
import { trpc } from "@/app/_trpc/client";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Product from "./Product";

const Newest = () => {
  const products = trpc.getProducts.useQuery().data;

  return (
    <MaxWidthWrapper>
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-5xl">Newest products available</h1>
        <p className="text-lg font-semibold text-gray-500 dark:text-gray-400">
          Here are some of our latest products
        </p>
      </div>
      <div className="flex justify-center flex-wrap gap-16 mt-16">
        {products?.map((product: any) => (
          <Product key={product.name} {...product} />
        ))}
      </div>
    </MaxWidthWrapper>
  );
};

export default Newest;
