import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/home";
import { NavBar } from "./components/NavBar";
import { Fotos } from "./pages/fotos";
import { Categoria } from "./pages/categoria";
import { SobreMi } from "./pages/sobreMi";
import { Contacto } from "./pages/contacto";
import { Galeria } from "./pages/galeria";
import { Footer } from "./components/footer";

function App() {
  return (
    <div className="body">
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fotos" element={<Fotos />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/galeria/:categoria" element={<Categoria />} />
          <Route path="/about" element={<SobreMi />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
