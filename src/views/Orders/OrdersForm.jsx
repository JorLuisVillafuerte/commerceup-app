import { Divider, FormGroup, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { Card, CardBody, CardTitle, Col, Form, Row } from 'reactstrap';

const OrdersForm = () => {
    const [selectProduct, setselectProduct] = useState('');
    return ( 
        <Row>
            <Col md={6}>
                <Card>
                    <CardBody>
                        <CardTitle className="text-center mb-4 mt-2" tag="h3">FORMULARIO AGREGAR PRODUCTO</CardTitle>
                        <Divider className="my-4" />
                        <Form>
                            <Row form>
                                <Col md={12}>
                                    <FormGroup className="p-2">
                                        <TextField
                                            required
                                            name="producto"
                                            label="Producto"
                                            fullWidth
                                            value={selectProduct}
                                            
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                        </Form>  
                    </CardBody>
                </Card>
                </Col>
            <Col md={6}>
                {/*
                <List disablePadding>
                    {products.map((product) => (
                    <ListItem  key={product.name}>
                        <ListItemText primary={product.name} secondary={product.desc} />
                            <Typography variant="body2">{product.price}</Typography>
                    </ListItem>
                    ))}
                    <ListItem className={classes.listItem}>
                    <ListItemText primary="Total" />
                    <Typography variant="subtitle1">
                        $34.06
                    </Typography>
                    </ListItem>
                </List>

                */}
            </Col>
        </Row>
     );
}
 
export default OrdersForm;