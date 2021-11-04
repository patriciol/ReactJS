import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


function App() {
  return (
    <>

        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <ItemListContainer />
            </Route>
            <Route exact path="/categoria/:categoryId" component={ItemListContainer} />
            <Route exact path="/item/:Id" >
              <ItemDetailContainer />
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
          </Switch>

        </BrowserRouter>

    </>

  );
}

export default App;
