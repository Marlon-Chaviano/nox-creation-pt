import Link from "next/link";

import LogoIcon from "./icons/LogoIcon";

export function NavBar() {
  return (
    <nav className="flex w-full items-center justify-between px-10 py-4 text-white lg:px-20">
      <div className="flex items-center space-x-1">
        <LogoIcon fill="#fff" />
        <h1 className="text-xl">protech</h1>
      </div>

      <div className="flex space-x-6 text-sm font-medium">
        <Link
          className="transition-all duration-200 hover:-translate-y-1 hover:scale-[1.1]"
          href="/"
        >
          Posts
        </Link>
        <Link
          className="transition-all duration-200 hover:-translate-y-1 hover:scale-[1.1]"
          href="/"
        >
          Solutions
        </Link>
        <Link
          className="transition-all duration-200 hover:-translate-y-1 hover:scale-[1.1]"
          href="/"
        >
          Resources
        </Link>
        <Link
          className="transition-all duration-200 hover:-translate-y-1 hover:scale-[1.1]"
          href="/"
        >
          Pricing
        </Link>
      </div>

      <button
        className="rounded-lg border px-4 py-2 text-sm font-medium transition-colors duration-300 hover:bg-white hover:text-primary"
        type="button"
      >
        Request Demo
      </button>
    </nav>
  );
}
