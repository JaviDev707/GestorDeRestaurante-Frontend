import { Link } from "react-router-dom";
import BtnLogout from "./BtnLogout";

//const nombreLocal = "Kakarama"

function Navbar() {
  const token = localStorage.getItem("token");

  return (
    <nav
      className="navbar"
      style={{
        backgroundColor: "#A327F5",
        alignContent: "center",
        textAlign: "center",
        height: "80px",
      }}
    >
      <h2>
        <span style={{ marginLeft: "50px" }} />
        <Link to="/">Kakarama</Link>
        <span style={{ marginLeft: "50px" }} />
        <Link to="/reservas">Reservas</Link>
        <span style={{ marginLeft: "50px" }} />
        <Link to="/carta">Carta</Link>
        <span style={{ display: "flex", marginRight: "50px", float: "right" }}>
          {token ? <BtnLogout /> : <Link to="/login">Login</Link>}
        </span>
      </h2>
    </nav>
  );
}

export default Navbar;
