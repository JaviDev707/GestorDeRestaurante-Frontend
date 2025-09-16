import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Carta from "./Pages/Carta";
import Login from "./Pages/Login";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes >
        {/* Pagina principal */}
        <Route path="/" element={
          <div className="div-pricipal" style={{ textAlign: "center"}}>
            <img src='/img/logo-kakarama.png' alt='KakaramaLogo' />
          </div>
        } />
        {/* Pagina de carta */}
        <Route path="/carta" element={<Carta />} />
        {/* Pagina del Login */}
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
