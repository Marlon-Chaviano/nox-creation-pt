import Link from "next/link";

import LogoIcon from "./icons/LogoIcon";

export function NavBar() {
  return (
    <nav className="flex w-full items-center justify-between px-4 py-4 bg-primary text-white lg:px-20">
      <div className="flex items-center space-x-1">
        <LogoIcon fill="#fff" />
        <h1 className="text-xl">protech</h1>
      </div>

      <div className="hidden space-x-6 text-sm font-medium md:flex">
        <Link
          className="font-semibold transition-all duration-200 hover:-translate-y-1 hover:scale-[1.1] hover:text-active"
          href="/"
        >
          Posts
        </Link>
        <Link
          className="font-semibold transition-all duration-200 hover:-translate-y-1 hover:scale-[1.1] hover:text-active"
          href="/"
        >
          Solutions
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

      <button className="block md:hidden">---</button>

      <button
        className="hidden rounded-lg border px-4 py-2 text-sm font-medium transition-colors duration-300 hover:bg-white hover:text-primary md:flex"
        type="button"
      >
        Request Demo
      </button>
    </nav>
  );
}
