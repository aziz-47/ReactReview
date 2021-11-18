import React from "react";
import { useState } from "react";

//* =========================== HOOKS =====================================
//! - Hooklar: Class komponentleri yerine fonksiyonel komponentler ile
//!   state'leri kullanmamizi saglayan ozel fonksiyonlardır.
//* - React'a 16.7 versiyonu ile eklenmisitir.
//? - React da useState(), useEffect(), useContext() gibi farklı gorevler icin
//?   yazilmis built-in Hooks'lar vardir.
//* - Ayrica kendi Hook'larimizi yazmamiz da mumkundur.

//* Hook Kullanim Kurallari:
//* 1. Kullanmak icin once import etmek gerekiyor.
//* 2. Hook’lar Sadece En Üst Seviyede Çağrılır. Bir kontrol
//*    deyimi veya for gibi bir dongu icersinde cagiralamazlar.
//* 3. Hook’lar Sadece React Fonksiyonlarından Cagrilir.
//* =========================================================================

function Hooks() {
  const [sayac, setSayac] = useState(0);

  function arttir() {}

  function azalt() {}

  function sifirla() {}
  return (
    <div className="container text-center mt-4">
      {/* <h1>Sayac:{sayac}</h1> */}
      <button className="btn btn-outline-danger" onClick={arttir}>
        Arttir
      </button>
      <button className="btn btn-outline-success" onClick={azalt}>
        Azalt
      </button>
      <button className="btn btn-outline-dark" onClick={sifirla}>
        Sifirla
      </button>
    </div>
  );
}

export default Hooks;
