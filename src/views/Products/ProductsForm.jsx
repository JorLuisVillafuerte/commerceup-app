import React, { useContext, useState } from 'react';
import {  Button, Row, Col, Card, CardBody, CardTitle} from 'reactstrap';
import { Feeds } from 'components/dashboard-components';
import { Divider, Stepper, Step, StepLabel } from '@material-ui/core';
import ProductForm from './ProductForm';
import ProductItemForm from './ProductItemForm';
import ProductContext from '../../context/Products/ProductsContext';
import ProductDetails from './ProductDetails';

const steps = ['Datos del producto', 'Cantidad de items', 'Revisar y confirmar'];
function getStepContent(step, form, setForm, handleNext,handleBack, items, setItems,handleReset,handleSubmit) {
    switch (step) {
        case 0:
            return <ProductForm 
                form={form}
                setForm={setForm}
                handleNext={handleNext}
            />;
        case 1:
            return <ProductItemForm
                form={form}
                handleNext={handleNext}
                handleBack={handleBack}
                items={items}
                setItems={setItems}
            />;
        case 2:
            return <ProductDetails
                handleReset={handleReset}
                handleSubmit={handleSubmit}
            />
        default:
            return 'Paso desconocido, por favor vuelva a ingresar al formulario';
    }
}
//CREAR USE STATE DE ITEMS -> PASRLO A PRODUCTITEMFORM
//PASAR A UN COMPONENTE EL STATE DE PRODUCTO Y ITEMS Y MOSTRARLO COMO TERCERO
const ProductsForm = () => {
    const {guardarProducto} = useContext(ProductContext);
    const [form, setForm] = useState({
        productCode: '',
        articleCode: '',
        name: '',
        description: '',
        statusId: '',
        unitPrice: '',
        categoryId: '',
        cantidad: 0
    });
    const [items, setItems] = useState([]);

    const [activeStep, setActiveStep] = React.useState(0);
    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };
    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };
    const handleReset = () => {
        setItems([]);
        setActiveStep(0);
    };
    const handleSubmit = async(e) => {
        e.preventDefault();
        form.categoryId = 8;
        delete form['cantidad'];
        console.log(form);
        const producto = await guardarProducto(form);
        console.log(producto);
        if(producto === false){
            handleReset();
        }else{
            items.map(item=>{
                item.statusId = producto.statusId.internalid; 
                item.productId = producto.internalid; 
            });
            console.log(items);
            setItems([]);
            setForm({
                productCode: '',
                articleCode: '',
                name: '',
                description: '',
                statusId: '',
                unitPrice: '',
                categoryId: '',
                cantidad: 0
            });
            handleNext(); 
        }
    };
    
    return (
        <Row>
            <Col sm={6} lg={4}>
                <Feeds />
            </Col>
            <Col sm={6} lg={8}>
                <Card>
                    <CardBody>
                        <CardTitle className="text-center mb-4 mt-2" tag="h3">FORMULARIO AGREGAR PRODUCTO</CardTitle>
                        <Divider className="my-4" />
                        <Stepper activeStep={activeStep} >
                            {steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                        {activeStep === steps.length ? (
                        <Col xs="12" md="4" style={{marginLeft: 'auto', marginRight: 'auto'}}>
                            <Card body outline color="info" className="border">
                                <CardTitle>El producto fue agregado exitosamente!</CardTitle>
                                <Button onClick={handleReset} color="info">Agregar un nuevo producto</Button>
                            </Card>
                        </Col>
                        ) : (
                            <>
                                {getStepContent(activeStep, form, setForm, handleNext,handleBack, items, setItems,handleReset,handleSubmit)}
                            </>
                        )}
                    </CardBody>
                </Card>
            </Col>
        </Row>
    );
}

export default ProductsForm;