import { slide as Menu } from "react-burger-menu";
import "./burgerStyle.css";

function Burger() {
  return (
    <Menu>
      <img
        src="./src/assets/images/main-logo.png"
        alt="logo"
        className="logo-item"
      />
      <a id="home" className="menu-item" href="/">
        Accueil
      </a>
      <a id="account" className="menu-item" href="/account">
        Mon compte
      </a>
      <a id="thème" className="menu-item" href="/theme">
        Thèmes
      </a>
      <a id="credit" className="menu-item" href="/credit">
        Credit
      </a>
    </Menu>
  );
}

export default Burger;
