import Button from "@/components/Button";
import Container from "@/components/Container";
import Header from "@/components/Header";
import { Input } from "@/components/Input";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header/>
      <div className="mx-auto w-full h-full flex flex-1 items-center justify-center">
        <Container>
          <div className="max-w-[580px] w-full bg-secondary p-4 rounded-lg">
            <div>
              <span>Ingressar</span>
              <span>Nova reunião</span>
            </div>
            <div className="space-y-4">
              <Input placeholder="Seu nome" type="text"/>
              <Input placeholder="ID da reunião" type="text"/>
              <Button title="Entrar" type="button"/>
            </div>
          </div>
        </Container>
      </div>
    </main>
  );
}
