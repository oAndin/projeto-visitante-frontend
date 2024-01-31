import { Button } from "primereact/button";
import { InputMask } from "primereact/inputmask";

const CadastroVisitante = ({ handleCadastroForm }) => {
  return (
    <>
      {" "}
      <div className="container">
        <h1>Seja bem-vindo(a) Visitante</h1>
        <div className="inputContainer">
          <label htmlFor="">Nome do visitante</label>
          <input type="text" placeholder="Nome completo" />
        </div>
        <div className="inputContainer">
          <label htmlFor="">CPF</label>
          <InputMask placeholder="999.999.999-99" mask="999.999.999-99" />
        </div>
        <div className="inputContainer">
          <label htmlFor="">Profissão</label>
          <input type="text" />
        </div>
        <div className="side-side">
          <div className="inputContainer">
            <label htmlFor="">Gênero</label>
            <input type="select" />
          </div>
          <div className="inputContainer">
            <label htmlFor="">Idade</label>
            <input type="number" />
          </div>
        </div>
        <div className="inputContainer">
          <label htmlFor="">CEP</label>
          <InputMask placeholder="99999-999" mask="99999-999" />
        </div>
        <div className="side-side">
          <div className="inputContainer">
            <label htmlFor="">Cidade</label>
            <input type="select" />
          </div>
          <div className="inputContainer">
            <label htmlFor="">Bairro</label>
            <input type="number" />
          </div>
        </div>
        <div className="buttonContainer">
          <button>Enviar</button>
        </div>
        <div className="switchBtn">
          <p>Já tem cadastro?</p>
          <Button onClick={() => handleCadastroForm()} label="Login" />
        </div>
      </div>
    </>
  );
};

export default CadastroVisitante;
