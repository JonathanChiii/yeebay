import { Component } from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import Listings from './components/ListingsComponent';
import { ITEMS } from './shared/items' ;


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      items : ITEMS
    };
    
  }

  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className='container'>
            <NavbarBrand href="http://google.com"> YeeBay </NavbarBrand>
          </div>
        </Navbar>
        <Listings items = {this.state.items} />
      </div>
    );
  }
}

export default App;
/* this app is an export from App.js file */