import Image from "next/image";
import Link from "next/link";
import NavItems from "@/components/NavItems";

const Navbar = () => {
  return (
    <header className="flex fixed z-999 overflow-hidden w-full items-center justify-around h-20 max-sm:justify-between bg-white/90 dark:bg-black/5 backdrop-filter backdrop-blur-sm shadow-sm dark:shadow-gray-500 shadow-gray-300">
      <Link href={"/"}>
        <Image src="/logo.png" width={100} height={100} alt="Logo" />
      </Link>

      <NavItems />
    </header>
  );
};

export default Navbar;
