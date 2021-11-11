//! props: Parent moudlden child module veri aktarimini saglayan ozeliktir.
//! veri akisi tek yonludur. Parnetenan childa dogru bir akis vardir.
import Mesaj from "./Mesaj";
import Kisi from "./Kisi";

function App() {
  return (
    <div className="App">
      {/* <Mesaj ad="Ahmet" />
      <Mesaj ad="Mehmet" />
      <Mesaj ad="Canan" /> */}
      <Kisi
        ad="Canan Dikbayir"
        resim="https://images.unsplash.com/photo-1598555957831-c7bd02118bbc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80"
        tel="5555566"
      />
      <Kisi
        ad="Adem Kabakci"
        resim="https://images.unsplash.com/photo-1527082395-e939b847da0d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=600"
        tel="90444 4444677"
      />

      <Kisi
        ad="Deniz kabaci"
        resim="https://thispersondoesnotexist.com/image"
        tel="90444 4444677"
      />
    </div>
  );
}

export default App;
