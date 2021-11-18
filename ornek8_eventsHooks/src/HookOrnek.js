import React, { useState } from "react";

function HookOrnek() {
  const [isim, setIsim] = useState("Can");
  const [meslek, setMeslek] = useState("Developer");
  const [yas, setYas] = useState("23");
  // const degistir = function () {
  //   setIsim("Ahmet");
  //   setMeslek("Grafiker");
  //   setYas(44);
  // };
  const [kisi, setKisi] = useState({
    isim: "Canan",
    meslek: "Tester",
    yas: 30,
  });

  const degistir = () => {
    setKisi({ isim: "Mehmet", meslek: "Devops", yas: 30 });
  };

  return (
    <div className="container text-center">
      {/* <h1>{isim}</h1>
      <h1>{meslek}</h1>
      <h1>{yas}</h1> */}
      <h1>{kisi.isim}</h1>
      <h1>{kisi.meslek}</h1>
      <h1>{kisi.yas}</h1>

      <button className="btn btn-outline-info" onClick={degistir}>
        DEGISTIR
      </button>
    </div>
  );
}

export default HookOrnek;
