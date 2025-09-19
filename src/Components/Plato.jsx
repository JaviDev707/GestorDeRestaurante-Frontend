function Plato({ imagen, nombre, descripcion }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "15px",
        width: "50%",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        display: "flex",      
        alignItems: "center",   
        gap: "25px"               
      }}
    >
      <img
        src={imagen}
        alt={nombre}
        style={{ width: "120px", borderRadius: "10px" , backgroundColor: "#096FC8"}} // tamaño fijo de la img
      />

      <div>
        <h3 style={{ margin: "0 0 50px 0" }}>{nombre}</h3>
        <p style={{ margin: 0 }}>{descripcion}</p>
      </div>
    </div>
  );
}

export default Plato;