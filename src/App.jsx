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
        <img src={"./assets/257899.svg"} alt="Logo Prefeitura de Fortaleza" />
        <h1>Home</h1>
        {cadastroForm ? (
          <CadastroVisitante handleCadastroForm={handleCadastroForm} />
        ) : (
          <LoginVisitante handleCadastroForm={handleCadastroForm} />
        )}
      </>
      <h6 className="developerTxt">
        Desenvolvido por
        <i>
          <a href="https://github.com/oAndin">Andherson Costa</a>
        </i>
        &
        <i>
          <a href="https://github.com/ocaueo">Cauê Oliveira</a>
        </i>
      </h6>
    </PrimeReactProvider>
  );
}

export default App;
