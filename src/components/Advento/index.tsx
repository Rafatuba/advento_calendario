import { Container } from "../Container";
import imgexemplo from "../../assets/natividade.webp";
import { Separator } from "@heroui/react";

export default function Advento() {
  return (
    <main>
      <img
        src={imgexemplo}
        alt="Imagem de exemplo"
        className="w-full h-auto
    object-cover
    mask-[linear-gradient(to_bottom,black_60%,transparent_100%)]"
      />
      <h1 className="text-end mr-8 -mt-16 text-5xl text-secondary">
        1 <br /> DEZ
      </h1>
      <Container>
        <div className="flex flex-col gap-4 my-8">
          <h1 className="uppercase">Uma promessa de esperança</h1>
          <div className="flex flex-col">
            <p>
              “Porque um menino nos nasceu, um filho se nos deu; o governo está
              sobre os seus ombros.”
            </p>
            <p className="text-end">Isaías 9:6</p>
          </div>
          <Separator className="my-4 bg-secondary" />
          <p>
            Deus prometeu enviar alguém que traria luz e esperança ao mundo. Ao
            começarmos esta caminhada até o Natal, lembremos que Jesus é o maior
            presente que poderíamos receber.
          </p>
          <Separator className="my-4 bg-secondary" />
          <p>
            <span className="font-bold text-neutral">Vivam juntos:</span> Cada
            pessoa da família diga algo pelo qual está esperançosa neste Natal.
            Depois, façam uma oração, entregando esses desejos a Deus.
          </p>
        </div>
      </Container>
    </main>
  );
}
