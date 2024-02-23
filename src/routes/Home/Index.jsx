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
          <img src="src\assets\Logo_Prefeitura-Png.png" alt="Logo Prefeitura de Fortaleza" />
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
