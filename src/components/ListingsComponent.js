import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderListingItem({ item, onClick }) {
    return (
        //<Card onClick={() => this.props.onClick(item.id)}> removed this.props.
        <Card onClick={() => onClick(item.id)}>
            <CardImg width="100%" src={item.image} alt={item.name} />
            <CardImgOverlay>
                <CardTitle>{item.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}
/*
this.state: the array : items are removed from the state, and lifted up to the use of props
State is the local state of the component which cannot be accessed and modified outside of the component.
It's equivalent to local variables in a function. 
Props, on the other hand, make components reusable by giving components the ability to receive data from their parent component in the form of props. 
from stackoverflow
*/
/* all state has been moved to maincomponent */


/* this component doesn't maintain any local state, and purely work on the props that passed to it. */

const Listings = (props) => {
    //     const listings = this.props.items.map((item) => ...); removed this.
    const listings = props.items.map((item) => {
        return (
            <div key={item.id} className="col-5 col-md-4 col-lg-2 m-1">
                <RenderListingItem item={item} onClick={props.onClick} />
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

export default Listings;