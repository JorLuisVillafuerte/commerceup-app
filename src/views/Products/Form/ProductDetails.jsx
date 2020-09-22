import { Divider, FormGroup, InputLabel, List, ListItem, ListItemText, TextField } from '@material-ui/core';
import React from 'react';
import { Button, Card, CardBody, CardImg, CardTitle, Col, Row } from 'reactstrap';
import img1 from '../../../assets/images/big/img1.jpg';

const ProductDetails = (props) => {
    const {handleReset,handleSubmit, producto,items } = props;
    return ( 
        <>
        <Row> 
            <Col md={12} >           
                <Card outline color="info" className="border">
                    <CardBody>
                        <CardTitle>Producto a ingresar</CardTitle>
                        <Divider className="my-2" />
                        <Row className="mt-2">
                            <Col md={3}>
                                <CardImg top width="100%" src={img1} alt="Card image cap" />
                            </Col>
                            <Col md={9}>
                                <Row>
                                    <Col md={4}>
                                        <FormGroup>
                                                <InputLabel htmlFor="">Codigo</InputLabel>
                                                <TextField
                                                    required
                                                    name=""
                                                    fullWidth
                                                    disabled
                                                    value={producto.productCode}
                                                    />
                                        </FormGroup>
                                    </Col>
                                    <Col md={4}>
                                        <FormGroup>
                                                <InputLabel htmlFor="">Nombre</InputLabel>
                                                <TextField
                                                    required
                                                    name=""
                                                    fullWidth
                                                    disabled
                                                    value={producto.name}
                                                    />
                                        </FormGroup>
                                    </Col>
                                    <Col md={4}>
                                        <FormGroup>
                                                <InputLabel htmlFor="">Estado</InputLabel>
                                                <TextField
                                                    required
                                                    name=""
                                                    fullWidth
                                                    disabled
                                                    value={producto.statusId.statusType}
                                                    />
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup >
                                                <InputLabel htmlFor="">Categoria</InputLabel>
                                                <TextField
                                                    required
                                                    name=""
                                                    fullWidth
                                                    disabled
                                                    value={producto.categoryId.name}
                                                    />
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup >
                                                <InputLabel htmlFor="">Precio</InputLabel>
                                                <TextField
                                                    required
                                                    name=""
                                                    fullWidth
                                                    disabled
                                                    value={'$'+producto.unitPrice}
                                                    />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row className="mt-4">
                                    <Col md={6}>
                                        <List>
                                        {items.map((value) => {
                                            return (
                                                <ListItem key={value.itemCode} role={undefined} dense button >
                                                    <ListItemText  id={value.itemCode} primary={`Codigo Item: ${value.itemCode}  Talle:${value.size} Color:${value.colour} `} />
                                                </ListItem>
                                            );
                                        })}
                                        </List>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Col>
        </Row>
        <Row style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Col md={4}>
                <Button block color="info" onClick={handleReset}>Cancelar</Button>
            </Col>
            <Col md={4}>
                <Button block color="info" type="submit" onClick={handleSubmit}> Confirmar alta</Button>
            </Col>
        </Row>
        </>
     );
}
 
export default ProductDetails;