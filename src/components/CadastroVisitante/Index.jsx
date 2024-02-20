import { Button } from "primereact/button";
import { InputMask } from "primereact/inputmask";
import { useState } from "react";

const CadastroVisitante = ({ handleCadastroForm }) => {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [profession, setProfession] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [cep, setCep] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");

  const callApiCep = (cep) => {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((response) => response.json())
      .then((data) => {
        setCity(data.localidade);
        setDistrict(data.bairro);
      });
  };

  const sendCadastroForm = () => {
    if (
      name !== "" &&
      cpf !== "" &&
      profession !== "" &&
      gender !== "" &&
      age !== "" &&
      city !== "" &&
      district !== ""
    ) {
      fetch("http://localhost:8000/visitante", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          cpf,
          profession,
          gender,
          city,
          district,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Erro ao cadastrar visitante");
          }
          return response;
        })
        .then((data) => {
          console.log(data);
          console.log(name, cpf, profession, gender, cep, city, district);
          console.log("Cadastro enviado");
        });
      // .catch((error) => {});
      // .catch((error)  => {
      //   console.log("Deu erro", error);
      // });
    }
  };
  return (
    <>
      <div className="container">
        <h1>Seja bem-vindo(a) Visitante</h1>
        <div className="inputContainer">
          <label htmlFor="">Nome do visitante</label>
          <input
            type="text"
            placeholder="Nome completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="inputContainer">
          <label htmlFor="">CPF</label>
          <InputMask
            placeholder="999.999.999-99"
            mask="999.999.999-99"
            keyfilter={/^[^<>*!]+$/}
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
        </div>
        <div className="inputContainer">
          <label htmlFor="">Profissão</label>
          <input
            value={profession}
            type="text"
            onChange={(e) => setProfession(e.target.value)}
          />
        </div>
        <div className="side-side">
          <div className="inputContainer">
            <label htmlFor="">Gênero</label>
            <select
              name="gender"
              id=""
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option name="gender" value="Masculino">
                Selecione uma opção
              </option>
              <option name="gender" value="Masculino">
                Masculino
              </option>
              <option name="gender" value="Feminino">
                Feminino
              </option>
              <option name="gender" value="Outro">
                Outro
              </option>
            </select>
          </div>
          <div className="inputContainer">
            <label htmlFor="">Idade</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              min="0"
            />
          </div>
        </div>
        <div className="inputContainer">
          <label htmlFor="">CEP</label>
          <InputMask
            placeholder="99999-999"
            mask="99999-999"
            keyfilter={/^[^<>*!]+$/}
            value={cep}
            onChange={(e) => setCep(e.target.value)}
            onBlur={() => callApiCep(cep)}
          />
        </div>
        <div className="side-side">
          <div className="inputContainer">
            <label htmlFor="">Cidade</label>
            <input
              type="select"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="inputContainer">
            <label htmlFor="">Bairro</label>
            <input
              type="text"
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
            />
          </div>
        </div>
        <div className="buttonContainer">
          <button onClick={() => sendCadastroForm()}>Cadastrar</button>
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
