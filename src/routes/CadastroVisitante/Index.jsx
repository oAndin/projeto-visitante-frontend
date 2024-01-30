import { Button } from "primereact/button";
import { Card } from "primereact/card";

const CadastroVisitante = ({ handleCadastroForm }) => {
  return (
    <>
      <h1>Cadastro Visitante</h1>
      <Card>
        <h1>CARD DO CADASTRO</h1>
        <div className="switchBtn">
          <p>Já tenho cadastro</p>
          <Button onClick={() => handleCadastroForm()} label="Login" />
        </div>
      </Card>
    </>
  );
};

export default CadastroVisitante;
