// importa o outlet do router dom 
import { Outlet } from "react-router";

// importação do react boodstrap
import "bootstrap/dist/css/bootstrap.min.css";

// importa componentes do boodstrap
import { Container } from "react-bootstrap";

//importando o companente de barra de navegação 
import BarraNavegacao from "./Components/BarraNavegacao";
import Home from "./Pages/Home";

function App() {
  return (
    <>
    <div className="App">
    <Container>
      <BarraNavegacao />
      <Outlet />
    </Container>
    </div>
  </>
  );
}
export default App;