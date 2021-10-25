import NavBar from './components/NavBar';
import ItemListContainer from './components/containers/ItemListContainer';

function App() {
  return (
    <>
    <NavBar />
    <ItemListContainer nombre="Producto 1" stock="5"/>
    <ItemListContainer nombre="Producto 2" stock="3"/> 
    </>
  );
}

export default App;
