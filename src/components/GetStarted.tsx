import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

const GetStarted = () => {
  return (
    <MaxWidthWrapper>
      <div className="dark:bg-orange-500/80 bg-orange-500 mt-20  p-16 mb-10 rounded-2xl text-gray-50 shadow-xl shadow-gray-500">
        <h1 className="font-bold text-4xl mb-1">Get started</h1>
        <p className="text-xl font-semibold mb-7 text-gray-200">
          Come along our journey and explore everything we have for sale
        </p>
        <Link
          href={"/sign-up"}
          className={cn(
            buttonVariants({ variant: "secondary", size: "lg" }),
            "text-lg"
          )}
        >
          Start Now
        </Link>
      </div>
    </MaxWidthWrapper>
  );
};

export default GetStarted;
