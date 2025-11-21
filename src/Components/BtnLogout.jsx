import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";

function BtnLogout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
    alert("Sesión cerrada correctamente.");
    navigate("/");
  };

  return (
    <button
      onClick={handleLogout}
      style={{
        backgroundColor: "transparent",
        border: "none",
      }}
    >
      <LogoutIcon />
    </button>
  );
}

export default BtnLogout;
