import { Divider, FormGroup, IconButton, InputAdornment, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { Button, Card, CardBody, CardTitle, Col, Form, Row } from 'reactstrap';
import SearchIcon from "@material-ui/icons/Search";

const OrdersForm = () => {
    const [productSearch, setProductSearch] = useState('');
    const addProduct = (e) => {
        e.preventDefault();
        console.log(productSearch);
    }

    return ( 
        <Row>
            <Col md={6}>
                <Card>
                    <CardBody>
                        <CardTitle className="text-center mb-4 mt-2" tag="h3">FORMULARIO AGREGAR PRODUCTO</CardTitle>
                        <Divider className="my-4" />
                        <Form onSubmit={addProduct}>
                            <Row form>
                                <Col md={12}>
                                    <FormGroup>
                                        <TextField
                                            label="Ingresar producto"
                                            fullWidth
                                            name="producto"
                                            value={productSearch}
                                            onChange={(e)=>{
                                                setProductSearch(e.target.value);
                                            }}
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment>
                                                        <IconButton>
                                                            <SearchIcon />
                                                        </IconButton>
                                                    </InputAdornment>
                                                )
                                            }}
                                        />
                                    </FormGroup>
                                    <Button className="mt-3" color="info" block type="submit">Buscar</Button>
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