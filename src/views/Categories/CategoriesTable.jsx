import React, { useState, useEffect, useContext } from 'react';
import { categoryColumn } from '../../assets/columns/TableColumns';
import AxiosService from 'config/AxiosService';
import TableAction from '../../components/Tables/TableAction';
import CategoriasContext from '../../context/Categories/CategoriesContext';
import {  Row, Col,Button } from 'reactstrap';
import {  LinearProgress, Dialog, DialogTitle, DialogContent, TextField, DialogActions } from '@material-ui/core';

const CategoriesTable = () => {

    const { eliminarCategoria, editarCategoria, guardarCategoria } = useContext(CategoriasContext);
    const [data, setData] = useState([]);
    useEffect(() => {
        console.log('use effect triger');
        AxiosService.get('categorias/').then(res => {
            setData(res.data);
            localStorage.setItem('categorias', res.data);
        })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const handleRowUpdate = async (newData, oldData, resolve, reject) => {
        const result = await editarCategoria(newData);
        if (result) {
            const dataUpdate = [...data];
            const index = oldData.tableData.id;
            dataUpdate[index] = newData;
            setData([...dataUpdate]);
            setTimeout(() => {
                resolve()
            }, 5000);
        } else {
            reject();
        }
    }

    const handleRowDelete = async (oldData, resolve, reject) => {
        const result = await eliminarCategoria(oldData.internalid);
        if (result) {
            const dataDelete = [...data];
            const index = oldData.tableData.id;
            dataDelete.splice(index, 1);
            setData([...dataDelete]);
            setTimeout(() => {
                resolve()
            }, 5000);
        } else {
            reject();
        }
    }
    const [openPopup, setOpenPopup] = useState(false);
    let [details, setDetails] = useState({});
    const handleDetails = (event, rowData) => {
        setOpenPopup(true);
        details = rowData;
        console.log(details);
        console.log(details.name);
    }
    const handleClose = () => {
        setOpenPopup(false);
    };
    if(data.length === 0) {
        return (
            <LinearProgress color="primary" />
        );
    }
    return (
        <>
            <TableAction
                columns={categoryColumn}
                data={data}
                handleRowUpdate={handleRowUpdate}
                handleRowDelete={handleRowDelete}
                handleDetails={handleDetails}
            />
            <Dialog fullWidth={'sm'} maxWidth={'sm'} open={openPopup} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Detalles de categoria</DialogTitle>
                <DialogContent>
                    <Row>
                        <Col md={6}>
                            <TextField
                                id="name"
                                name="categoryCode"
                                label="Codigo"
                                InputProps={{
                                    readOnly: true,
                                }}
                                variant="filled"
                                fullWidth
                                margin="dense"
                            />
                        </Col>
                        <Col md={6}>
                            <TextField
                                id="name"
                                name="name"
                                label="Nombre de categoria"
                                InputProps={{
                                    readOnly: true,
                                }}
                                variant="filled"
                                margin="dense"
                                fullWidth
                                defaultValue="Hello World"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <TextField
                                id="description"
                                name="description"
                                label="Descripcion"
                                multiline
                                rows={5}
                                InputProps={{
                                    readOnly: true,
                                }}
                                variant="filled"
                                margin="dense"
                                fullWidth
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <TextField
                                id="date"
                                label="Birthday"
                                margin="dense"
                                type="date"
                                defaultValue="2017-05-24"
                                InputLabelProps={{
                                shrink: true,
                                }}
                                variant="filled"
                                margin="dense"
                                fullWidth
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                        </Col>
                        <Col md={6}>
                            <TextField
                                id="date"
                                label="Birthday"
                                margin="dense"
                                type="date"
                                defaultValue="2017-05-24"
                                InputLabelProps={{
                                shrink: true,
                                }}
                                variant="filled"
                                margin="dense"
                                fullWidth
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <TextField
                                id="name"
                                name="categoryCode"
                                label="Codigo"
                                InputProps={{
                                    readOnly: true,
                                }}
                                variant="filled"
                                fullWidth
                                margin="dense"
                                defaultValue="Hello World"
                            />
                        </Col>
                        <Col md={4}>
                            <TextField
                                id="name"
                                name="name"
                                label="Nombre de categoria"
                                InputProps={{
                                    readOnly: true,
                                }}
                                variant="filled"
                                margin="dense"
                                fullWidth
                                defaultValue="Hello World"
                            />
                        </Col>
                        <Col md={4}>
                            <TextField
                                id="name"
                                name="name"
                                label="Nombre de categoria"
                                InputProps={{
                                    readOnly: true,
                                }}
                                variant="filled"
                                margin="dense"
                                fullWidth
                                defaultValue="Hello World"
                            />
                        </Col>
                    </Row>                       
                </DialogContent>
                <DialogActions style={{marginLeft: 'auto', marginRight: 'auto'}}>
                    <Button className="mt-8" color="info" style={{width: 250 }} onClick={handleClose}>Cerrar</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default CategoriesTable;