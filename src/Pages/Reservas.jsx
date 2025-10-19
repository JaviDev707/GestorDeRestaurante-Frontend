import { useState } from "react";
import axios from "axios";
import { Container, TextField, Button, MenuItem, Typography, Box } from "@mui/material";

function Reservas() {
    const [reserva, setReserva] = useState({
        fecha: "",
        numComensales: "",
        turno: "",
    });

    const [mensaje, setMensaje] = useState("");

    const handleChange = (e) => {
        setReserva({ ...reserva, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem("token");
        if (!token) {
            alert("⚠️ Debes iniciar sesión para hacer una reserva.");
            return;
        }

        try {
            const response = await axios.post(
                "http://localhost:8080/api/reservas/nueva",
                reserva,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            setMensaje("✅ Reserva realizada con éxito.");
            console.log(response.data);
        } catch (error) {
            console.error(error);
            setMensaje(
                error.response?.data?.message ||
                "❌ No se pudo realizar la reserva. Verifica los datos."
            );
        }
    };

    return (
        <Container maxWidth="sm" sx={{ mt: 30, mb: 30 }}>
            <Typography variant="h4" align="center" gutterBottom>
                Realiza una Reserva 🍽️
            </Typography>

            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 3,
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    padding: "30px",
                    borderRadius: "10px",
                    boxShadow: "0 0 10px rgba(0,0,0,0.3)",
                }}
            >
                <TextField
                    label="Fecha"
                    type="date"
                    name="fecha"
                    value={reserva.fecha}
                    onChange={handleChange}
                    InputLabelProps={{ shrink: true }}
                    required
                />

                <TextField
                    label="Número de comensales"
                    type="number"
                    name="numComensales"
                    value={reserva.numComensales}
                    onChange={handleChange}
                    required
                />

                <TextField
                    select
                    label="Turno"
                    name="turno"
                    value={reserva.turno}
                    onChange={handleChange}
                    required
                >
                    <MenuItem value="ALMUERZO1">Almuerzo 14:00 - 14:59</MenuItem>
                    <MenuItem value="ALMUERZO2">Almuerzo 15:00 - 15:59</MenuItem>
                    <MenuItem value="CENA1">Cena 21:00 - 21:59</MenuItem>
                    <MenuItem value="CENA2">Cena 22:00 - 22:59</MenuItem>
                    <MenuItem value="CENA3">Cena 23:00 - 23:59</MenuItem>
                </TextField>

                <Button
                    type="submit"
                    variant="contained"
                    sx={{ backgroundColor: "#bb00ff", color: "white" }}
                >
                    Confirmar Reserva
                </Button>

                {mensaje && (
                    <Typography
                        align="center"
                        color={mensaje.includes("✅") ? "black" : "black"}
                    >
                        {mensaje}
                    </Typography>
                )}
            </Box>
        </Container>
    );
}

export default Reservas;


/*
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
   */