import Link from "next/link"
import { Button } from "~/components/ui/button"
import { getServerAuthSession } from "~/server/auth"
import Navbar from "~/app/_components/navbar";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerAuthSession();
  if (session) {
    redirect("/psicologo/perfil");
  }
  return (
    <div className="h-screen">
      <Navbar />
      <main className="md:pt-60 md:mx-auto md:max-w-4xl flex flex-col pt-32 px-4">
        <h1 className="text-3xl text-center font-semibold">Crie sua conta hoje</h1>
        <p className="mt-4 text-muted-foreground text-lg">
          Psiencontre é uma plataforma que conectar pacientes com psicólogos de forma 100% gratuíta.
          Esqueça taxas para sites que ganham valor por sessão. Tenha autonomia para divulgar seu nome de graça!
        </p>
        <Button variant="default" className="mt-4"><Link href="/api/auth/signin">Cadastre-se</Link></Button>
      </main>
    </div>
  )
}
