import React from 'react';
import { Card, CardImg, CardText, CardBody,
CardTitle, CardSubtitle, Button } from 'reactstrap';  


const CardGenerator = (props)=> {
    console.log(props);
    
    
        return(
            <div> 
            {props.fighterData.map((element)=> {
            return <Card>
            <CardImg top width="50%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
              <CardBody>
                <CardTitle>{element.name}</CardTitle>
                <CardSubtitle>{element.make}</CardSubtitle>
                <CardText>Top Speed: {element.topSpeed}</CardText>
                <CardText>{element.weapons}</CardText>
              </CardBody>
            </Card>
            })} 
          </div>            
        )
    
}

export default CardGenerator 