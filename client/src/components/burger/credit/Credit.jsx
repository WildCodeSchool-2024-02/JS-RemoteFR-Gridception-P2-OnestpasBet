import "./creditStyle.css";
import Burger from "../Burger";

function Credit() {
  return (
    <>
      <Burger />
      <div className="credit">
        <h1>Bienvenue sur la page Crédit ! </h1>
        <h2>VOICI L'EQUIPE ON EST PAS BET</h2>
      </div>
      <img src="./src/assets/images/hamilton.png" alt="photohamilton" />
      <h3>HAMILTON</h3>
      <img src="./src/assets/images/leclerc.png" alt="photoleclerc" />
      <h3>LECLERC</h3>
    </>
  );
}

export default Credit;
