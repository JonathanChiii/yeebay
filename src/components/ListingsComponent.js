import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Listings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            /*
            the array : items are removed from the state, and chanfe to the use of props
            State is the local state of the component which cannot be accessed and modified outside of the component. 
            It's equivalent to local variables in a function. 
            Props, on the other hand, make components reusable by giving components the ability to receive data from their parent component in the form of props. 
            from stackoverflow
            */

            /* this is for the click event */
            selectedItem: null
        };
    }

    onItemSelect(item) {
        /* showing the change of state using setState function */
        /* the if statement are used to unselect and close the card that's been expanded */
        if(item == this.state.selectedItem){
            this.setState({selectedItem : null})
        }
        else
            this.setState({selectedItem : item});
        
    }

    renderItem() {
        let item = this.state.selectedItem;
        if(item != null){
            return(
                <Card>
                    <CardImg top src={item.image} alt={item.name} />
                    <CardBody>
                      <CardTitle>{item.name}</CardTitle>
                      <CardText>{item.description}</CardText>
                    </CardBody>
                </Card>
            )
        }
        /* if nothing selected, then return a empty div */
        else return(<div></div>);
    }

    render() {
        const listings = this.props.items.map((item) => {
            return (
              <div key={item.id} className="col-5 col-md-3 m-1">
                <Card onClick={() => this.onItemSelect(item)}>
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

            <div className='row'>
                {this.renderItem()}
            </div>
            
          </div> 
        );
    }
}

export default Listings;