import { useState, useEffect } from "react";
import "./userCardStyle.css";
import PropTypes from "prop-types";

function UserCard({ coins }) {
  const [user, setUser] = useState("USER");
  const [computerId, setComputerId] = useState(null);

  useEffect(() => {
    const storedComputerId = localStorage.getItem("computerId");
    if (storedComputerId) {
      setUser(`Guest${storedComputerId}`);
      setComputerId(storedComputerId);
    } else {
      const newComputerId = Date.now() % 100;
      localStorage.setItem("computerId", newComputerId);
      setUser(`Guest${newComputerId}`);
      setComputerId(newComputerId);
    }
  }, []);

  return (
    <div className="profilutilisateur">
      <div className="avatar">
        <img
          className="imgavatar"
          src="./src/assets/images/avatar.png"
          alt="Avatar"
        />
        <img
          className="bgavatar"
          src="./src/assets/images/bgavatar.png"
          alt="Background"
        />
      </div>
      <p className="nomuser">{user}</p>
      <p>Computer ID: {computerId}</p>
      <p>Coins: {coins}</p>
    </div>
  );
}

UserCard.propTypes = {
  coins: PropTypes.number.isRequired,
};

export default UserCard;
