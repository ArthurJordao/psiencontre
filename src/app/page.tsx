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

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-gray-100">
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
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-gray-100 p-4 md:gap-8 md:p-10">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-3xl font-semibold text-center text-primary">Encontre seu psicólogo online</h1>
          <p className="mt-4 text-center text-muted-foreground">Psiencontre é uma plataforma onde você pode encontrar um psicólogo que atenda melhor suas necessidades. Temos um catálogo com ótimos psicólogos em uma plataforma 100% gratuita para você e para seu terapeuta.</p>
        </div>

        <section className="mt-10 mx-auto max-w-6xl">
          <h2 className="text-2xl font-semibold text-primary">Sobre Nós</h2>
          <p className="mt-4 text-muted-foreground">Psiencontre foi criado para facilitar a conexão entre pacientes e psicólogos qualificados. Nossa missão é oferecer uma plataforma acessível e eficiente para todos.</p>
        </section>

        <section className="mt-10 mx-auto max-w-6xl">
          <h2 className="text-2xl font-semibold text-primary">Como Funciona</h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded shadow-lg">
              <h3 className="text-xl font-semibold text-primary">Passo 1: Crie uma Conta</h3>
              <p className="mt-2 text-muted-foreground">Crie uma conta gratuita em nossa plataforma para começar a procurar por psicólogos.</p>
            </div>
            <div className="bg-white p-4 rounded shadow-lg">
              <h3 className="text-xl font-semibold text-primary">Passo 2: Pesquise Psicólogos</h3>
              <p className="mt-2 text-muted-foreground">Utilize nossos filtros para encontrar o profissional que melhor atenda suas necessidades.</p>
            </div>
            <div className="bg-white p-4 rounded shadow-lg">
              <h3 className="text-xl font-semibold text-primary">Passo 3: Agende uma Sessão</h3>
              <p className="mt-2 text-muted-foreground">Entre em contato com o psicólogo escolhido e agende uma sessão no melhor horário para você.</p>
            </div>
          </div>
        </section>

        <section className="mt-10 mx-auto max-w-6xl">
          <h2 className="text-2xl font-semibold text-primary">Instruções para Psicólogos</h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded shadow-lg">
              <h3 className="text-xl font-semibold text-primary">Passo 1: Registre-se</h3>
              <p className="mt-2 text-muted-foreground">Crie uma conta em nossa plataforma fornecendo suas informações profissionais e de contato.</p>
            </div>
            <div className="bg-white p-4 rounded shadow-lg">
              <h3 className="text-xl font-semibold text-primary">Passo 2: Complete Seu Perfil</h3>
              <p className="mt-2 text-muted-foreground">Preencha todos os detalhes do seu perfil, incluindo sua especialização, experiência e disponibilidade.</p>
            </div>
            <div className="bg-white p-4 rounded shadow-lg">
              <h3 className="text-xl font-semibold text-primary">Passo 3: Conecte-se com Pacientes</h3>
              <p className="mt-2 text-muted-foreground">Responda às solicitações dos pacientes e agende sessões de acordo com sua disponibilidade.</p>
            </div>
          </div>
          <div className="mt-6 bg-white p-4 rounded shadow-lg">
            <h3 className="text-xl font-semibold text-primary">Dicas para um Perfil de Sucesso</h3>
            <ul className="mt-2 list-disc pl-5 text-muted-foreground">
              <li>Mantenha seu perfil atualizado.</li>
              <li>Adicione uma foto profissional.</li>
              <li>Escreva uma biografia detalhada e amigável.</li>
              <li>Seja claro sobre suas especializações e abordagem terapêutica.</li>
              <li>Responda prontamente às mensagens dos pacientes.</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  )
}
