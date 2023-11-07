import "./Header.css";

// React

import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Material

import { SvgIcon } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";

// Components

import { UserNav } from "../UserNav/UserNav";

export const Header = () => {
  const navigate = useNavigate();
  const handleClickHome = () => {
    navigate("/");
  };

  const [showUserNav, setShowUserNav] = useState(false);
  const handleClickUser = () => {
    setShowUserNav(!showUserNav);
  };

  return (
    <header>
      <section className="icons">
        <button className="icon-button" onClick={handleClickUser}>
          <SvgIcon className="icon" component={PersonIcon} inheritViewBox />
          <UserNav showUserNav={showUserNav} setShowUserNav={setShowUserNav} />
        </button>

        <SvgIcon
          className="icon"
          component={HomeIcon}
          inheritViewBox
          onClick={handleClickHome}
        />
      </section>

      <h1 className="app-title">Calculator</h1>
    </header>
  );
};
