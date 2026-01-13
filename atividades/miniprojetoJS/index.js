let tarefas = [];

function abrirModal(){
    overlay.classList.add("active");
    criarTarefa.classList.add("active");
}
function fecharModal(){
    overlay.classList.remove("active");
    criarTarefa.classList.remove("active");
}
function buscarTarefas(){
    fetch("http://localhost:3000/tarefas")
    .then(res => res.json())
    .then(res => {
            tarefas = res
            inserirTarefas(res);
    })
} buscarTarefas();
function inserirTarefas(listaDeTarefas){
    lista.innerHTML = "";
    if (listaDeTarefas.length > 0){
        listaDeTarefas.map(tarefa => {
            lista.innerHTML += `
                <li>
                    <h5>${tarefa.titulo}</h5>
                    <p>${tarefa.descricao}</p>
                    <div class="actions">
                        <box-icon name='trash-alt' size="sm" onclick="deletarTarefa(${tarefa.id})"></box-icon> 
                    </div>
                </li>
            `;
        })
    } else{
        lista.innerHTML = ("<h5>Nenhuma tarefa registrada</h5>")
    }
}
function novaTarefa(){
    event.preventDefault();
    let tarefa = {
        titulo: titulo.value,
        descricao: descricao.value
    }
    fetch("http://localhost:3000/tarefas",{
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(tarefa)
    })
    .then(res => res.json())
    .then(res => {
        fecharModal();
        buscarTarefas();
    })
}
function deletarTarefa(id){
    fetch(`http://localhost:3000/tarefas/${id}`,{
        method: "DELETE",   
    })
    .then(res => res.json())
    .then(res => {
        alert("Tarefa deletada.");
        buscarTarefas();
    })
}
function pesquisarTarefa(){
    console.log(busca.value)
    let resultado = tarefas.filter(tarefa => tarefa.titulo.toLowerCase().includes(busca.value.toLowerCase()));
    if (busca.value.length > 0){
        inserirTarefas(resultado)
    } else{
        inserirTarefas(tarefas)
    }
}