import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Listings extends Component {
    /*
    this.state: the array : items are removed from the state, and lifted up to the use of props
    State is the local state of the component which cannot be accessed and modified outside of the component.
    It's equivalent to local variables in a function. 
    Props, on the other hand, make components reusable by giving components the ability to receive data from their parent component in the form of props. 
    from stackoverflow
    */
    /* all state has been moved to maincomponent */

    /* added to demo the life cycle methods of the component */
    constructor(props){
        super(props);
        console.log("Lisiting component has been constructed");
    }
    componentDidMount(){
        console.log("Listings component did mount");
    }

    render() {
        console.log("Listings component did rendered");

        const listings = this.props.items.map((item) => {
            return (
                <div key={item.id} className="col-5 col-md-4 col-lg-2 m-1">
                    <Card onClick={() => this.props.onClick(item.id)}>
                        <CardImg width="100%" src={item.image} alt={item.name} />
                        <CardImgOverlay>
                            <CardTitle>{item.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {listings}
                </div>
            </div>
        );
    }
}

export default Listings;