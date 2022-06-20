import React, { Component } from "react";
import { Navbar, NavbarBrand } from 'reactstrap';


class Header extends Component{
    render(){
        return(
            //use react fragment, or <React.Fragment> without adding an extra node into the DOM
            <>
                <Navbar dark>
                    <div className='container'>
                        <NavbarBrand href="http://google.com"> YeeBay </NavbarBrand>
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