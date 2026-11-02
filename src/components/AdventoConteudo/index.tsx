import { Container } from "../Container";
import { Separator } from "@heroui/react";
import imgexemplo from "../../assets/natividade.webp";
import type { Advento as AdventoType } from "../../types/advento";
import { DropdownMenu } from "../Dropdown";

interface AdventoConteudoProps {
  advento: AdventoType;
}

export function AdventoConteudo({ advento }: AdventoConteudoProps) {
  return (
    <main>
      <DropdownMenu />
      <img
        src={imgexemplo}
        alt="Imagem de Natal"
        className="w-full h-auto object-cover mask-[linear-gradient(to_bottom,black_60%,transparent_100%)]"
      />

      <h1 className="text-end mr-8 -mt-16 text-5xl text-secondary">
        {advento.id}
        <br />
        DEZ
      </h1>

      <Container>
        <div className="flex flex-col gap-4 my-8">
          <h1 className="uppercase">{advento.titulo}</h1>

          <div className="flex flex-col">
            <p>“{advento.versiculo}”</p>
            <p className="text-end">{advento.referencia}</p>
          </div>

          <Separator className="my-4 bg-secondary" />

          <p>{advento.texto}</p>

          <Separator className="my-4 bg-secondary" />

          <p className="whitespace-pre-line">
            <span className="font-bold text-neutral">Vivam juntos:</span>{" "}
            {advento.desafio}
          </p>
        </div>
      </Container>
    </main>
  );
}
