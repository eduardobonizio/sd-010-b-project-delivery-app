import React, { useState } from "react";
import PropTypes from "prop-types";
import Context from "./Context";

export default function Provider({ children }) {
  // Crie novos estados aqui
  const [User, setUser] = useState({});

  const [allProducts, setAllProducts] = useState([]);

  // Exporta para os outros aquivos
  const context = { User, setUser, allProducts, setAllProducts };

  return <Context.Provider value={context}>{children}</Context.Provider>;
}

// Validação de props
Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
