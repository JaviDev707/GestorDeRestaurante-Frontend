const numTelefono = "999 - 666 - 999";
const emailLocal = "Kakarama@gmail.com"

function Footer() {

    return (
        <footer className = "footer" style={{backgroundColor: "#A327F5", alignContent: "center", textAlign: "center"}}>
            <h2>📧{emailLocal} <span style={{marginLeft:"40px"}}/> 📞{numTelefono}</h2 >
        </footer>
    )
}

export default Footer;