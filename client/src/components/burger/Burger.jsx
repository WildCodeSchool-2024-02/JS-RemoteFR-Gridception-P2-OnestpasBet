import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

import "./burgerStyle.css";

function Burger() {
  return (
    <Menu>
      <>
        <img
          src="./src/assets/images/main-logo.png"
          alt="logo"
          className="logo-item"
        />
        <Link to="/" className="menu-item">
          Accueil
        </Link>
        <Link to="/account" className="menu-item">
          Mon compte
        </Link>
        <Link to="/theme" className="menu-item">
          Thèmes
        </Link>
        <Link to="/credit" className="menu-item">
          Crédit
        </Link>
      </>
    </Menu>
  );
}

export default Burger;
