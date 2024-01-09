import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";
import { ArrowRightCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <MaxWidthWrapper>
      <h1 className="text-6xl max-sm:text-4xl font-bold">
        Your E-commerce store for high-quality{" "}
        <span className="text-primary">products</span>
      </h1>
      <p className="text-xl font-semibold text-gray-500 dark:text-gray-400">
        Our products will make your life easier and more stylish
      </p>
      <Link
        href={"/products"}
        className={cn(
          "flex items-center gap-2 mx-auto shadow-2xl shadow-orange-500/100",
          buttonVariants({ size: "lg" })
        )}
      >
        Browse All <ArrowRightCircle />
      </Link>
    </MaxWidthWrapper>
  );
};

export default Hero;
