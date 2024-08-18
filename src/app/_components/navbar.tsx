import { CircleUser } from "lucide-react"
import Link from "next/link"
import { Button } from "~/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu"

export default function Navbar() {
  return (<header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-white px-4 md:px-6 shadow-md">
    <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
      <h1>
        <Link
          href="#"
          className="flex items-center gap-2 text-lg font-semibold md:text-base text-primary"
        >
          Psiencontre
        </Link>
      </h1>
    </nav>
    <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="ml-auto flex-1 sm:flex-initial">
          <Button variant="secondary" size="icon" className="rounded-full">
            <CircleUser className="h-5 w-5" />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  </header>)
}
