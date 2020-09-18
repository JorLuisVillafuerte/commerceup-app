import React, { useContext, useEffect } from 'react';
import { Grid, Card, Icon, IconButton, Tooltip, Button, Divider } from "@material-ui/core";
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
                            <Col md={3}>

                            </Col>
                            <Col md={9}>
                            <Divider orientation="vertical" flexItem />
                                <Row style={{display: 'flex', justifyContent: 'center'}}>
                                        {productos.map((prd,key) => {
                                            return(
                                            <Col md={3} xs={9} key={key} style={{minWidth: '30%'}} className="mb-4">
                                                <Card elevation={5} style={{minWidth: '30%', }}>
                                                    <CardImg top alt="..." style={{maxHeight: 150}} src="https://source.unsplash.com/random"></CardImg>
                                                    <CardBody >
                                                        <CardTitle>{prd.name}</CardTitle>
                                                        <CardText>{prd.unitPrice}</CardText>
                                                        <CardText><small className="text-muted">disponible</small></CardText>
                                                    </CardBody>
                                                </Card>                                
                                            </Col>);
                                        })}
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