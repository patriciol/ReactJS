import NavBar from './components/NavBar';
import ItemListContainer from './components/containers/ItemListContainer';

function App() {
  return (
    <>
    <NavBar />
    <ItemListContainer greeting="Hola soy el mensaje 1"/> 
    <ItemListContainer greeting="Hola soy el mensaje 2"/>
    </>
  );
}

export default App;
