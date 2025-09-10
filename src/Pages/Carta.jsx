import Plato from "../Components/Plato";

const logo = "/logo-kakarama.png";

function Carta() {
  // Lista de platos (luego se reemplazará por datos del backend)
  const platos = [
    {
      id: 1,
      nombre: "Hamburguesa Kakarama",
      descripcion: "Doble carne de ternera, queso cheddar, bacon crujiente y salsa secreta.",
      imagen: logo 
    },
    {
      id: 2,
      nombre: "Patatas Bravas",
      descripcion: "Patatas fritas caseras con nuestra salsa picante especial.",
      imagen: logo
    },
    {
      id: 3,
      nombre: "Batido Neon",
      descripcion: "Batido de vainilla con topping de neón brillante.",
      imagen: logo
    },
    {
      id: 4,
      nombre: "Hamburguesa Kakarama",
      descripcion: "Doble carne de ternera, queso cheddar, bacon crujiente y salsa secreta.",
      imagen: logo 
    },
    {
      id: 5,
      nombre: "Patatas Bravas",
      descripcion: "Patatas fritas caseras con nuestra salsa picante especial.",
      imagen: logo
    },
    {
      id: 6,
      nombre: "Batido Neon",
      descripcion: "Batido de vainilla con topping de neón brillante.",
      imagen: logo
    }
  ];

  return (
    <div style={{backgroundColor:"gray", padding:"40px"}}>
      <h2 style={{ textAlign: "center", marginBottom: "40px"}}>Nuestra Carta</h2>
      <div style={{ 
        display: "flex", 
        justifyContent: "center", 
        gap: "20px", 
        flexWrap: "wrap"
      }}>
        {platos.map(plato => (
          <Plato 
            key={plato.id} 
            nombre={plato.nombre} 
            descripcion={plato.descripcion} 
            imagen={plato.imagen} 
          />
        ))}
      </div>
    </div>
  );
}

export default Carta;