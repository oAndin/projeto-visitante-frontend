import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import React from "react";

const LoginVisitante = ({ handleCadastroForm }) => {
  return (
    <>
      <h1>Login Visitante</h1>
      <Card>
        <h1>CARD DO LOGIN</h1>
        <div className="input">
          <label htmlFor="">Nome do visitante</label>
          <InputText id="" />
          <small></small>
        </div>
        <div className="switchBtn">
          <p>Não tenho cadastro</p>
          <Button onClick={() => handleCadastroForm()} label="Cadastro" />
        </div>
      </Card>
    </>
  );
};

export default LoginVisitante;
