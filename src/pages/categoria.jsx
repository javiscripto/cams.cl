//recibe como param el nombre de la categoria
import { useParams } from "react-router-dom";
import { Gallery } from "../components/Gallery";

export const Categoria = () => {
  const { categoria } = useParams();

  return (
    <>
      <h1>{categoria}</h1>
      <Gallery categoria={categoria} />
    </>
  );
};
