import "./UserNav.css";

// Material

import { SvgIcon } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

// Hook

import { useToggleShow } from "../../hooks/useToggleShow";

export const UserNav = ({ showUserNav, setShowUserNav }) => {
  useToggleShow({ setShow: setShowUserNav });

  const handleClickNav = (e) => {
    e.stopPropagation();
  };

  const handleClickExitNav = () => {
    setShowUserNav(false);
  };

  return (
    showUserNav && (
      <section className="modal-back" onClick={handleClickExitNav}>
        <nav className="user-nav" onClick={handleClickNav}>
          <li>
            <SvgIcon
              className="nav-icon"
              component={PersonIcon}
              inheritViewBox
              onClick={handleClickExitNav}
            />
          </li>
          <li className="link">Mi perfil</li>
          <li className="link">Cerrar Sesión</li>
        </nav>
      </section>
    )
  );
};
