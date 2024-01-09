import { ProductT } from "@/app/products/page";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import Image from "next/image";

const Product = (product: ProductT) => {
  return (
    <Card
      key={product.name}
      className="text-left w-[17em] outline-none dark:hover:outline-4 shadow-lg hover:shadow-gray-400 dark:hover:shadow-none  hover:cursor-pointer"
    >
      <Image
        src={product.images[0]}
        width={100}
        height={100}
        alt="product"
        className="w-full h-64 rounded-t-sm"
      />
      <CardContent className="flex flex-col gap-1 mt-2 py-2 pb-3">
        <CardDescription className="truncate ... text-gray-700 text-md dark:text-gray-300">
          {product.description}
        </CardDescription>
        <CardDescription className="font-bold text-2xl text-gray-700 dark:text-gray-300">
          <span className="text-sm font-medium">BGN</span>
          {product.price}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default Product;
