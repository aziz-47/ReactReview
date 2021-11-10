//Reactin temel kutuphanleri
import React from "react";
import ReactDOM from "react-dom";

//App modulunun eklenmsie imperot edilmesi
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App /> {/* App modulunun cagrilmasi.*/}
  </React.StrictMode>,
  document.getElementById("root")
);
