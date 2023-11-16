import React, { useState, useEffect } from 'react';
import './TodoList.css';
import Iconelista from './assets/list_icon.svg';

function TodoList() {

const listaStorage = localStorage.getItem('Lista');

const [lista, setLista] = useState(listaStorage ? JSON.parse(listaStorage) : []);
const [novoItem, setNovoItem] = useState("");

useEffect(() => {
    localStorage.setItem('Lista', JSON.stringify(lista));
},[lista])

function adicionaitem(form){
    form.preventDefault();
    if(!novoItem){
        return;
    }
        setLista([...lista, {text: novoItem, isCompleted: false}]);
        setNovoItem("");
        document.getElementById('input-novo-item').focus;
    }

    function clicou(index){
        const listAux = [...lista];
        listAux[index].isCompleted = !listAux[index].isCompleted;
        setLista(listAux);
    }

    function delitem(index){
        const listAux = [...lista];
        listAux.splice(index, 1);
        setLista(listAux);
    }

    function delall(){
        setLista([]);
    }

    return(
        <div>
            <section>
                <h1>Lista de tarefas</h1>            
                <form onSubmit={adicionaitem}>
                    <input 
                        type="text" 
                        placeholder="Adicione uma tarefa"
                        id="input-novo-item" 
                        value={novoItem}
                        onChange={(e) => { setNovoItem(e.target.value)}}
                    />
                    <button className="addtarefa" type="submit">Adicionar</button>
                </form>
            </section>
            <main className="listatarefas">
                {
                    lista.length < 1 
                    ? <img src={Iconelista} alt="Ilustração de uma lista de tarefas" /> 
                    : 
                    lista.map((item, index) => (
                        
                        <div 
                        key={index} 
                        className={item.isCompleted ? "item feito" : "item"}
                        >
                                <span onClick={() => {clicou(index)}}>{item.text}</span>
                                <button onClick={() => {delitem(index)}}>Deletar</button>                            
                        </div>                    
                    ))

                    
                }
                {
                    lista.length > 1 && 
                        <button className="deleteall" onClick={delall}>Deletar todas as tarefas</button>
                }
            </main>
            
        </div>
    )

}

export default TodoList