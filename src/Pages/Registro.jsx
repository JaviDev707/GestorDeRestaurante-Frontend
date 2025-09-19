import axios from "axios";
import { useState } from "react";
import {
  Container, Box, Avatar, Typography,
  TextField, Button, FormControlLabel, Checkbox
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

function Registro() {

  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");

    try {
      const response = await axios.post("http://localhost:8080/api/auth/registro", {
        email,
        password,
      });

      const token = response.data.token;

      // Guardo el token en localStorage 
      localStorage.setItem("token", token);

      console.log("Usuario registrado ✅, token:", token);
      alert("✅ Usuario registrado con éxito");

    } catch (err) {
      if (err.response && err.response.status === 400) {
        alert("⚠️ El usuario ya está registrado");
      } else {
        alert("❌ Error al registrar. Intentalo de nuevo.");
        console.error("Error al registrar:", err);
        setError("No se pudo registrar. Intenta de nuevo.");
      }
    }
  };

  return (
    <Container component="main" maxWidth="xs" style={{ minHeight: "100vh", padding: "40px" }}>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Crear cuenta
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            style={{ backgroundColor: "#bb00ff" }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Registro;
