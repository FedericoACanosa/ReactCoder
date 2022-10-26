import './App.css';
import FormBusqueda from './FormBusqueda/FormBusqueda';
import  Navbar  from './Navbar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';

const App = () => {
  return (
    <>
    <Navbar/>
    <ItemListContainer detalle={"Bienvenidos a Arcoiris, tu ropa con la mejor onda!"}/>
    </>

  
  );
}

export default App;

