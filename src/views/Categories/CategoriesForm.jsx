import React, { useState, useRef, useContext } from 'react'
import { TextField, MenuItem, InputLabel, Select, FormControl, InputAdornment, Divider } from '@material-ui/core';
import img5 from '../../assets/images/big/img4.jpg';
import { Form, FormGroup, Button, Row, Col, Card, CardBody, CardTitle, CardGroup, CardImg} from 'reactstrap';
import CategoriesContext from '../../context/Categories/CategoriesContext';
import Swal from 'sweetalert2'

const CategoriesForm = (props) => {
    const {alertaError,guardarCategoria, error} = useContext(CategoriesContext);
    const notify = useRef(null);
    const [form, setForm] = useState({
        categoryCode: '',
        name: '',
        description: '',
        targetType: '',
        seasonType: '',
        statusId: 0
    });
    const { categoryCode, name, description, targetType, seasonType, statusId } = form;

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if(isNaN(categoryCode)){
            alertaError('El codigo debe ser numerico.');
            return;
        }
        if(name.trim()==='' || targetType.trim()==='' ||seasonType.trim()==='' ){
            alertaError('Debe completar los campos obligatorios.');
            return;
        }
        Swal.fire({
            title: 'Esta seguro de agregar una categoria?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#4c5782',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirmar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                guardarCategoria(form);
                setForm({
                    categoryCode: '',
                    name: '',
                    description: '',
                    targetType: '',
                    seasonType: '',
                    statusId: null
                });
            }
        });

    };
    return (
        <CardGroup>
            <Card>
                <CardBody style={{ padding: 16 }}>
                    <CardTitle className="text-center mb-4 mt-2" tag="h3">FORMULARIO AGREGAR CATEGORIA</CardTitle>
                    <Divider className="my-4" />
                    <form onSubmit={handleSubmit}>
                        <Form >
                        <Row form>
                            <Col md={6} >
                                <FormGroup className="p-2">
                                    <TextField
                                        required
                                        name="categoryCode"
                                        label="Codigo"
                                        value={categoryCode}
                                        onChange={handleChange}
                                        fullWidth
                                        InputProps={{
                                        startAdornment: <InputAdornment position="start">CTG-</InputAdornment>,
                                        }}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup className="p-2">
                                    <TextField
                                        required
                                        id="name"
                                        name="name"
                                        label="Nombre de categoria"
                                        fullWidth
                                        value={name}
                                        onChange={handleChange}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup className="p-2">
                            <TextField
                                id="description"
                                name="description"
                                label="Descripcion"
                                multiline
                                rows={4}
                                value={description}
                                onChange={handleChange}
                                fullWidth
                            />
                        </FormGroup>
                        <Row form>
                            <Col md={6}>
                                <FormGroup className="p-2">
                                    <FormControl fullWidth >
                                        <InputLabel id="target">Target</InputLabel>
                                        <Select
                                            labelId="targetType"
                                            id="targetType"
                                            name="targetType"
                                            value={targetType}
                                            onChange={handleChange}
                                            label="Target"
                                            fullWidth
                                            required
                                        >
                                            <MenuItem value="">
                                                <em>Seleccione un target</em>
                                            </MenuItem>
                                            <MenuItem value={'niños'}>Niños</MenuItem>
                                            <MenuItem value={'niñas'}>Niñas</MenuItem>
                                            <MenuItem value={'bebe'}>Bebe</MenuItem>
                                            <MenuItem value={'beba'}>Beba</MenuItem>
                                            <MenuItem value={'hombre'}>Hombre</MenuItem>
                                            <MenuItem value={'mujer'}>Mujer</MenuItem>
                                        </Select>
                                    </FormControl>
                                </FormGroup>        
                            </Col>
                            <Col md={6}>
                                <FormGroup className="p-2">
                                <FormControl fullWidth>
                                    <InputLabel id="statusId">Estado</InputLabel>
                                    <Select
                                        labelId="statusId"
                                        id="statusId"
                                        name="statusId"
                                        value={statusId}
                                        onChange={handleChange}
                                        label="Estado"
                                        fullWidth
                                        required
                                    >
                                        <MenuItem value={1}>Disponible</MenuItem>
                                        <MenuItem value={2}>No Disponible</MenuItem>
                                    </Select>
                                </FormControl>
                                </FormGroup>                
                            </Col>
                        </Row>
                        <FormGroup className="p-2">
                            <FormControl fullWidth>
                                <InputLabel id="seasonType">Temporada</InputLabel>
                                <Select
                                    labelId="seasonType"
                                    id="seasonType"
                                    name="seasonType"
                                    value={seasonType}
                                    onChange={handleChange}
                                    label="Temporada"
                                    fullWidth
                                    required
                                >
                                    <MenuItem value="">
                                        <em>Seleccione una temporada</em>
                                    </MenuItem>
                                    <MenuItem value={'primavera'}>Primavera</MenuItem>
                                    <MenuItem value={'verano'}>Verano</MenuItem>
                                    <MenuItem value={'otoño'}>Otoño</MenuItem>
                                    <MenuItem value={'invierno'}>Invierno</MenuItem>
                                </Select>
                            </FormControl>
                        </FormGroup>
                        <Button size="lg" className="mt-8" color="info" block type="submit">Agregar</Button>
                    </Form>
                    </form>
                </CardBody>
            </Card>
            <Card>
                <CardImg top width="100%" height="100%" src={img5} alt="Card image cap" />
            </Card>
        </CardGroup>
    );
}

export default CategoriesForm;