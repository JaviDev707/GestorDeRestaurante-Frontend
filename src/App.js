import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Carta from "./Pages/Carta";
import Login from "./Pages/Login";
import Registro from "./Pages/Registro";
import RutaPrivada from "./Components/RutaPrivada";
import Reservas from "./Pages/Reservas";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes >
        {/* Pagina principal */}
        <Route path="/" element={
          <div className="div-pricipal" style={{ textAlign: "center" }}>
            <img src='/img/logo-kakarama.png' alt='KakaramaLogo' />
          </div>
        } />
        {/* Pagina de carta */}
        <Route path="/carta" element={<Carta />} />
        {/* Pagina del Login */}
        <Route path="/login" element={<Login />} />
        {/* Pagina de registro */}
        <Route path="/registro" element={<Registro />} />
        {/* Pagina de reservas */}  
        <Route path="/reservas" element={<Reservas />} />
        {/* Ruta protegida */}
        <Route path="/reservas" element={<RutaPrivada> <Reservas /> </RutaPrivada>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
