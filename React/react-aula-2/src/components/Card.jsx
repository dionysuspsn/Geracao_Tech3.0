const Card = ({titulo, categoria, paragrafo, tipo}) => {
    return (
        <div>
            <h2>{titulo}</h2>
            {
                tipo == "A" && (
                    <>
                        <h6>{categoria}</h6>
                        <p>{paragrafo}</p>        
                    </>
                )
            }
            
        </div>
    );
}

export default Card;