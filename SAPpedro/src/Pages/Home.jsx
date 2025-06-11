import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import CardTarefa from "../components/CardTarefa";

import { useListaTarefas } from "../hooks/UseTarefa";

const Home = () => {
  const tarefas = useListaTarefas();

   const colunaStyle = { marginTop: "40px" };
  const h1Style = { marginBottom: "30px", marginTop: "10px" };
  return (
    <>
      <Row>
        <Col xs={4} style={colunaStyle}>
          <h1 style={h1Style}>A fazer</h1>
          {tarefas.map(
            (Tarefa) =>
              Tarefa.status == "A fazer" && (
                <CardTarefa
                  key={Tarefa.id}
                  id={Tarefa.id}
                  descricao={Tarefa.descricao}
                  setor={Tarefa.setor}
                  prioridade={Tarefa.prioridade}
                  Data={Tarefa.Data}
                  status={Tarefa.status}
                  usuario={Tarefa.usuario}
                />
              )
          )}
        </Col>

       <Col xs={4} style={colunaStyle}>
          <h1 style={h1Style}>Fazendo</h1>
          {tarefas.map(
            (Tarefa) =>
              Tarefa.status == "Fazendo" && (
                <CardTarefa
                  key={Tarefa.id}
                  id={Tarefa.id}
                  descricao={Tarefa.descricao}
                  setor={Tarefa.setor}
                  prioridade={Tarefa.prioridade}
                  Data={Tarefa.Data}
                  status={Tarefa.status}  
                  usuario={Tarefa.usuario}
                />
              )
          )}
        </Col>

        <Col xs={4} style={colunaStyle}>
          <h1 style={h1Style}>Pronto</h1>
          {tarefas.map(
            (Tarefa) =>
              Tarefa.status == "Pronto" && (
                <CardTarefa
                  key={Tarefa.id}
                  id={Tarefa.id}
                  descricao={Tarefa.descricao}
                  setor={Tarefa.setor}
                  prioridade={Tarefa.prioridade}
                  Data={Tarefa.Data}
                  status={Tarefa.status}
                  usuario={Tarefa.usuario}
                />
              )
          )}
        </Col>
      </Row>
    </>
  );
};

export default Home;