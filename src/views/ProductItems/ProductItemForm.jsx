import React, { useContext, useState } from 'react'
import SearchIcon from "@material-ui/icons/Search";
import { Button, Card,CardBody, CardTitle, Col, Form, Row, FormGroup, CardImg} from 'reactstrap';
import { TextField, IconButton, InputAdornment, Divider, InputLabel, Select, MenuItem, FormControl, ListItemText, ListItemSecondaryAction, ListItem, List} from '@material-ui/core';
import ProductsContext from '../../context/Products/ProductsContext';
import img1 from '../../assets/images/big/img1.jpg';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

let cantidadPendiente;
const ProductItemForm = () => {
    const {obtenerProductoCodigo,alertaError, agregarLoteItems} = useContext(ProductsContext);
    const [producto, setProducto] = useState(null);
    const [items, setItems] = useState([]);
    const [item, setItem] = useState({
        itemCode: 'ITM-'+Math.floor(Math.random()*9000),
        size: '',
        colour: '',
        productId: '',
        statusId: ''
    });
    const {itemCode, size, colour} = item;
    const [inputSearch, setInputSearch] = useState({
        codigo: '',
        cantidad: ''
    });
    const {codigo,cantidad} = inputSearch;
    const onchangeSearch = (e) => {
        setInputSearch({
            ...inputSearch,[e.target.name]: e.target.value
        });
    }
    const onchangeItem = (e) => {
        setItem({
            ...item,[e.target.name]: e.target.value
        });
    }
    const onsubmitSearch = async (e) => {
        e.preventDefault();
        if(codigo.trim()==='' || cantidad.trim()==='' || cantidad < 1){
            alertaError('Se deben completar todos los campos.');
            return false;
        }
        console.log(inputSearch);
        cantidadPendiente=cantidad;
        const producto1 = await obtenerProductoCodigo(codigo);
        setProducto(producto1.data);
        console.log(producto);

    }
    const addItem = (e) => {
        e.preventDefault();
        if(cantidadPendiente === 0){
            alertaError('Ya todos los items fueron cargados.');
            return false;
        }
        //VALIDAR
        if(itemCode.trim() === '' || size.trim() === '' || colour.trim() === '' ){
            alertaError('Debe completar todos los campos de los items.');
            return false;
        }
        //AGREGAR AL STATE DE ITEMS
        if(cantidadPendiente === 0){
            alertaError('Ya todos los items fueron cargados.');
        }else{
            cantidadPendiente = cantidadPendiente - 1;
            item.statusId = producto.statusId.internalid;
            item.productId = producto.internalid;
            setItems([...items, item]);
            setItem({
                itemCode: 'ITM-'+Math.floor(Math.random()*9000),
                size: '',
                colour: '',
                productId: '',
                statusId: ''
            })
        }
    }
    const deleteItem = (value) => {
        console.log(value);
        let asd = items.filter(item => item.itemCode !== value.itemCode )
        console.log(asd);
        setItems(asd);
        cantidadPendiente++;
    }
    const onsubmitItems = (e) => {
        e.preventDefault();
        if(cantidadPendiente === 0){
            console.log(items);
            agregarLoteItems(items);
            setItems([]);
        }else{
            alertaError('Aun quedan items pendientes por cargar');
            return false;
        }
    }
    return (
        <Row>
            <Col sm={6} lg={4}>
                <Card>
                    <CardBody>
                        <CardTitle>Agregar Item</CardTitle>
                        <Divider className="my-4" />
                        <Form onSubmit={onsubmitSearch}>
                            <FormGroup>
                                <TextField
                                    label="Ingresar codigo"
                                    fullWidth
                                    name="codigo"
                                    onChange={onchangeSearch}
                                    value={codigo}
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
                            <FormGroup>
                                <TextField
                                    label="Ingresar cantidad"
                                    fullWidth
                                    type="number"
                                    name="cantidad"
                                    onChange={onchangeSearch}
                                    value={cantidad}
                                />  
                            </FormGroup>
                            <Button className="mt-3" color="info" block>
                                Buscar
                            </Button>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
            {(producto === null)? (
                null
            ):(
            <Col sm={6} lg={8}>
                <Card>
                    <CardBody>
                    <CardTitle>Formulario Agregar Item</CardTitle>
                        <Divider className="my-4" />
                        <Row>
                        <Col md={3}>
                            <CardImg top width="100%" src={img1} alt="Card image cap" />
                        </Col>
                        <Col md={9}>
                            <Row>
                                <Col md={4}>
                                    <FormGroup >
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
                                    <FormGroup >
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
                                    <FormGroup >
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
                        </Col>
                        </Row>
                        <Divider className="my-4" />
                        <Form onSubmit={onsubmitItems}>
                            <Row>
                                <Col md={2} >
                                    <FormGroup className="p-2">
                                        <TextField
                                            name="cantidad"
                                            label="Items pendientes"
                                            fullWidth
                                            disabled
                                            value={cantidadPendiente}
                                            />
                                    </FormGroup>
                                </Col>
                                <Col md={2} >
                                    <FormGroup className="p-2">
                                        <TextField
                                            name="itemCode"
                                            label="Codigo"
                                            fullWidth
                                            disabled
                                            value={itemCode}
                                            onChange={onchangeItem}
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
                                                value={size}
                                                onChange={onchangeItem}
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
                                            value={colour}
                                            onChange={onchangeItem}
                                            fullWidth
                                            />
                                    </FormGroup>
                                </Col>
                                <Col md={2} >
                                    <Button block color="info" className="mt-4" onClick={()=>addItem}>Agregar item</Button>
                                </Col>
                            </Row>
                            {(items.length === 0) ? (
                                null
                            ):(
                                <Row style={{display: 'flex', justifyContent: 'center'}} className="mt-2">
                                    <Col md={6}>
                                        <List>
                                        {items.map((value) => {
                                            return (
                                                <ListItem key={value.itemCode} role={undefined} dense button >
                                                <ListItemText  id={value.itemCode} primary={`Codigo Item: ${value.itemCode}  Talle:${value.size} Color:${value.colour} `} />
                                                <ListItemSecondaryAction>
                                                <IconButton edge="end" aria-label="comments" onClick={()=>deleteItem(value)}>
                                                    <HighlightOffIcon />
                                                </IconButton>
                                                </ListItemSecondaryAction>
                                                </ListItem>
                                            );
                                        })}
                                        </List>
                                    </Col>
                                </Row>
                            )}
                            {(cantidadPendiente===0 && items.length !== 0)? (
                                <Row style={{display: 'flex', justifyContent: 'center'}} className="mt-2">
                                    <Col md={4}>
                                        <Button color="info" block type="submit">Agregar {items.length} items</Button>
                                    </Col>
                                    <Col md={4}>
                                        <Button color="info" block onClick={()=>{setInputSearch({codigo:'',cantidad: ''}); setProducto(null)}}>Cancelar</Button>
                                    </Col>
                                </Row>
                            ): (
                                null
                            )}
                        </Form>
                    </CardBody>
                </Card>
            </Col>
            )}
        </Row>
        
        );
}

export default ProductItemForm;