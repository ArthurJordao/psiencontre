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
          <Link
            href="#"
            className="flex items-center gap-2 text-lg font-semibold md:text-base text-primary"
          >
            Psiencontre
          </Link>
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
      <main className="h-screen">
        <div className="pt-60 mx-auto max-w-6xl flex flex-col items-center">
          <h1 className="text-3xl font-semibold text-center">Encontre seu psicólogo hoje</h1>
          <p className="mt-4 text-center text-muted-foreground">Psiencontre é uma plataforma onde você pode encontrar um psicólogo que atenda melhor suas necessidades.</p>
          <div className="flex flex-row flex-1 gap-4 items-baseline">
            <Select>
              <SelectTrigger className="w-[500px]">
                <SelectValue placeholder="Selectione a abordagem desejada" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Psicanalise</SelectLabel>
                  <SelectItem value="apple">Winicott</SelectItem>
                  <SelectItem value="banana">Lacan</SelectItem>
                  <SelectItem value="blueberry">Freud</SelectItem>
                  <SelectItem value="grapes">Yung</SelectItem>
                  <SelectItem value="pineapple">Melanie Klain</SelectItem>
                </SelectGroup>
                <SelectGroup>
                  <SelectLabel>Behaviorismo</SelectLabel>
                  <SelectItem value="apple">TCC</SelectItem>
                  <SelectItem value="banana">Análise do comportamento</SelectItem>
                  <SelectItem value="blueberry">XPTO</SelectItem>
                  <SelectItem value="grapes">Blah</SelectItem>
                  <SelectItem value="pineapple">Seriously bro this is crazy</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Button className="uppercase mt-4">Procurar</Button>
          </div>
          <Button asChild variant="outline" className="uppercase mt-4"><Link href="#how-it-works">Saiba mais</Link></Button>
          <Link href="/psicologo" className="text-muted-foreground mt-16">Clique aqui se for psicólogo</Link>
        </div>
      </main>
      <section id="how-it-works" className="bg-gray-100 h-screen pt-32">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold text-primary">Como Funciona</h2>
          <div className="pt-32 grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold text-primary">Para psicólogos</h2>
              <div className="mt-4 grid grid-cols-1 gap-4">
                <div className="bg-white p-4 rounded shadow-lg">
                  <h3 className="text-xl font-semibold text-primary">Passo 1: Pesquise Psicólogos</h3>
                  <p className="mt-2 text-muted-foreground">Utilize nossos filtros para encontrar o profissional que melhor atenda suas necessidades.</p>
                </div>
                <div className="bg-white p-4 rounded shadow-lg">
                  <h3 className="text-xl font-semibold text-primary">Passo 2: Agende uma Sessão</h3>
                  <p className="mt-2 text-muted-foreground">Entre em contato com o psicólogo escolhido e agende uma sessão no melhor horário para você.</p>
                </div>
              </div>
            </div>
            <div >
              <h2 className="text-2xl font-semibold text-primary">Para clientes</h2>
              <div className="mt-4 grid grid-cols-1 gap-4">
                <div className="bg-white p-4 rounded shadow-lg">
                  <h3 className="text-xl font-semibold text-primary">Passo 1: Pesquise Psicólogos</h3>
                  <p className="mt-2 text-muted-foreground">Utilize nossos filtros para encontrar o profissional que melhor atenda suas necessidades.</p>
                </div>
                <div className="bg-white p-4 rounded shadow-lg">
                  <h3 className="text-xl font-semibold text-primary">Passo 2: Agende uma Sessão</h3>
                  <p className="mt-2 text-muted-foreground">Entre em contato com o psicólogo escolhido e agende uma sessão no melhor horário para você.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
