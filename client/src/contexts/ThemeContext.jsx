import { createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("driverC");

  const contextValue = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

ThemeProvider.defaultProps = {
  children: null,
};

ThemeProvider.propTypes = {
  children: PropTypes.node,
};
