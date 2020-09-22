const { default: OrdersForm } = require("../views/Orders/OrdersForm");
const { default: OrdersTable } = require("../views/Orders/OrdersTable");

var OrdersRoutes = [
    {
        path: '/admin/ui-components/ventas/table',
        component: OrdersTable,
        title: 'Ver Ordenes',
        text: 'Haga click para listar las ordenes.',
        buttonText: 'Ver Ordenes'
    },
    {
        path: '/admin/ui-components/ventas/form',
        component: OrdersForm,
        title: 'Agregar Orden',
        text: 'Haga click para agregar una orden.',
        buttonText: 'Agregar Orden'
    },
]
export default OrdersRoutes;