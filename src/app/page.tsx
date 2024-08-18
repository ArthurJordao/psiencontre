import Link from "next/link"
import { Button } from "~/components/ui/button"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select"
import Navbar from "./_components/navbar"

export default async function Home() {
  return (
    <div className="h-screen">
      <Navbar />
      <main className="md:pt-60 md:mx-auto md:max-w-4xl flex flex-col pt-32  px-4">
        <h1 className="text-3xl text-center font-semibold">Encontre seu psicólogo hoje</h1>
        <p className="mt-4 text-muted-foreground text-lg">Psiencontre é uma plataforma onde você pode encontrar um psicólogo que atenda melhor suas necessidades.</p>
        <div className="flex flex-row flex-1 gap-4 items-baseline">
          <Select>
            <SelectTrigger aria-label="Selecione a abordagem desejada">
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
        <Button asChild variant="link" className="mt-16 text-base"><Link href="/psicologos" >Clique aqui se for psicólogo</Link></Button>
      </main>
    </div>
  )
}
