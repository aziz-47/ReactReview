//Reactin temel kutuphanleri
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

//App modulunun eklenmsie imperot edilmesi
import App from "./App";

//Web sayfasina basilacak olan herseyi olsuturna ve gunceleyyen metodttur.
//Render methodu iki parametre alir.
//1. parametre hangi modulu render edecegidir.
//2. parametre nerede render edilecegidir.
ReactDOM.render(
  <div>
    <App /> {/* App modulunun cagrilmasi.*/}
    <App /> {/* App modulunun birkez daha  cagrilmasi.*/}
  </div>,

  document.getElementById("root")
);
