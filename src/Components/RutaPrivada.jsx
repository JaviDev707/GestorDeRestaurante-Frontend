import { Navigate } from "react-router-dom";

function RutaPrivada({ ruta }) {

  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return ruta;
}

export default RutaPrivada;