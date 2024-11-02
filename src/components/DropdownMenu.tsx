import Link from "next/link";

import MenuIcon from "./icons/MenuIcon";
import LogoIcon from "./icons/LogoIcon";

import {Button} from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function DropdownMenuBtn() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="rounded-lg border p-2 hover:bg-white hover:text-primary" type="button">
          <MenuIcon />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-2 mt-2 w-56 bg-white">
        <DropdownMenuGroup className="flex h-full w-full flex-col items-center justify-between space-y-2">
          <DropdownMenuItem className="flex w-full justify-center">
            <Link className="text-active" href="/posts">
              Posts
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex w-full justify-center">
            <Link className="text-active" href="/about">
              About me
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex w-full justify-center">
            <Link href="/">Solutions</Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex w-full justify-center">
            <Link href="/">Pricing</Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
