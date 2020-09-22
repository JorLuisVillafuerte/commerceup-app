import React, { useContext, useState } from 'react';
import { Form, FormGroup, Button, Row, Col } from 'reactstrap';
import { TextField, MenuItem, InputLabel, Select, FormControl, InputAdornment, Input } from '@material-ui/core';
import ProductContext from '../../../context/Products/ProductsContext';
import CategoriesContext from '../../../context/Categories/CategoriesContext';
const ProductForm = (props) => {
    const { alertaError } = useContext(ProductContext);
    const { categorias } = useContext(CategoriesContext);
    const { form, setForm, handleNext } = props;
    const { productCode, name, articleCode, description, unitPrice, categoryId, statusId, cantidad } = form;
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        //VALIDACIONES
        if(isNaN(productCode) || productCode <= 0){
            alertaError('El codigo debe ser numerico.');
            return;
        }
        if(isNaN(unitPrice)){
            alertaError('El precio debe ser numerico.');
            return;
        }
        if(cantidad <= 0){
            alertaError('La cantidad de items del producto debe ser mayor a 0 (cero).');
            return;
        }
        if(name.trim()==='' || articleCode.trim()==='' || unitPrice <= 0 || statusId === ''){
            alertaError('Debe completar los campos obligatorios.');
            return;
        }
        console.log(form);
        //SI TODO OK PASA NEXT
        handleNext();
    }
    return (
            <Form onSubmit={handleSubmit}>
                <Row form className="mt-4">
                    <Col md={4} >
                        <FormGroup className="p-2">
                            <TextField
                                required
                                name="productCode"
                                label="Codigo"
                                fullWidth
                                onChange={handleChange}
                                value={productCode}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">PRD-</InputAdornment>,
                                }}
                            />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup className="p-2">
                            <TextField
                                required
                                id="articleCode"
                                name="articleCode"
                                label="Articulo"
                                fullWidth
                                onChange={handleChange}
                                value={articleCode}
                            />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup className="p-2">
                            <TextField
                                required
                                id="name"
                                name="name"
                                label="Nombre de producto"
                                fullWidth
                                onChange={handleChange}
                                value={name}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col md={6} >
                        <FormGroup className="p-2">
                            <TextField
                                id="description"
                                name="description"
                                label="Descripcion"
                                fullWidth
                                onChange={handleChange}
                                value={description}
                            />
                        </FormGroup>
                    </Col>
                    <Col md={6} >
                        <FormGroup className="p-2">
                            <FormControl fullWidth>
                                <InputLabel id="statusId">Estado</InputLabel>
                                <Select
                                    required
                                    labelId="statusId"
                                    id="statusId"
                                    name="statusId"
                                    label="Estado"
                                    fullWidth
                                    onChange={handleChange}
                                    value={statusId}
                                >
                                    <MenuItem value="">
                                        <em>Seleccione un estado</em>
                                    </MenuItem>
                                    <MenuItem value={1}>Disponible</MenuItem>
                                    <MenuItem value={2}>No Disponible</MenuItem>
                                </Select>
                            </FormControl>
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col md={6} >
                        <FormGroup className="p-2">
                            <TextField
                                type="number"
                                required
                                name="cantidad"
                                label="Cantidad de items"
                                fullWidth
                                value={cantidad}
                                onChange={handleChange}
                            />
                        </FormGroup>
                    </Col>
                    <Col md={6} >
                        <FormGroup className="p-2">
                            <FormControl fullWidth>
                                <InputLabel id="categoryId">Categoria</InputLabel>
                                <Select
                                    labelId="categoryId"
                                    id="categoryId"
                                    name="categoryId"
                                    label="Categoria"
                                    fullWidth
                                    required
                                    onChange={handleChange}
                                    value={categoryId}
                                >
                                    {categorias.map(cat => {
                                       return <MenuItem value={cat.internalid}>{cat.name}</MenuItem>
                                    })}
                                </Select>
                            </FormControl>
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup className="p-2">
                    <InputLabel className="p-2" htmlFor="unitPrice">Precio</InputLabel>
                    <Input
                        required
                        id="unitPrice"
                        name="unitPrice"
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        fullWidth
                        onChange={handleChange}
                        value={unitPrice}
                    />
                </FormGroup>
                <Row style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Col md={4}>
                        <Button block color="info" >Siguiente</Button>
                    </Col>
                </Row>
            </Form>
    );
}

export default ProductForm;