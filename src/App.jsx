import { PrimeReactProvider } from "primereact/api";
import LoginVisitante from "./routes/LoginVisitante/Index";
import CadastroVisitante from "./routes/CadastroVisitante/Index";
import { useState } from "react";

function App() {
  const [cadastroForm, setCadastroForm] = useState(true);

  return (
    <PrimeReactProvider>
      <>
        <h1>Home</h1>
        {cadastroForm ? (
          <CadastroVisitante setLoginForm={setCadastroForm} />
        ) : (
          <LoginVisitante setLoginForm={setCadastroForm} />
        )}
      </>
    </PrimeReactProvider>
  );
}

export default App;
