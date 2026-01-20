import { Componente1, Componente2, Componente3 } from "./components/VariosComponentes";
import Carro from "./components/Props"
import Card from "./components/Card";
import './App.css';
const App = () => {
  return (
    <div id="main">
    <h1>Exportação de Múltiplos Componentes</h1>
    <Componente1/>
    
    <Componente2/>
    
    <Componente3/>
    <h1>Utilização de Props</h1>
    <Carro cor ="azul" potencia="150"/>
    <h1>Exemplo de Children</h1>
    <Card>
      <h2>Título de Exemplo</h2>
      <h3>Frase de Exemplo</h3>
    </Card>    
    </div>
  )
}
export default App;