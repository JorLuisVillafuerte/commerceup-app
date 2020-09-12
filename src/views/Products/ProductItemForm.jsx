import React, { useContext, useState } from 'react'
import { Form, FormGroup, Button, Row, Col } from 'reactstrap';
import { TextField, MenuItem, InputLabel, Select, FormControl, InputAdornment, Input } from '@material-ui/core';
import ProductContext from '../../context/Products/ProductsContext';



const ProductItemForm = (props) => {
    const {alertaError} = useContext(ProductContext);
    const { form, handleBack, handleNext, items, setItems } = props;
    const [cantidad, setCantidad] = useState(form.cantidad);
    const [item, setItem] = useState({
        itemCode: 'ITM-'+Math.floor(Math.random()*4000),
        size: '',
        colour: '',
        statusId: 0,
        productId: 0,
    });
    const { itemCode, size, colour } = item;
    
    const handleChange = (e) => {
        setItem({
            ...item,
            [e.target.name]: e.target.value
        });
    };
    const handleBackItem = () => {
        setItems([]);
        handleBack();
    }
    const addItem = (e) => {
        if(cantidad === 0){
            alertaError('Ya todos los items fueron cargados.');
            return false;
        }
        //VALIDAR
        if(itemCode.trim() === '' || size.trim() === '' || colour.trim() === '' ){
            alertaError('Debe completar todos los campos de los items.');
            return false;
        }
        //AGREGAR AL STATE DE ITEMS
        if(cantidad === 0){
            alertaError('Ya todos los items fueron cargados.');
        }else{
            setCantidad(cantidad - 1);
            setItems([...items, item]);
            setItem({
                itemCode: 'ITM-'+Math.floor(Math.random()*10)+1,
                size: '',
                colour: ''
            })
        }
    }
    const handleSubmitItem = (e) => {
        e.preventDefault();
        if(cantidad !== 0){
            alertaError('Debe cargar todos los items que se ingresaron. Restantes: '+cantidad);
        }else{
            handleNext();
        }
    } 
    return (

        <Form onSubmit={handleSubmitItem}>
             <FormGroup className="p-2">
                <TextField
                    name="itemPendiente"
                    label="Cantidad de Items pendientes"
                    fullWidth
                    disabled
                    value={cantidad}
                />
            </FormGroup>
            <Row form className="mt-4">
                <Col md={3} >
                    <FormGroup className="p-2">
                        <TextField
                            name="itemCode"
                            label="Codigo"
                            fullWidth
                            disabled
                            value={itemCode}
                        />
                    </FormGroup>
                </Col>
                <Col md={3} >
                    <FormGroup className="p-2">
                        <FormControl fullWidth>
                            <InputLabel id="size">Talle</InputLabel>
                            <Select
                                labelId="size"
                                id="size"
                                name="size"
                                label="Talle"
                                fullWidth
                                onChange={handleChange}
                                value={size}
                            >
                                <MenuItem value={'small'}>S</MenuItem>
                                <MenuItem value={'medium'}>M</MenuItem>
                                <MenuItem value={'large'}>L</MenuItem>
                                <MenuItem value={'extralarge'}>XL</MenuItem>
                            </Select>
                        </FormControl>
                    </FormGroup>
                </Col>
                <Col md={3} >
                    <FormGroup className="p-2">
                        <TextField
                            id="colour"
                            name="colour"
                            label="Color"
                            fullWidth
                            onChange={handleChange}
                            value={colour}
                        />
                    </FormGroup>
                </Col>
                <Col md={3} >
                    <FormGroup className="pt-3">
                        <Button color="info" onClick={addItem}>Agregar item</Button>
                    </FormGroup>
                </Col>
            </Row>
            <Row style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Col md={4}>
                    <Button block color="info" onClick={handleBackItem}>Atras</Button>
                </Col>
                <Col md={4}>
                    <Button block color="info" type="submit">Siguiente</Button>
                </Col>
            </Row>
        </Form>
    );
}

export default ProductItemForm;