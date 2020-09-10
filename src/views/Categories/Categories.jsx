import React, { useRef, useContext, useEffect } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import {Card,CardText,CardTitle,Button,Row,Col, CardBody} from 'reactstrap';
import CategoriesRoutes from '../../routes/CategoriesRoutes';
import NotificationAlert from 'react-notification-alert';
import CategoriasContext from '../../context/Categories/CategoriesContext';

const Categories = () => {
    const {msg} = useContext(CategoriasContext);
    const notify = useRef(null);
    useEffect(()=>{
        if(msg){
        notify.current.notificationAlert({
            place:'br', 
            message: (
            <div>
                {msg.msg}<br></br>
                <b>{(typeof msg.indicacion === 'undefined')? null:  'Indicacion: ' + msg.indicacion}</b>
            </div>
            ),
            type: msg.type, 
            icon:msg.icon , 
            closeButton: true, 
            autoDismiss: 10});
        }
    },[msg]);
    return ( 
        <>
        <NotificationAlert ref={notify} />
        <Row>
            <Col xs="12" md="4">
                <Card body className="text-center" >
                    <CardTitle>Ver categorias</CardTitle>
                    <CardText>Haga click para listar todas las categorias del sistema.</CardText>
                    <Link to='/ui-components/categorias/table'><Button color="info" block>Ver categorias</Button></Link>
                </Card>
            </Col>
            <Col xs="12" md="4">
                <Card body className="text-center">
                    <CardTitle>Agregar categoria</CardTitle>
                    <CardText>Haga click para agregar una categoria via formulario.</CardText>
                    <Link to='/ui-components/categorias/form'><Button color="info" block>Agregar</Button></Link>
                </Card>
            </Col>
            <Col xs="12" md="4">             
                <Card body className="text-center">
                    <CardTitle>Reportar un problema</CardTitle>
                    <CardText>Haga click para ingresar un problema via formulario.</CardText>
                    <Button color="info">Reportar</Button>
                </Card>
            </Col>
        </Row>
        <Row>
            <Col xs="12" md="12">
                <Switch>
                {CategoriesRoutes.map((prop, key) => {
                    return (
                        <Route
                        path={prop.path}
                        component={prop.component}
                        key={key}
                        />
                        );   
                    })}
                </Switch>
            </Col>
        </Row>
        </>
     );
}
 
export default Categories;