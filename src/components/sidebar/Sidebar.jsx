import "./sidebar.css";
import {
  LineStyle,
  PermIdentity,
  ClassOutlined,
  SpaOutlined,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Panel</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <LineStyle className="sidebarIcon" />
                Inicio
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Menú Rápido</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Usuarios
              </li>
            </Link>
            <li className="sidebarListItem">
              <ClassOutlined className="sidebarIcon" />
              Clasificaciones
            </li>
            <Link to="/plantas" className="link">
              <li className="sidebarListItem">
                <SpaOutlined className="sidebarIcon" />
                Plantas
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
