import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./userCardStyle.css";

// import { sha256 } from "js-sha256";

function UserCard({ coinBalance }) {
  const [user, setUser] = useState("USER");
  const [computerId, setComputerId] = useState(null);

  useEffect(() => {
    const storedComputerId = localStorage.getItem("computerId");
    if (storedComputerId) {
      setUser(`Guest${storedComputerId}`);
      setComputerId(storedComputerId);
    } else {
      const newComputerId = Date.now() % 100;
      const hashedComputerId = newComputerId.toString();
      localStorage.setItem("computerId", hashedComputerId);
      setUser(`Guest${newComputerId}`);
      setComputerId(hashedComputerId);
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
      <div className="usercard-details">
        <p className="nomuser">{user}</p>
        <p>Computer ID: {computerId}</p>
      </div>
      <p>Coins: {coinBalance}</p>
    </div>
  );
}

UserCard.propTypes = {
  coinBalance: PropTypes.number.isRequired,
};

export default UserCard;
