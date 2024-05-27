import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./userCardStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencilAlt,
  faArrowAltCircleDown,
} from "@fortawesome/free-solid-svg-icons";

import avatar from "../../assets/images/avatar.png";
import bgavatar from "../../assets/images/bgavatar.png";
import coin from "../../assets/images/coins.png";

function UserCard({ coinBalance }) {
  const [user, setUser] = useState("USER");
  const [computerId, setComputerId] = useState(null);
  const [editing, setEditing] = useState(false);
  const [newUsername, setNewUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [isReduced, setIsReduced] = useState(false);

  useEffect(() => {
    const storedComputerId = localStorage.getItem("computerId");
    if (storedComputerId) {
      const storedUsername = localStorage.getItem(
        `username_${storedComputerId}`
      );
      setUser(storedUsername || `Guest${storedComputerId}`);
      setComputerId(storedComputerId);
    } else {
      const newComputerId = Date.now() % 100;
      localStorage.setItem("computerId", newComputerId);
      setUser(`Guest${newComputerId}`);
      setComputerId(newComputerId);
    }
  }, []);

  const handleEditClick = () => {
    setEditing(true);
    setNewUsername(user);
    setUsernameError("");
  };

  const handleSaveClick = () => {
    if (newUsername.length < 2) {
      setUsernameError("Le pseudo doit comporter au moins 2 caractères.");
    } else if (newUsername.length > 12) {
      setUsernameError("Le pseudo ne doit pas dépasser 12 caractères.");
    } else {
      localStorage.setItem(`username_${computerId}`, newUsername);
      setUser(newUsername);
      setEditing(false);
      setUsernameError("");
    }
  };

  const handleCancelClick = () => {
    setEditing(false);
    setUsernameError("");
  };

  const handleToggleReduce = () => {
    setIsReduced((prev) => !prev);
  };

  return (
    <div className={`profilutilisateur ${isReduced ? "reduced" : ""}`}>
      <button
        type="button"
        className="toggle-button"
        onClick={handleToggleReduce}
      >
        {isReduced ? "Afficher" : "Réduire"}
        <FontAwesomeIcon icon={faArrowAltCircleDown} className="arrow-icon" />
      </button>

      <div className="avatar">
        <img className="imgavatar" src={avatar} alt="Avatar" />
        <img className="bgavatar" src={bgavatar} alt="Background" />
      </div>
      <div className="usercard-details">
        <div className="username-container">
          {editing ? (
            <>
              <input
                type="text"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
              />
              <div className="button-container">
                <button
                  type="button"
                  onClick={handleSaveClick}
                  className="save"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={handleCancelClick}
                  className="cancel"
                >
                  Cancel
                </button>
              </div>
              {usernameError && (
                <p className="error-message">{usernameError}</p>
              )}
            </>
          ) : (
            <>
              <span className="nomuser">{user}</span>
              <FontAwesomeIcon
                icon={faPencilAlt}
                className="edit-icon"
                onClick={handleEditClick}
              />
            </>
          )}
        </div>
        <hr className="userhr" />
        <p className="computerid">Computer ID: {computerId}</p>
      </div>
      <hr className="userhr2" />
      <p className="affichecoin">
        <img src={coin} alt="coins" className="coinpng" /> {coinBalance}
      </p>
    </div>
  );
}

UserCard.propTypes = {
  coinBalance: PropTypes.number.isRequired,
};

export default UserCard;
