import React, { useContext, useEffect } from 'react';
import { Grid, Card, Icon, IconButton, Tooltip, Button } from "@material-ui/core";
import { CardBody, Container, Row, Col, CardTitle, CardImg, CardText, CardSubtitle } from 'reactstrap';
import img1 from '../../../assets/images/big/img1.jpg';
import ProductsContext from '../../../context/Products/ProductsContext';


const ProductList = () => {

    const {obtenerProductos, productos }=useContext(ProductsContext);
    useEffect(() => {
        obtenerProductos();
    }, []);
    
    
    return ( 
        <Container>
            <Row>
                <Card >
                    <CardBody>
                        <Row>
                            <Col md={2}>

                            </Col>
                            <Col md={10}>
                                <Row>
                                    <div className="card-deck">
                                        {productos.map((prd,key) => {
                                            return(
                                            <Col md={3} key={key} className="mb-4">
                                                <Card>
                                                    <CardImg top alt="..." src="https://demos.creative-tim.com/argon-design-system-pro/assets/img/faces/alejandro-escamilla.jpg"></CardImg>
                                                    <CardBody >
                                                        <CardTitle>{prd.name}</CardTitle>
                                                        <CardText>{prd.unitPrice}</CardText>
                                                        <CardText><small className="text-muted">disponible</small></CardText>
                                                    </CardBody>
                                                </Card>                                
                                            </Col>);
                                        })}
                                    </div>
                                </Row>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Row>
        </Container>
    );
}
 
export default ProductList;