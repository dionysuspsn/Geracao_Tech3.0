import FormaDeBolo from "./components/FormaDeBolo";
import Contador from "./components/Contador";
import Card from "./components/Card";
import CardDinamico from "./components/CardDinamico";
const App = () => (
  <div>
    {/* <Contador/>
    <FormaDeBolo sabor= "Chocolate" cobertura="Brigadeiro"/> */}
    <Card 
    titulo={"Notícia 1"} 
    categoria={"Esportes"} 
    paragrafo={"AAAAAAA"}
    tipo={"A"}
    />
    <Card
    titulo={"Notícia 1"} 
    categoria={"Esportes"} 
    paragrafo={"AAAAAAA"}
    />
    <CardDinamico>
      
    </CardDinamico>
  </div>
);
export default App;