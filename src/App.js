import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
function App() {
  return (
    <>
    <NavBar />
    <ItemListContainer/>
    <h1>Tarjeta de detalle:</h1> 
    <ItemDetailContainer/>
    </>
  );
}

export default App;
