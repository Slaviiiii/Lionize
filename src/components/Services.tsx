import MaxWidthWrapper from "./MaxWidthWrapper";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";

const perks = [
  {
    name: "Instant Delivery",
    Icon: ArrowDownToLine,
    description:
      "Get your products delivered to your address in a matter of time.",
  },
  {
    name: "Guaranteed Quality",
    Icon: CheckCircle,
    description:
      "Every product on our platform is verified to ensure our highest quality standards. Not happy? We offer a 30-day refund guarantee.",
  },
  {
    name: "For the Planet",
    Icon: Leaf,
    description:
      "We've pledged 1% of sales to the preservation and restoration of the natural environment.",
  },
];

const Services = () => {
  return (
    <MaxWidthWrapper className="max-w-full p-0 mt-[8em]">
      <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0 py-20 px-24 dark:bg-orange-200 bg-orange-50">
        {perks.map((perk) => (
          <div
            key={perk.name}
            className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
          >
            <div className="md:flex-shrink-0 flex justify-center">
              <div className="h-16 w-16 flex items-center justify-center rounded-full bg-orange-400 text-gray-900">
                {<perk.Icon className="w-1/3 h-1/3" />}
              </div>
            </div>

            <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
              <h3 className="text-base font-bold dark:text-gray-700">
                {perk.name}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground dark:text-gray-600">
                {perk.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </MaxWidthWrapper>
  );
};

export default Services;
