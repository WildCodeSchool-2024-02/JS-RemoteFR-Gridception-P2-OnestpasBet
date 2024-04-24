import Burger from "../Burger";
import "./accountStyle.css";

function Account() {
  return (
    <div>
      <Burger />
      <div className="logo-account">
        <img src="./src/assets/images/main-logo.png" alt="logo" />
      </div>
      <div className="error">
        <img
          src="./src/assets/images/error404.png"
          alt="error"
          height="500 px"
        />
      </div>
    </div>
  );
}

export default Account;
