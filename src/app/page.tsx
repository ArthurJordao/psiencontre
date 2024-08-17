import Link from "next/link"
import { CircleUser } from "lucide-react"
import { Button } from "~/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select"

export default function Home() {
  return (
    <>
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-white px-4 md:px-6 shadow-md">
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
      </header>
      <main className="h-screen px-4">
        <div className="md:pt-60 md:mx-auto md:max-w-4xl flex flex-col pt-32">
          <h1 className="text-3xl font-semibold">Encontre seu psicólogo hoje</h1>
          <p className="mt-4 text-muted-foreground text-lg">Psiencontre é uma plataforma onde você pode encontrar um psicólogo que atenda melhor suas necessidades.</p>
          <div className="flex flex-row flex-1 gap-4 items-baseline">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Selectione a abordagem desejada" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Psicanalise</SelectLabel>
                  <SelectItem value="freudiana"> Psicanálise Freudiana</SelectItem>
                  <SelectItem value="junguiana">Psicanálise Junguiana</SelectItem>
                  <SelectItem value="lacaniana">Psicanálise Lacaniana</SelectItem>
                  <SelectItem value="kleiniana">Psicanálise Kleiniana</SelectItem>
                  <SelectItem value="winnicottiana">Psicanálise Winnicottiana</SelectItem>
                </SelectGroup>
                <SelectGroup>
                  <SelectLabel>Behaviorismo</SelectLabel>
                  <SelectItem value="tcc">Terapia cognitivo comportamental (TCC)</SelectItem>
                  <SelectItem value="comportamental">Terapia Comportamental</SelectItem>
                  <SelectItem value="dialetica">Comportamental dialética (DBT)</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Button className="uppercase mt-4">Procurar</Button>
          </div>
          <Button asChild variant="link" className="mt-4 text-muted-foreground"><Link href="/linhas-psicologia">Gostaria de entender mais sobre as diferentes linhas</Link></Button>
          <Button asChild variant="link" className="mt-16 text-base"><Link href="/psicologo" >Clique aqui se for psicólogo</Link></Button>
        </div>
      </main>
    </>
  )
}
