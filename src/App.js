import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from './components/Home';
import React ,{Component} from 'react';
import AddingProductList from './components/AddingProductList';

class App extends Component{
  render(){
    return(
     <BrowserRouter>
     <Switch>
       <Route exact path="/" component={Home} />
       <Route  path="/addproducts" component={AddingProductList} />

     
     </Switch>
     </BrowserRouter>

    )
  }
}
export default App;

