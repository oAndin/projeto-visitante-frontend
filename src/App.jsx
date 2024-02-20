import { Outlet } from "react-router";
import Footer from "./components/Footer/Index";
import { AuthContext } from "./contexts/AuthContext";
import { useState } from "react";

function App() {
  const [estaLogado, setEstaLogado] = useState(false);
  const contexts = {
    estaLogado,
    setEstaLogado
  }
  return (
    <>
      <AuthContext.Provider value={contexts}>
        <Outlet />
        <Footer />
      </AuthContext.Provider>
    </>
  );
}

export default App;
