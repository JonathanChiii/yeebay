import React, { Component } from "react";
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false
        }
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav = () => {
        this.setState((prevState) => (
            {
                isNavOpen: !prevState.isNavOpen
            }
        )
        );

        /*
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
        */

        //console.log('isNavOpen is' + this.state.isNavOpen);
    }

    render() {
        return (
            //use react fragment, or <React.Fragment> without adding an extra node into the DOM
            <>
                <Navbar dark expand='md'>
                    <div className='container'>

                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="http://google.com">
                            <img src="/assets/images/logo.PNG" height='50' width='140' alt='YeeBay' />
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className='nav-link' to='./myaccount'>
                                        <span className="fa fa-home fa-lg"></span> My Account
                                    </NavLink>
                                    <NavLink className='nav-link' to='./home'>
                                        <span className="fa fa-home fa-lg"></span> Home
                                    </NavLink>
                                    <NavLink className='nav-link' to='./listings'>
                                        <span className="fa fa-list fa-lg"></span> Listings
                                    </NavLink>
                                    <NavLink className='nav-link' to='./aboutus'>
                                        <span className="fa fa-info fa-lg"></span> About Us
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>


                <div className='container'>
                    <div className="row row-header">
                        <div className="col-12 col-sm-6">
                            <h1>YeeBay</h1>
                            <p> Buy and sell here on this xBay replica website!</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Header