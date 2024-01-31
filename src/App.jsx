import { PrimeReactProvider } from "primereact/api";
import LoginVisitante from "./routes/LoginVisitante/Index";
import CadastroVisitante from "./routes/CadastroVisitante/Index";
import { useState } from "react";

function App() {
  const [cadastroForm, setCadastroForm] = useState(true);

  const handleCadastroForm = () => {
    setCadastroForm(!cadastroForm);
  };

  return (
    <PrimeReactProvider>
      <>
        <div className="logoPrefeitura">
          <img
            src="./assets/Brasão_de_Fortaleza_-_Gestão_RC.png"
            alt="logo prefeitura de fortaleza"
          />
        </div>
        {cadastroForm ? (
          <CadastroVisitante handleCadastroForm={handleCadastroForm} />
        ) : (
          <LoginVisitante handleCadastroForm={handleCadastroForm} />
        )}
      </>
      <h5 className="developerTxt">
        Desenvolvido por
        <i>
          <a href="https://github.com/oAndin"> Andherson Costa </a>
        </i>
        &
        <i>
          <a href="https://github.com/ocaueo"> Cauê Oliveira </a>
        </i>
      </h5>
    </PrimeReactProvider>
  );
}

export default App;
