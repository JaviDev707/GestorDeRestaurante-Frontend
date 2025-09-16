import { Link } from "react-router-dom";

//const nombreLocal = "Kakarama"

function Navbar() {

    return (
        <header className="navbar" style={{ backgroundColor: "#bb00ff", alignContent: "center", textAlign: "center", height: "80px" }}>
            <h2>
                <Link to= "/">Kakarama</Link><span style={{marginLeft:"50px"}}/>
                <Link to="https://unicode.org/emoji/charts/full-emoji-list.html">Reserva</Link><span style={{marginLeft:"50px"}}/>
                <Link to="/carta">Carta</Link><span style={{marginLeft:"50px"}}/>
                <Link to="/login">Login</Link><span style={{marginLeft:"50px"}}/>
            </h2>
        </header>
    )
}

export default Navbar;