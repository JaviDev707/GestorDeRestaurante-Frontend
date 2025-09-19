import { Link } from "react-router-dom";

//const nombreLocal = "Kakarama"

function Navbar() {

    return (
        <header className="navbar" style={{ backgroundColor: "#A327F5", alignContent: "center", textAlign: "center", height: "80px" }}>
            <h2>
                <Link to="/">Kakarama</Link><span style={{marginLeft:"50px"}}/>
                <Link to="/reservas">Reservas</Link><span style={{marginLeft:"50px"}}/>
                <Link to="/carta">Carta</Link><span style={{marginLeft:"50px"}}/>
                <Link to="/login">Login</Link><span style={{marginLeft:"50px"}}/>
            </h2>
        </header>
    )
}

export default Navbar;