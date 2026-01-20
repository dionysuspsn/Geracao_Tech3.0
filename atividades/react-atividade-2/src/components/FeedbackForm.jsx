import React from "react";
import { useState } from "react";
function FeedbackForm() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [comentario, setComentario] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Dados Enviados!
        Nome: ${nome}
        Email: ${email}
        Comentário: ${comentario}
            `)
    }
    return (
        <>
        <h2>
            Formulário de Feedback
        </h2>
        <form onSubmit={handleSubmit}>
        <div>
            <label>
                Nome
            </label>
            <br />
            <input 
            type="text" 
            value={nome} 
            placeholder="Digite seu nome" 
            onChange={(e) => setNome(e.target.value)} required/>
            
        </div>
        <div>
            <label>
                Email
            </label>
            <br />
            <input 
                type="text" 
                value={email} 
                placeholder="Digite seu email" 
                onChange={(e) => setEmail(e.target.value)} required/>
        </div>
        <div>
            <label>
                Comentário
            </label>
            <br />
            <textarea 
            value={comentario} 
            onChange={(e) => setComentario(e.target.value)}
            placeholder="Digite seu comentário aqui." required/>
        </div>
        <br />
        <div>
            <button 
                type="submit"
                >
                Enviar
            </button>
        </div>
        </form>
        </>
    )
    
}

export default FeedbackForm;