import { Component } from 'react';
/* import './App.css';
styles are removes since this is a pure container componnet
*/
import { ITEMS } from '../shared/items';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';

import Home from './HomeComponent';
import Listings from './ListingsComponent';
import ItemDetail from './ItemdetailComponent';
import Contact from './ContactComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Routes, Route, Redirect, Navigate } from 'react-router-dom';

/* the main component is responsible for all the state of the program */
class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: ITEMS,
            /* selectedItem: null */
            /* this state is moved from ListingComponent */

            comments: COMMENTS,
            leaders: LEADERS,
            promotions: PROMOTIONS
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

        const HomePage = () => {
            return (
                <Home 
                    item = {this.state.items.filter((item) => (item.featured))[0]}
                    promotion = {this.state.promotions.filter((promotion) => (promotion.featured))[0]}
                    leader={this.state.leaders.filter((leader) => (leader.featured))[0]}
                />
            );
        }

        return (
            <div className="App">
                <Header />

                <Routes>
                    {/* this line will work fine, but cannot pass in attributes or props */}
                    <Route path='/home' element={<HomePage />} />
                    {/* adding a functional component, we can pass in attributes or props */}
                    <Route exact path="/listings" element={<Listings items={this.state.items} />} />
                    {/* anything that doesn't match home or listings will be redirected to home */}
                    <Route path="/" element={<Navigate replace to="/home" />} />

                    <Route exact path="/contactus" element={<Contact />} />

                </Routes>

                <Footer />
            </div>
        );
        
    }
}

export default Main;
/* this app is an export from App.js file */