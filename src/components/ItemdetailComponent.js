import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class ItemDetail extends Component {
    /* this component doesn't maintain any local state, and purely work on the props that passed to it. */


    /* this component renders the details of the item */

    componentDidMount() {
        console.log("ItemDetail component did mount");
    }

    componentDidUpdate() {
        console.log("ItemDetail component did update");

    }


    render() {
        console.log("ItemDetail component did rendered");

        let item = this.props.item;
        if (item != null) {
            let reviews = item.comments.map((comment) => {
                return (
                    <div key={comment.id}>
                        <CardText>Rating: {comment.rating}★ by: {comment.author}</CardText>
                        <CardText>" {comment.comment} "</CardText>
                    </div>
                )

            });

            return (
                <Card className="col-10 col-md-8 col-lg-4 m-1">
                    <CardImg top src={item.image} alt={item.name} />
                    <CardBody>
                        <CardTitle>{item.name}</CardTitle>
                        <CardText>{item.description}</CardText>
                        <CardText> Reviews: </CardText>
                        {reviews}
                    </CardBody>
                </Card>
            )
        }
        /* if nothing selected, then return a empty div */
        else return (<div></div>);
    }

}
export default ItemDetail; 