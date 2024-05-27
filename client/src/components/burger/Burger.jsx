import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

import logo from "../../assets/images/main-logo.png";
import "./burgerStyle.css";

function Burger() {
  return (
    <Menu>
      <>
        <img src={logo} alt="logo" className="logo-item" />
        <div className="burgercontainer">
          <hr className="hrburger" />

          <Link to="/" className="accueilitem">
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
        </div>
      </>
    </Menu>
  );
}

export default Burger;
