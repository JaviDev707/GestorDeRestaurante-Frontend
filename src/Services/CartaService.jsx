export async function getCarta() {
  try {
    const response = await fetch("http://localhost:8080/api/carta/vercarta");
    if (!response.ok) {
      throw new Error("Error al obtener la carta");
    }
    return await response.json();
  } catch (error) {
    console.error("Error en getCarta:", error);
    return [];
  }
}