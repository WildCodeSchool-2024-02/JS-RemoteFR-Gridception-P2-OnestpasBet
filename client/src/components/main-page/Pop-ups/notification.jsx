import PropTypes from "prop-types";
import "./notification.css";

function Notification({ type, message }) {
  return (
    <div className={`notification ${type}`}>
      <p>{message}</p>
    </div>
  );
}

Notification.propTypes = {
  type: PropTypes.oneOf(["success", "error"]).isRequired,
  message: PropTypes.string.isRequired,
};

export default Notification;
