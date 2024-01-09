"use client";
import DarkModeToggle from "@/components/DarkModeToggle";
import * as Sheet from "@/components/ui/sheet";
import { UserButton, useAuth } from "@clerk/nextjs";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NavItems = () => {
  const { userId } = useAuth();
  const isAuth = !!userId;

  const [dropdown, setDropdown] = useState(true);
  const showDropdown = () => {
    setDropdown(!dropdown);
  };

  const links = [
    {
      href: "/products",
      text: "Products",
    },
    {
      href: "/about",
      text: "About",
    },
    {
      href: "/contact",
      text: "Contact",
    },
  ];

  return (
    <>
      <nav className="flex items-center gap-7 font-semibold max-sm:hidden">
        {links.map((link) => (
          <Link
            key={link.text}
            href={link.href}
            className="relative group text-gray-900 dark:text-white"
          >
            {link.text}
            <span className="absolute bottom-0 left-0 w-0 h-1 rounded-full bg-orange-500 transition-width duration-300 ease-in-out group-hover:w-full"></span>
          </Link>
        ))}

        {isAuth ? (
          <UserButton afterSignOutUrl="/" />
        ) : (
          <Link
            href={"/sign-up"}
            className="bg-primary hover:bg-orange-400 dark:hover:bg-500 text-white px-6 py-2 rounded-full"
          >
            Sign up
          </Link>
        )}

        <DarkModeToggle />
      </nav>

      <Sheet.Sheet>
        <div className="flex items-center gap-3 pr-3 sm:hidden">
          {isAuth ? (
            <UserButton afterSignOutUrl="/" />
          ) : (
            <Link
              href={"/sign-in"}
              className="bg-primary hover:bg-orange-400 dark:hover:bg-500 font-bold text-white px-6 py-2 rounded-full"
            >
              Sign in
            </Link>
          )}
          <Sheet.SheetTrigger asChild>
            <Menu onClick={showDropdown} size={30} className="mr-[-0.6em]" />
          </Sheet.SheetTrigger>
          <DarkModeToggle />
        </div>

        <Sheet.SheetContent className="flex flex-col items-center gap-10 w-full">
          <Sheet.SheetHeader>
            <Image src={"/logo.png"} width={130} height={130} alt="logo" />
          </Sheet.SheetHeader>
          <nav className="flex flex-col gap-4 text-center w-full">
            <Link
              href={"/"}
              className="font-bold text-lg block hover:bg-primary rounded-md hover:text-white p-5"
            >
              Home
            </Link>
            {links.map((link) => (
              <Link
                key={link.text}
                href={link.href}
                className="font-bold text-lg block hover:bg-primary rounded-md hover:text-white p-5"
              >
                {link.text}
              </Link>
            ))}
          </nav>
        </Sheet.SheetContent>
      </Sheet.Sheet>
    </>
  );
};

export default NavItems;
