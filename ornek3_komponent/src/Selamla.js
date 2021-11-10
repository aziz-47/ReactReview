import React from "react";
import ReactDOM from "react";

// ? React da JSX olarak adlandirlan bir soz dizimi kullanilir.
// ? Bu soz dizimi JS e benzesede bazi farkliliklari vardir.
// ? Icerisnde dogrudan HTML kodu kullanilabilir.

// ! Komponentler tanimlanirken tek bir element(div, section, artickle, vs) ile  sarmalanarak dondurulebilir.

//Komponant icerisnde inline stillnedirme yapilabilri.Stillendirmede yazim key value seklindedir.
//Ayrica key isimlerinde JS de oldugu gibi camelCase kullanilir.

const pStil = {
  color: "purple",
  marginTop: "40px",
  fontFamily: "Tahoma",
  border: "2px solid blue",
};
function Selamla() {
  return (
    <div>
      <h1 style={{ color: "red", backgroundColor: "grey" }}>
        React dersimize hos geldiniz...
      </h1>
      <p style={pStil}>Bu dersimizde React KOmponentlerini Taniyacagiz</p>
    </div>
  );
}

export default Selamla;
