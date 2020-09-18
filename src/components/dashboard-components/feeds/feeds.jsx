import React from "react";
import {
    Card,
    CardBody,
    CardTitle,
} from 'reactstrap';

const Feeds = () => {
    return (
        <Card>
            <CardBody>
                <CardTitle>Feeds</CardTitle>
                <div className="feed-widget">
                    <ul className="list-style-none feed-body m-0 pb-3">
                        <li className="feed-item">
                            <div className="feed-icon bg-info"><i className="far fa-bell"></i></div> Notificaciones de productos: <span className="ml-auto font-12 text-muted">Justo Ahora</span>
                        </li>
                        <li className="feed-item">
                            <div className="feed-icon bg-success"><i className="ti-server"></i></div>Cantidad productos registrados: <span className="ml-auto font-12 text-muted">Hace una hora</span>
                        </li>
                        <li className="feed-item">
                            <div className="feed-icon bg-warning"><i className="ti-shopping-cart"></i></div>Productos en ordenes: <span className="ml-auto font-12 text-muted">16 Sep.</span>
                        </li>
                        <li className="feed-item">
                            <div className="feed-icon bg-danger"><i className="ti-user"></i></div> Usuario actual: <span className="ml-auto font-12 text-muted">16 Sep.</span>
                        </li>
                    </ul>
                </div>
            </CardBody>
        </Card>
    );
}

export default Feeds;
