# 🍔 Aplicación Restaurante (En desarrollo)

Aplicación **fullstack** para la gestión de un restaurante. Consume el backend de https://github.com/JaviDev707/GestorDeRestaurante-Backend.  
Permite a los usuarios **ver la carta**, **registrarse**, **iniciar sesión** y **realizar reservas** protegidas mediante **JWT**.  

---

## 🛠️ Tecnologías utilizadas

### 🔹 Backend (Spring Boot)
- Java 21  
- Spring Boot 3  
- Spring Security + JWT  
- Spring Data JPA  
- MySQL  
- Maven  
- Docker / Docker Compose  

### 🔹 Frontend (React)
- React 18  
- React Router DOM  
- Axios  
- Context API (para autenticación con JWT)  
- TailwindCSS (opcional para estilos)

---

## ⚙️ Funcionalidades principales

| **Autenticación** | Registro e inicio de sesión con JWT |\
| **Carta** | Listado público de platos divididos por categoría que bebe de una BD MySQL |\
| **Reservas** | Creación de reservas protegidas (requiere token) |\
| **Roles** | Usuarios ADMIN y CLIENTE con accesos diferenciados |\
| **Docker** | Backend y BD desplegables con contenedores |

---

## 🧩 Ejemplo de reserva (JSON)

{
  "numComensales": 4,
  "fecha": "2025-10-22",
  "turno": "CENA2"
}

El backend asociará automáticamente el cliente logueado (a través del JWT) y asignará una mesa libre disponible en ese turno si es que la hay.

---

## 🔐 Seguridad

El sistema utiliza Spring Security con JWT para proteger las rutas.
El token se almacena en el LocalStorage del navegador tras el login y se envía automáticamente en los headers de cada petición protegida.

---

## 🧱 Mejoras futuras

- Panel de administración para gestionar reservas y mesas.
- Sistema de notificaciones por correo.
- Validación avanzada de disponibilidad.
- Implementación de roles visuales en el frontend (admin/client).

---

## Desarrollado por JaviDev707
