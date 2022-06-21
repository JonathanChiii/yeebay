import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

function RenderCard({item}) {
  return (
    <Card>
      <CardImg src={item.image} alt={item.name} />
      <CardBody>
        <CardTitle>{item.name}</CardTitle>
        {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
        <CardText>{item.description}</CardText>
      </CardBody>
    </Card>
  );
}

/*for now the HomeComponent is as a functional component */
function Home(props) {
  //console.log(props.item.name);
  //console.log(props.item.promotion);
  return (
    <div className="container">
      <div className="row align-items-start">
        <div className="col-12 col-md m1">
          <RenderCard item={props.item} />
        </div>
        <div className="col-12 col-md m1">
          <RenderCard item={props.promotion} />
        </div>
        <div className="col-12 col-md m1">
          <RenderCard item={props.leader} />
        </div>

      </div>
    </div>
  );
}

export default Home;