import PropTypes from "prop-types";
import Counter from "./Counter";
import "./button-betStyle.css";

function Pilot({ name, odds, amount, onBetChange }) {
  return (
    <div className="pilot-card">
      <div className="name">{name}</div>
      <div className="odds">Côte : {odds}</div>
      <Counter amount={amount} onChange={onBetChange} />
    </div>
  );
}

Pilot.propTypes = {
  name: PropTypes.string.isRequired,
  odds: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired,
  onBetChange: PropTypes.func.isRequired,
};

export default Pilot;
