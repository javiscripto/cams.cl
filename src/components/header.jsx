import { NavBar } from "./NavBar";

export const Header = () => {
  const titulo = [
    "C",
    "a",
    "m",
    "i",
    "l",
    "a",
    " ",
    "M",
    "e",
    "d",
    "i",
    "n",
    "a",
  ];

  return (
    <header className="App-header">
      <video
        className="video"
        src={"/convertedLente.mp4"}
        autoPlay
        loop
        muted
      />
      <div className="headerContainer">
        <h1>
          {titulo.map((letra, index) => (
            <span clasName="letraTitulo" key={index}>
              {letra}
            </span>
          ))}
        </h1>
        <img className="logo" src="/fav.png" alt="logo" />
        <h2>fotografía</h2>
      </div>
    </header>
  );
};
