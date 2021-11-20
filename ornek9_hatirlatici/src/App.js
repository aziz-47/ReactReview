import React, { useState } from "react";
import data from "./data";
import Liste from "./Liste";

function App() {
  const [kisiler, SetKisiler] = useState(data);
  function temizle() {
    SetKisiler([]);
  }

  return (
    <main>
      <section className="container"></section>
      <h2>Bugun {kisiler.length} dogum gunu bulunmaktadir.</h2>
      <Liste kisiler={kisiler} />
      <button onClick={temizle}>TEMIZLE</button>
    </main>
  );
}

export default App;
