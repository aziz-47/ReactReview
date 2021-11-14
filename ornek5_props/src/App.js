import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Yorum from "./components/yorum/Yorum";

function App() {
  return (
    <div className="App">
      <Header />
      <Yorum indeks="0" />
      <Yorum indeks="1" />
      <Yorum indeks="2" />
      <Yorum indeks="3" />
      <Footer />
    </div>
  );
}

export default App;
