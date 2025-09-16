import { useEffect, useState } from "react";
import Plato from "../Components/Plato";

const logo = "/img/logo-kakarama.png"; // imagen por defecto 

function Carta() {
  const [platos, setPlatos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/carta/vercarta")
      .then((res) => {
        if (!res.ok) throw new Error("Error al obtener la carta");
        return res.json();
      })
      .then((data) => setPlatos(data))
      .catch((err) => {
        console.error(err);
        setPlatos([]); 
      });
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "40px" }}>Nuestra Carta</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {platos.length > 0 ? (
          platos.map((plato) => (
            <Plato
              key={plato.id}
              nombre={plato.plato}
              descripcion={plato.descripcion || "Sin descripción"}
              imagen={"/img/" + plato.categoria + ".png" || logo} 
            />
          ))
        ) : (
          <p>No hay platos disponibles en este momento.</p>
        )}
      </div>
    </div>
  );
}

export default Carta;
