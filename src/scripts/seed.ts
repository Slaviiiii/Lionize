import { NewProduct, insertProduct } from "@/lib/db";

async function main() {
  const newProduct: NewProduct = {
    name: "Kinchinkochi Knife",
    description: "Comfortable, medium size, nice handle. Made in China.",
    price: "750",
    images: [
      "https://images.unsplash.com/photo-1614362705324-8da11fd16754?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  };

  const res = await insertProduct(newProduct);

  process.exit();
}

main();
