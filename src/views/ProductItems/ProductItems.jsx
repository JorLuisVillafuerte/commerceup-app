import React, { useRef } from 'react';
import MenuAction from '../../components/MenuAction';
import productItemsRoutes from '../../routes/ProductItemsRoutes';
import { Switch, Route } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import NotificationAlert from 'react-notification-alert';

const ProductItems = () => {
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
            routesMenu={productItemsRoutes}
        />
        <NotificationAlert ref={notify} />
        <Row>
            <Col xs="12" md="12">
                <Switch>
                {productItemsRoutes.map((prop, key) => {
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
 
export default ProductItems;