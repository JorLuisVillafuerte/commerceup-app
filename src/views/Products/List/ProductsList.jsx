import React, { useContext, useEffect, useState } from 'react';
import { Grid, Card, Icon, IconButton, Tooltip, Button, Divider, CardContent, Typography, CardActions, CardMedia, CardActionArea, FormGroup, InputLabel, TextField, LinearProgress } from "@material-ui/core";
import { CardBody, Container, Row, Col, CardTitle, CardImg, CardText, CardSubtitle, CardLink } from 'reactstrap';
import img1 from '../../../assets/images/big/img1.jpg';
import ProductsContext from '../../../context/Products/ProductsContext';
import Popup from '../../../components/Popup';


const ProductList = () => {

    const {obtenerProductos, productos }=useContext(ProductsContext);
    
    const [openPopup, setOpenPopup] = useState(false);
    const [producto, setProducto] = useState(null);
    const handleClose = () => {
        setOpenPopup(false);
    };
    const showDetails = (prd) => {
        console.log(prd)
        setOpenPopup(true);
        
    }
    useEffect(() => {
        obtenerProductos();
    }, []);
   
    /*
    <Card elevation={5} style={{minWidth: '30%', }}>
        <Button className="p-0" >

        <CardImg top alt="..." style={{maxHeight: 280, maxWidth: 350}} src="https://source.unsplash.com/random"></CardImg>
        </Button>

        <CardBody >
        <CardTitle>{prd.name}</CardTitle>
        <CardText>{prd.unitPrice}</CardText>
        <CardText><small className="text-muted">disponible</small></CardText>
        </CardBody>
    </Card>
    */
    if(productos.length === 0) return (<LinearProgress color="primary" />);
    return ( 
        <Container>
            <Row>
                <Card className="pt-2">
                    <CardBody>
                        <Row>
                            <Col md={3}>
                                <Row>
                                    <Col md={12}>
                                        <Card>
                                            <CardBody>
                                            <CardTitle>Filtros</CardTitle>
                                                <Divider className="my-4" />
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={9}>
                                <Row style={{display: 'flex', justifyContent: 'center'}}>
                                        {productos.map((prd,key) => {
                                            return(
                                            <Col md={3} xs={9} key={key} style={{minWidth: '30%'}} className="mb-4">
                                                <Card  elevation={5}>
                                                    <CardActionArea onClick={()=>showDetails(prd)}>
                                                        <CardMedia
                                                            style={{maxHeight: 250, maxWidth: 350}} 
                                                            component="img"
                                                            image="https://source.unsplash.com/random"
                                                            title={prd.name}
                                                            />
                                                        </CardActionArea>
                                                    <CardContent>
                                                        <Typography  color="textSecondary" gutterBottom>{prd.name}</Typography>
                                                        <Typography  className="mb-1" color="textSecondary">Disponible</Typography>
                                                        <Typography variant="body2" component="p">{prd.description}</Typography>
                                                    </CardContent>
                                                    <CardActions>
                                                        <Typography >${prd.unitPrice}</Typography>
                                                    </CardActions>
                                                </Card>                              
                                            </Col>);
                                        })}
                                </Row>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Row>
            <Popup
                title={'Detalle de producto'}
                openPopup={openPopup}
                handleClose={handleClose}
            >
                
            </Popup>
        </Container>
    );
}
 
export default ProductList;