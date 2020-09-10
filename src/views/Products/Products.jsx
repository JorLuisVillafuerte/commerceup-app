import React, { useRef } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Tabs, Tab, AppBar, Box, Typography } from '@material-ui/core';
import { Row, Col } from 'reactstrap';
import productsRoutes from '../../routes/ProductsRoutes';
import MenuAction from './MenuAction';
import NotificationAlert from 'react-notification-alert';

const Products = () => {

    const notify = useRef(null);
    /*const {msg} = useContext(CategoriasContext);
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
    },[msg]);*/
    
    return (
        <>
        <NotificationAlert ref={notify} />
        <MenuAction
            productsRoutes={productsRoutes}
        />
        <Row>
            <Col xs="12" md="12">
                <Switch>
                {productsRoutes.map((prop, key) => {
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

export default Products;