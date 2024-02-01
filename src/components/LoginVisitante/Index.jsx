import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";

const LoginVisitante = ({ handleCadastroForm }) => {
  return (
    <>
      <div className="container login">
        <h1>CARD DO LOGIN</h1>
        <div className="inputContainer">
          <label htmlFor="">Nome do visitante</label>
          <InputText />
        </div>
        <div className="inputContainer">
          <label htmlFor="">Senha</label>
          <Password toggleMask />
        </div>
        <div className="switchBtn">
          <p>Não tenho cadastro</p>
          <Button onClick={() => handleCadastroForm()} label="Cadastro" />
        </div>
      </div>
    </>
  );
};

export default LoginVisitante;
