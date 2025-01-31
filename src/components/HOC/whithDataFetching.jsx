//este es un HOC que devolvera la galeria de imagenes segun la categoria seleccionada
import { getImages } from "../../utils/fetchImages.js";

export const withDataFetching = (WrappedComponent) => {
  return (props) => {
    return (
      <WrappedComponent
        images={getImages(props.category)}
        {...props}
      ></WrappedComponent>
    );
  };
};
