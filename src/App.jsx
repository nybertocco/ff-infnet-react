import "./app.css";

import { Card } from "./Components/Card.jsx"
import { Header } from "./Components/Header.jsx";
import { Footer } from "./Components/Footer.jsx"

import img1 from "./imgs/img1.png";
import img2 from "./imgs/img2.png";
import img3 from "./imgs/img3.png";

export function App() {
  return (
    <div>
      <Header />
    
      <h2 className="subtitle">Fast-Food Infnet</h2>

      <div className="container_cards">
      <Card
        titulo="Feijoada"
        descricao="Prato tradicional"
        img={img1}
      />

      <Card 
        titulo="Camarão"
        descricao="Frutos do mar"
        img={img2}
      />

      <Card 
        titulo="Coxinha"
        descricao="Salgado"
        img={img3}
      />

      <Card />

      </div>

      <Footer />
    </div>
  );
}