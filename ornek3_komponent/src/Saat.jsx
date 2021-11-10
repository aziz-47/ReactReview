import React from "react";

function Saat() {
  const tarih = new Date().toLocaleDateString();
  const saat = new Date().toLocaleTimeString();
  return (
    <div>
      <h1> TARIH:{tarih}</h1>
      <h1>SAAT: {saat}</h1>
    </div>
  );
}

export default Saat;
