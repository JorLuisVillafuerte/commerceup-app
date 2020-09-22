import React, { useRef } from 'react'
import MenuAction from '../../components/MenuAction';
import OrdersRoutes from '../../routes/OrdersRoutes';
import NotificationAlert from 'react-notification-alert';
import { Col, Row } from 'reactstrap';
import { Route, Switch } from 'react-router-dom';

const Orders = () => {

    const notify = useRef(null);
    
    /*const {msg} = useContext(ProductsContext);
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
        <MenuAction
            routesMenu={OrdersRoutes}
        />
        <NotificationAlert ref={notify} />
        <Row>
            <Col xs="12" md="12">
                <Switch>
                {OrdersRoutes.map((prop, key) => {
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
 
export default Orders;