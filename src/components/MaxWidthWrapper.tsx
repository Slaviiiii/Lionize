import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <section
      className={cn(
        "flex flex-col gap-7 px-5 max-w-5xl mx-auto mt-24 text-center dark:text-gray-200 text-gray-900 ",
        className
      )}
    >
      {children}
    </section>
  );
};

export default MaxWidthWrapper;
