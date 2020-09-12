import React from 'react';
import { Button, Card, CardTitle, Col, Row } from 'reactstrap';

const ProductDetails = (props) => {
    const {handleReset,handleSubmit } = props;
    return ( 
        <div > 
            <Col xs="12" md="4" style={{marginLeft: 'auto', marginRight: 'auto'}}>           
                    <Card body outline color="info" className="border">
                        <CardTitle>PROXIMAMENTE INFO PREVIO AL ALTA</CardTitle>
                    </Card>
            </Col>
            <Row style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Col md={4}>
                    <Button block color="info" onClick={handleReset}>Cancelar</Button>
                </Col>
                <Col md={4}>
                    <Button block color="info" type="submit" onClick={handleSubmit}> Confirmar alta</Button>
                </Col>
            </Row>
        </div>
     );
}
 
export default ProductDetails;