"use client";
import { useState, useEffect, useRef } from "react";
import { buttonVariants } from "./ui/button";
import { X } from "lucide-react";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const sidebarRef = useRef<any>(null);

  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebar(false);
      }
    };

    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebar]);

  const changeSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <>
      <div className="text-center">
        <button
          className={buttonVariants({ size: "sm" })}
          type="button"
          onClick={changeSidebar}
          data-drawer-target="drawer-navigation"
          data-drawer-show="drawer-navigation"
          aria-controls="drawer-navigation"
        >
          Sort your products
        </button>
      </div>

      {sidebar ? (
        <>
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div
            ref={sidebarRef}
            className="fixed top-0 left-0 flex flex-col items-center py-8 h-full w-96 max-sm:w-72 bg-white text-gray-900"
          >
            <X
              className="relative left-40 max-sm:left-28 top-[-1em] hover:cursor-pointer"
              onClick={changeSidebar}
            />
            <h1 className="font-semibold text-4xl">Sort products</h1>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Sidebar;
