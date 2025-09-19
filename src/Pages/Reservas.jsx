import { useEffect, useState } from "react";
import axios from "axios";

function Reservas() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:8080/api/reservas/pruebita", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then(res => setData(res.data))
            .catch(err => setError(err.response?.status || "Error"));
    }, []);

    if (error) {
        return <h1 style={{ textAlign: "center", padding: "400px" }}>
            Acceso denegado ❌ (Requiere inciar sesión y obtener un JWT)
        </h1>;
    }

    return (
        <h1 style={{ textAlign: "center", padding: "400px" }}>
            Ha accedido a una ruta protegida con un JWT ✅
        </h1>
    );
}

export default Reservas;