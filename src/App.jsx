import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/home";
import { NavBar } from "./components/NavBar";
import { Categoria } from "./pages/categoria";
import { SobreMi } from "./pages/sobreMi";
import { Contacto } from "./pages/contacto";
import { Galeria } from "./pages/galeria";
import { Footer } from "./components/footer";
import { AnimatePresence } from "framer-motion";
import { InnerTransition } from "./components/transition/inner.jsx";

function App() {
  return (
    <div className="body">
      <NavBar />
      <AnimatePresence mode="wait">
        <main>
          <InnerTransition>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/galeria" element={<Galeria />} />
              <Route path="/galeria/:categoria" element={<Categoria />} />
              <Route path="/about" element={<SobreMi />} />
              <Route path="/contacto" element={<Contacto />} />
            </Routes>
          </InnerTransition>
        </main>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
