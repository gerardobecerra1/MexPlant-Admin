import React, { useContext } from "react";
import "./topbar.css";
import {
  NotificationsNone,
  Settings,
  ExitToAppOutlined,
  Person,
} from "@material-ui/icons";
import { AuthContext } from "../../context/authContext/AuthContext";
import { logout } from "../../context/authContext/apiCalls";

export default function Topbar({ user }) {
  const { dispatch } = useContext(AuthContext);
  const handleLogout = () => {
    logout(dispatch);
    window.location.replace("https://mexplant-api.herokuapp.com/login");
  };

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <img
            className="logo"
            src="https://res.cloudinary.com/becerra-media/image/upload/v1653433646/images/MexPlant-Admin-Logo_b4zfhx.png"
            alt="MexPlantLogo"
          />
          {/* <span className="logo">MexPlant Admin</span> */}
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="profile">
            <img
              src={user.image}
              alt="Imagen del Usuario"
              className="topAvatar"
            />
            <div className="options">
              <span>
                <Person className="icons" /> Perfil
              </span>
              <span>
                <Settings className="icons" /> Configuraciones
              </span>
              <span onClick={() => handleLogout()}>
                <ExitToAppOutlined className="icons" />
                Logout
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
