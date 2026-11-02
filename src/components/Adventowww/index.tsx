// import { Container } from "../Container";
// import imgexemplo from "../../assets/natividade.webp";
// import { Separator } from "@heroui/react";
// import { adventos } from "../../data/adventos";
// import { DropdownMenu } from "../Dropdown";

// export default function Advento() {
//   const hoje = new Date();
//   const diaAtual = hoje.getDate();
//   const mesAtual = hoje.getMonth();

//   // Dezembro é representado pelo número 11 no JavaScript.
//   const advento =
//     mesAtual === 10 ? adventos.find((item) => item.id === diaAtual) : undefined;

//   // Fora do período de 1 a 24 de dezembro.
//   if (!advento || diaAtual > 24) {
//     return (
//       <main>
//         <img
//           src={imgexemplo}
//           alt="Imagem de exemplo"
//           className="w-full h-auto
//     object-cover
//     mask-[linear-gradient(to_bottom,black_60%,transparent_100%)]"
//         />
//         <Container>
//           <h1 className="my-8 text-center">
//             Nossa jornada de esperança começa em dezembro!
//           </h1>
//         </Container>
//       </main>
//     );
//   }

//   return (
//     <main>
//       <DropdownMenu
//         onSelectDay={(dayId) => {
//           console.log("Dia selecionado:", dayId);
//         }}
//       />
//       <img
//         src={imgexemplo}
//         alt="Imagem de Natal"
//         className="w-full h-auto object-cover mask-[linear-gradient(to_bottom,black_60%,transparent_100%)]"
//       />

//       <h1 className="text-end mr-8 -mt-16 text-5xl text-secondary">
//         {diaAtual}
//         <br />
//         DEZ
//       </h1>

//       <Container>
//         <div className="flex flex-col gap-4 my-8">
//           <h1 className="uppercase">{advento.titulo}</h1>

//           <div className="flex flex-col">
//             <p>“{advento.versiculo}”</p>
//             <p className="text-end">{advento.referencia}</p>
//           </div>

//           <Separator className="my-4 bg-secondary" />

//           <p>{advento.texto}</p>

//           <Separator className="my-4 bg-secondary" />

//           <p>
//             <span className="font-bold text-neutral">Vivam juntos:</span>{" "}
//             {advento.desafio}
//           </p>
//         </div>
//       </Container>
//     </main>
//   );
// }
