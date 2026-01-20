import { useRef } from "react";
import { useState } from "react";

const Input = () => {
    const nome = useRef("")

    return (
        <>
            <input 
                type="text"  
                placeholder="Digite seu nome:"
                onChange={(e) => nome.current = e.target.value}
            />
            <button onClick={() => console.log(nome.current)}>Mostrar</button>
            <h1>{nome.current}</h1>
        </>
    );
}
export default Input;