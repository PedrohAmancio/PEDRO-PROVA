const url = import.meta.env.VITE_API_URL;

import { useState, useEffect } from 'react';

export function useListaUsuario(){

    const [usuarios, setUsuarios] = useState([]);

    useEffect(() =>{
        async function fetchData(){
            try {
                const req = await fetch(`${url}/usuarios`);
                const res = await req.json();
                setUsuarios(res);
            }
            catch (erro){
                console.log(erro)
            }
        }
        fetchData();
    },[])
    return usuarios;
}
export function useInserirUsuario(){
    const inserirUsuario = async (data)=>{
        const req = await fetch(`${url}/usuarios`, 
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
    return {inserirUsuario}
}