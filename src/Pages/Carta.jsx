import { useEffect, useState } from "react";
import axios from "axios";
import Plato from "../Components/Plato";

const logo = "/img/logo-kakarama.png"

function Carta() {
  const [platos, setPlatos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/carta/vercarta")
      .then((res) => {
        setPlatos(res.data);
      })
      .catch((err) => {
        console.error("Error cargando la carta:", err);
      });
  }, []);

  const categorias = ["ENTRANTE", "PRINCIPAL", "POSTRE", "BEBIDA"];

  return (
    <div style={{ padding: "40px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
        Nuestra Carta
      </h2>

      {categorias.map((categoria, idx) => {
        const platosCategoria = platos.filter(
          (plato) => plato.categoria === categoria
        );

        if (platosCategoria.length === 0) return null;

        return (
          <div key={categoria} style={{ marginBottom: "50px" }}>
            <h3 style={{ textAlign: "center", marginBottom: "20px" }}>
              {categoria}
            </h3>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "20px",
                flexWrap: "wrap",
              }}
            >
              {platosCategoria.map((plato) => (
                <Plato
                  key={plato.id}
                  nombre={plato.plato}
                  descripcion={plato.descripcion}
                  imagen={"/img/" + plato.categoria + ".png" || logo}
                />
              ))}
            </div>
            {/* Quito el hr en la ultima categoria */}
            {idx < categorias.length - 1 && (
              <hr
                style={{
                  margin: "40px auto",
                  width: "55%",
                  border: "1px solid #888",
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Carta;
