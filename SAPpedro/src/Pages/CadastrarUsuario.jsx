import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// Importação do Hook form pra validar e enviar o formulário
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { useInserirUsuario } from "../hooks/UseUsuario";

const CadastroUsuario = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const {inserirUsuario} = useInserirUsuario()

  const onSubmit = (data) =>{
    console.log(data);
    inserirUsuario(data)
    alert("Usuario cadastro")
    navigate("/home")
  }
  const onError = (errors) =>{
    console.log(errors);
    
  }

  return (
   <div >
      <Form className="mt-3 w-full" 
      onSubmit={handleSubmit(onSubmit, onError)}>
        {/* Caixinha de nome */}
        <FloatingLabel
          controlId="floatingInputNome"
          label="Nome"
          className="mb-5"
        >
          <Form.Control
            type="text"
            placeholder="Digite o nome do produto"
            {...register("nome", {
              required: "O nome é obrigatório",
              minLength: {
                value: 1,
                message: "O nome deve ter pelo menos 1 caracteres",
              },
              maxLength: {
                value: 20,
                message: "O nome deve ter ate 20 caracteres",
              },
            })}
          />
          {errors.nome && <p className="error">{errors.nome.message}</p>}
        </FloatingLabel>

        {/* Caixinha de email */}
        <FloatingLabel controlId="floatingInput" label="Email" className="mb-5">
          <Form.Control
            type="email"
            placeholder="Email"
            {...register("email", {
              required: "O email é obrigatório",
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                message: "Email inválido",
              },
              validate: (value) => value.includes("@") || "Email inválido",
            })}
          ></Form.Control>
          {errors.email && <p className="error">{errors.email.message}</p>}
        </FloatingLabel>
        {/* Botão para enviar o formulário de cadastro de produto */}
        <Button variant="primary" size="lg" type="submit">
         Cadastrar
        </Button>
      </Form>
    </div>
  );
};

export default CadastroUsuario;