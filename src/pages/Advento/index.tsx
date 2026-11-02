import { adventos } from "../../data/adventos";
import { AdventoConteudo } from "../../components/AdventoConteudo";
import { Container } from "../../components/Container";
import imgexemplo from "../../assets/natividade.webp";

export default function Advento() {
  const hoje = new Date();
  const diaAtual = hoje.getDate();
  const mesAtual = hoje.getMonth();

  const advento =
    mesAtual === 10 && diaAtual <= 24
      ? adventos.find((item) => item.id === diaAtual)
      : undefined;

  if (!advento) {
    return (
      <main>
        {" "}
        <img
          src={imgexemplo}
          alt="Imagem de exemplo"
          className="w-full h-auto
    object-cover
    mask-[linear-gradient(to_bottom,black_60%,transparent_100%)]"
        />
        <Container>
          <h1 className="my-8 text-center">
            Nossa jornada de esperança começa dia 1º de dezembro! <br />{" "}
            Aguarde!
          </h1>
        </Container>
      </main>
    );
  }

  return <AdventoConteudo advento={advento} />;
}
