import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from "react-bootstrap/Card"

import { useDeletaTarefa } from '../hooks/UseTarefa'
import CardBody from 'react-bootstrap/esm/CardBody'


const CardTarefa = (props) => {
    const {deletarTarefa} = useDeletaTarefa()
    
    const handleDlete = async () =>{
        const deletado = await deletarTarefa(props.id)
        alert("Tarefa deletada com sucesso")
        window.location.reload()
    }
    return (
         <div>
            <Card border="primary" style={{width:"18rem"}}>
                <Card.Body>
                     <Card.Text>
                        <b>Descrição:</b> <br /> {props.id}
                    </Card.Text>
                    <Card.Text>
                        <b>Descrição:</b> <br /> {props.descricao}
                    </Card.Text>
                    <Card.Text>
                        <b>Setor:</b> <br /> {props.setor}
                    </Card.Text>
                    <Card.Text>
                        <b>Data:</b> <br /> {props.Data}
                    </Card.Text>
                    <Card.Text>
                        <b>Usuario:</b> <br /> {props.usuario}
                    </Card.Text>

                    <Button
                    size=""
                    variant='warning'
                    type='button'
                    href={`/editartarefa/${props.id}`}
                    className="me-3">
                        Editar
                    </Button>

                      <Button
                    size=""
                    variant='danger'
                    type='button'
                   onClick={handleDlete}>
                        Deletar
                    </Button>
                </Card.Body>
            </Card>
        </div>
  )
}

export default CardTarefa