import { useContext, useState } from "react";
import { login } from "../../context/authContext/apiCalls";
import { AuthContext } from "../../context/authContext/AuthContext";
import "./login.css";

export default function Login() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    login({ mail, password }, dispatch);
  };
  return (
    <div className="login">
       <img
            className="logo"
            src="https://res.cloudinary.com/becerra-media/image/upload/v1653433646/images/MexPlant-Admin-Logo_b4zfhx.png"
            alt="MexPlantLogo"
          />
      <form className="loginForm">
        <input
          type="text"
          placeholder="Correo"
          className="loginInput"
          onChange={(e) => setMail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contrseña"
          className="loginInput"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="loginButton"
          onClick={handleLogin}
          disabled={isFetching}
        >
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
}
