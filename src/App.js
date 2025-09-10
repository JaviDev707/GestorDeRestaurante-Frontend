import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Carta from "./Pages/Carta";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes >
        {/* Página principal */}
        <Route path="/" element={
          <div className="div-pricipal" style={{ textAlign: "center", backgroundColor: 'grey' }}>
            <img src='logo-kakarama.png' alt='KakaramaLogo' />
          </div>
        } />
        {/* Página de carta */}
        <Route path="/carta" element={<Carta />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
