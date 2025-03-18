import React from "react";
import "./App.css"; // Importa el archivo de estilos

const App = () => {
  return (
    <div className="wrapper">
      <div className="column-container">
        {/* Primera columna */}
        <div className="column">
          <div className="box red" />
          <div className="box orange" />
          <div className="box orange" />
          <div className="box red" />
          <div className="box red" />
          <div className="box orange" />
        </div>
      </div>

      <div className="column-container">
        {/* Segunda columna */}
        <div className="column">
          <div className="box orange" />
          <div className="box red" />
          <div className="box red" />
          <div className="box orange" />
          <div className="box orange" />
          <div className="box red" />
        </div>
      </div>
    </div>
  );
};

export default App;
