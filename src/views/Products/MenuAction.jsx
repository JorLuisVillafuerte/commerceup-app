import React from 'react';
import { Nav } from 'reactstrap';  
import {Card,CardText,CardTitle,Button,Row,Col, CardBody} from 'reactstrap';
import { Route, Switch, Link, NavLink } from 'react-router-dom';

const MenuAction = (props) => {
    return ( 
        <Row>
            {props.productsRoutes.map((prop, key) => {
                return (
                <Col xs="12" md="3" key={key}>
                    <Card body className="text-center" >
                        <CardTitle>{prop.title}</CardTitle>
                        <CardText>{prop.text}</CardText>
                        <Link to={prop.path}><Button color="info" block>{prop.buttonText}</Button></Link>
                    </Card>
                </Col>
                );                
            })}
        </Row>
    );
}
 
export default MenuAction;