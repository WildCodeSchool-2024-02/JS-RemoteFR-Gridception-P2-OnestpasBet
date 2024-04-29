import { Link } from "react-router-dom";
import Burger from "../Burger";

import "./accountStyle.css";

function Account() {
  return (
    <div>
      <Burger />
      <div className="logo-account">
        <Link to="/" className="return">
          <img
            src="./src/assets/images/main-logo.png"
            alt="logo"
            className="logo-item"
          />
        </Link>
      </div>
      <div className="error">
        <img
          src="./src/assets/images/error404.png"
          alt="error"
          height="500 px"
        />
      </div>
      <h1>Désolé cette page est introuvable !</h1>
      <Link to="/" className="return">
        Retour à l'accueil
      </Link>
    </div>
  );
}

export default Account;
