import { useState } from "react"
const Contador = () => {
    const [valor, setContador] = useState(0);

    const aumentar = () => {
        setContador(valor + 1);
    };
    const diminuir = () => {
        setContador(valor - 1);
    };
    return (
       <div>
            <h2>Valor Atual: {valor}</h2>
            <button onClick={aumentar}>Aumentar</button>
            <button onClick={diminuir}>Diminuir</button>
       </div> 
    );
};
export default Contador;