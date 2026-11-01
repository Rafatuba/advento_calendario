import { Button } from "@heroui/react";
import homeImage from "../../assets/home.png";
import { ArrowRightIcon } from "@phosphor-icons/react";
import { useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate();
  return (
    <main
      className="w-full h-screen bg-cover bg-center flex items-end justify-center"
      style={{ backgroundImage: `url(${homeImage})` }}
    >
      <Button
        className="mb-8 w-1/2 md:w-1/4 lg:w-1/6"
        onPress={() => navigate("/advento")}
      >
        Continuar <ArrowRightIcon size={32} />
      </Button>
    </main>
  );
}
