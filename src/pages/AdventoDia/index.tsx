import { useParams } from "react-router";
import { adventos } from "../../data/adventos";
import { AdventoConteudo } from "../../components/AdventoConteudo";
import { Container } from "../../components/Container";

export default function AdventoDia() {
  const { id } = useParams();

  const advento = adventos.find((item) => item.id === Number(id));

  if (!advento) {
    return (
      <Container>
        <h1 className="my-8 text-center">Advento não encontrado.</h1>
      </Container>
    );
  }

  return <AdventoConteudo advento={advento} />;
}
