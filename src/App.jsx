import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './Components/NavBar';
import Rodape from './Components/Rodape';
import Inicio from './Components/Inicio';
import Sobre from './Components/Sobre';

const AppRoutes = () => {

  return (
    <>
      <NavBar />
      <Inicio/>
      <Sobre/>
      <Rodape />
    </>
  );
}

export default AppRoutes;
