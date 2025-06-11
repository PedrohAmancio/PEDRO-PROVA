import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// Importação do Hook form pra validar e enviar o formulário
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { useListaUsuario } from "../hooks/UseUsuario";

import { useInserirTarefa } from "../hooks/UseTarefa";

const CadastrarTarefa = () => {
  
    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const usuarios = useListaUsuario();

  const { inserirTarefa } = useInserirTarefa();

  const onSubmit = (data) => {
    console.log(data);
    inserirTarefa(data);
    alert("Tarefa cadastrada");
    navigate("/home");
  };
  const onError = (errors) => {
    console.log(errors);
  };
  return (
     <div >
      <Form className="mt-3 w-full" onSubmit={handleSubmit(onSubmit, onError)}>
        {/* Caixinha de titulo */}
        <FloatingLabel
          controlId="floatingInputtitulo"
          label="descricao"
          className="mb-5"
        >
          <Form.Control
            type="text"
            placeholder="Digite a descrição da tarefa"
            {...register("descricao", {
              required: "O titulo é obrigatório",
              minLength: {
                value: 1,
                message: "O titulo deve ter pelo menos 1 caracteres",
              },
              maxLength: {
                value: 20,
                message: "O titulo deve ter ate 20 caracteres",
              },
            })}
          />
          {errors.descricao && <p className="error">{errors.descricao.message}</p>}
        </FloatingLabel>

        {/* Caixinha de autor */}
        <FloatingLabel
          controlId="floatingInputautor"
          label="setor"
          className="mb-5"
        >
          <Form.Control
            type="text"
            placeholder="Digite o setor da tarefa"
            {...register("setor", {
              required: "O setor é obrigatório",
              minLength: {
                value: 1,
                message: "O setor deve ter pelo menos 1 caracteres",
              },
              maxLength: {
                value: 20,
                message: "O setor deve ter ate 20 caracteres",
              },
            })}
          />
          {errors.setor && <p className="error">{errors.setor.message}</p>}
        </FloatingLabel>

        {/* Caixinha de generos */}
        <FloatingLabel
          controlId="floatingInputgeneros"
          label="data"
          className="mb-5"
        >
          <Form.Control
            type="text"
            placeholder="Digite a data da tarefa"
            {...register("data", {
              required: "O data é obrigatório",
              minLength: {
                value: 1,
                message: "O data deve ter pelo menos 1 caracteres",
              },
              maxLength: {
                value: 20,
                message: "O data deve ter ate 20 caracteres",
              },
            })}
          />
          {errors.data && <p className="error">{errors.data.message}</p>}
        </FloatingLabel>

        {/* Caixinha de status */}
        <FloatingLabel
          controlId="floatingInputstatus"
          label="status"
          className="mb-5"
        >
          <Form.Select disabled value="A fazer" {...register("status")}>
            <option value="A fazer"> A fazer</option>
          </Form.Select>
          {errors.status && <p className="error">{errors.status.message}</p>}
        </FloatingLabel>

             {/* Caixinha de prioridade */}
        <FloatingLabel
          controlId="floatingInputstatus"
          label="prioridade"
          className="mb-5"
        >
          <Form.Select  value="Quero ler" {...register("prioridade")}>
            <option value=" Baixa "> Baixa </option>
            <option value=" Media "> Media  </option>
            <option value=" Alta "> Alta  </option>
          </Form.Select>
          {errors.prioridade && <p className="error">{errors.prioridade.message}</p>}
        </FloatingLabel>

        {/* Select de usuario */}
        <FloatingLabel
          controlId="floatingSelectTipo"
          label="usuario"
          className="mb-5"
        >
          <Form.Select
            {...register("usuario", {
              validate: (value) => value != "Nenhum" || "Escolha um usuario",
            })}
          >
            <option value="Nenhum"> Escolha um usuario </option>
            {usuarios.map((user) => (
              <option
                key={user.id}
                value={user.nome}
              >
                {user.nome}
              </option>
            ))}
          </Form.Select>
          {errors.usuario && (
            <p className="error">{errors.usuario.message}</p>
          )}
        </FloatingLabel>
        {/* Botão para enviar o formulário de cadastro de produto */}
        <Button variant="primary" size="lg" type="submit">
         Cadastrar
        </Button>
      </Form>
    </div>
  );
};
  

export default CadastrarTarefa