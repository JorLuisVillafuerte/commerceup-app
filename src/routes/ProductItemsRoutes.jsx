import ProductItemsTable from "../views/ProductItems/ProductItemsTable";

var productItemsRoutes = [
    {
        path: '/admin/ui-components/stock/table',
        icon: 'mdi mdi-adjust',
        component: ProductItemsTable,
        title: 'Control Stock',
        text: 'Haga click para ver control de stock.',
        buttonText: 'Ver Stock'
    },
]
export default productItemsRoutes;