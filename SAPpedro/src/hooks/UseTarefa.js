const url = import.meta.env.VITE_API_URL;

import { useState, useEffect } from 'react';

export function useInserirTarefa(){
    const inserirTarefa = async (data) =>{
     const req = await fetch(`${url}/tarefas`, 
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }
        
    );
        const res = await req.json()
        return res;
    };
        return {inserirTarefa};
}
export function useDeletaTarefa(){
    const deletarTarefa = async (idTarefa)=>{
        const req = await fetch(`${url}/tarefas/${idTarefa}`, 
        {
            method: "DELETE",
        });
        const res = req.json();
        return res;
    };
    return{deletarTarefa}
}
export function useListaTarefas(){
    const [Tarefas, setTarefas]= useState([])
 useEffect(()=>{
        async function fetchData(){
            try{
                const req = await fetch(`${url}/tarefas`);
                const res= await req.json();
                setTarefas(res); 
            }catch(erro){
                console.log(erro)
            }
        }
        fetchData()
 },[])
 return Tarefas
}

export function useBuscarTarefaPorId(){
        const buscarTarefa = async (idTarefa)=>{
            const req = await fetch(`${url}/tarefas/${idTarefa}`);
            const res = await req.json()
            return res 
        }

        return{buscarTarefa}

}
export function useAtualizaTarefa(){
     const atualizaTarefa = async (data,idTarefa) =>{
     const req = await fetch(`${url}/tarefas/${idTarefa}`, 
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }
        
    );
        const res = await req.json()
        console.log(res)
        return res;
    };
        return {atualizaTarefa};
}