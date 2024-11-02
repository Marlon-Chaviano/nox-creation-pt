"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";

import LogoIcon from "./icons/LogoIcon";
import {DropdownMenuBtn} from "./DropdownMenu";

export function NavBar() {
  const path = usePathname();

  console.log(path);

  return (
    <nav className="-mb-2 flex w-full items-center justify-between bg-primary px-4 py-4 text-white lg:px-20">
      <Link className="flex items-center space-x-1" href="/">
        <LogoIcon fill="#fff" />
        <h1 className="text-2xl">protech</h1>
      </Link>

      <div className="hidden space-x-6 text-sm font-medium md:flex">
        <Link
          className={`font-semibold transition-all duration-200 hover:text-active ${path == "/posts" ? "text-active" : "hover:-translate-y-1 hover:scale-[1.1]"}`}
          href="/posts"
        >
          Posts
        </Link>
        <Link
          className={`font-semibold transition-all duration-200 hover:text-active ${path == "/about" ? "text-active" : "hover:-translate-y-1 hover:scale-[1.1]"}`}
          href="/about"
        >
          About me
        </Link>
        <Link
          className="font-semibold transition-all duration-200 hover:-translate-y-1 hover:scale-[1.1] hover:text-active"
          href="/"
        >
          Resources
        </Link>
        <Link
          className="font-semibold transition-all duration-200 hover:-translate-y-1 hover:scale-[1.1] hover:text-active"
          href="/"
        >
          Pricing
        </Link>
      </div>

      <button
        className="hidden rounded-lg border px-4 py-2 text-sm font-medium transition-colors duration-300 hover:bg-white hover:text-primary md:flex"
        type="button"
      >
        Request Demo
      </button>

      <div className="flex md:hidden">
        <DropdownMenuBtn />
      </div>
    </nav>
  );
}
