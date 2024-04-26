import { useState } from "react";
import PropTypes from "prop-types";
import "./button-betStyle.css";

function Counter({ amount, onChange }) {
  const [inputValue, setInputValue] = useState("");

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const numericValue = parseFloat(inputValue);
    if (!Number.isNaN(numericValue)) {
      onChange(numericValue);
      setInputValue("");
    }
  }

  return (
    <form className="betting" onSubmit={handleSubmit}>
      <div className="choice">
        <input
          type="number"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Entrer le montant..."
        />
        <button type="submit" className="montantbutton">
          VALIDER LA MISE
        </button>
      </div>
      <div className="amount">{amount} 💰</div>
    </form>
  );
}

Counter.propTypes = {
  amount: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Counter;
