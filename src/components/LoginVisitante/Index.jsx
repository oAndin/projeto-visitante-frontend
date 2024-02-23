import axios from "axios";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { useState } from "react";

const LoginVisitante = ({ handleCadastroForm }) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    try {
      if (!user && user !== "") {
        throw new Error("Nome de usuário inválido");
      }
      if (!password && password !== "") {
        throw new Error("Senha inválida");
      }
      axios.get(`user`).
      then((users) => {
        users.map((user) => {
          if (user.name === user && user.password === password) {
            console.log("Login user");
          }
        })
      });
      // if (user === "admin" && password === "admin") {
      //   console.log("Login admin");
      // }
    } catch (error) {
      console.log(error);
    }
    console.log("try login");
  };

  return (
    <>
      <div className="container login">
        <h1>CARD DO LOGIN</h1>
        <div className="inputContainer">
          <label htmlFor="">Nome do visitante</label>
          <InputText value={user} onChange={(e) => setUser(e.target.value)} />
        </div>
        <div className="inputContainer withPassword">
          <label htmlFor="">Senha</label>
          <Password
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            toggleMask
            feedback={false}
          />
        </div>
        <div className="buttonContainer">
          <Button onClick={() => handleLogin()} label="Entrar" />
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
