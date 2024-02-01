import { Outlet } from "react-router";  
import Footer from "./components/Footer/Index";

function App() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
