import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartContextProvider from './components/CarContext/CarContext';
import CartList from './components/CartList/CartList';
import { BrowserRouter, Switch, Route } from 'react-router-dom'


function App() {
  return (
    <>
      <CartContextProvider>
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
              <CartList />
            </Route>

          </Switch>
        </BrowserRouter>
      </CartContextProvider>
    </>
  );
}
export default App;