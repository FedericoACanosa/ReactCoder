import './navbar.css';
import FormBusqueda from '../FormBusqueda/FormBusqueda';
import DropDown from './DropDown/DropDown';
import CartWidget from '../CartWidget/CardWidget'
const Navbar = () => {
    return (
        
            
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">ArcoIris</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Nosotros</a>
        </li>
        <DropDown/>
      </ul>

      <CartWidget/>

      <FormBusqueda busqueda={"Buscar Productos"}/>
    </div>
  </div>
</nav>

        
    );
}

export default Navbar;
