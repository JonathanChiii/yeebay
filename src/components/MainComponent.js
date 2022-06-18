import { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
/* import './App.css';
styles are removes since this is a pure container componnet
*/
import { ITEMS } from '../shared/items';
import Listings from './ListingsComponent';
import ItemDetail from './ItemdetailComponent';

/* the main component is responsible for all the state of the program */
class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: ITEMS,
            selectedItem: null /* this state is moved from ListingComponent */
        };
        /* accessed by this.state.items, this.state.selectedItem */
    }

    /* this function was move from ListingComponent */
    onItemSelect(item) {
        /* showing the change of state using setState function */
        /* the if statement are used to unselect and close the card that's been expanded */
        if (item === this.state.selectedItem) {
            this.setState({ selectedItem: null })
        }
        else
            this.setState({ selectedItem: item });
    }

    render() {
        return (
            <div className="App">
                <Navbar dark color="primary">
                    <div className='container'>
                        <NavbarBrand href="http://google.com"> YeeBay </NavbarBrand>
                    </div>
                </Navbar>

                <Listings items={this.state.items} onClick={(itemID) => this.onItemSelect(itemID)} />

                <ItemDetail item={this.state.items.filter((item) => item.id === this.state.selectedItem)[0]} />
            </div>
        );
    }
}

export default Main;
/* this app is an export from App.js file */