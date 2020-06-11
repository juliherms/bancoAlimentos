import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { Container,Entidade } from './styles';

export default function Dashboard() {

    const [entidade, setEntidade] = useState([]);


    //captura as entidades cadastradas
    useEffect( () =>{
        async function loadEntity(){
            const response = await api.get('entidades');
            setEntidade(response.data);
        }
        loadEntity();
    }, []);
    
    return (
        <Container>
         <header>
             <strong>Casas de Apoio Cadastradas</strong>
         </header>  

         <ul>
            {entidade.map(ent => (
             <Entidade key={ent.id}>
                 <strong>{ent.nome}</strong>
                 <span>{ent.descricao}</span>
             </Entidade>
             ))}
        </ul> 
        </Container>
    );
}