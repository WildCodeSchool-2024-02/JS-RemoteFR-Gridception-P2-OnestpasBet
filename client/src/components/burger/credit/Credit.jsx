import "./creditStyle.css";
import Burger from "../Burger";

function Credit() {
  return (
    <>
      <Burger />
      <div className="credit">
        <h1>L'EQUIPE OnestpasBET</h1>
      </div>
      <img src="./src/assets/images/Nicolas.png" alt="photohamilton" />
      <h3>Nicolas</h3>
      <img src="./src/assets/images/Quentin.png" alt="photoleclerc" />
      <h3>Quentin</h3>
      <img src="./src/assets/images/Angelina.png" alt="photoleclerc" />
      <h3>Angélina</h3>
      <img src="./src/assets/images/Hamid.png" alt="photoleclerc" />
      <h3>Hamid</h3>
    </>
  );
}

export default Credit;
