import { PrimeReactProvider } from "primereact/api";
import { useState } from "react";
import CadastroVisitante from "../../components/CadastroVisitante/Index";
import LoginVisitante from "../../components/LoginVisitante/Index";

function HomePage() {
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
    </PrimeReactProvider>
  );
}

export default HomePage;
