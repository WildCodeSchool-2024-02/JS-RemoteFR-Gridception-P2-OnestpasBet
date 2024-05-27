import { Link } from "react-router-dom";
import Burger from "../Burger";

import error from "../../../assets/images/error404.png";
import logo from "../../../assets/images/main-logo.png";

import "./accountStyle.css";

function Account() {
  return (
    <div>
      <Burger />
      <div className="logo-account">
        <Link to="/" className="return">
          <img src={logo} alt="logo" className="logo-item" />
        </Link>
      </div>
      <div className="error">
        <img src={error} alt="error" height="500 px" />
      </div>
      <h1>Désolé cette page est introuvable !</h1>
      <Link to="/" className="return">
        Retour à l'accueil
      </Link>
    </div>
  );
}

export default Account;
