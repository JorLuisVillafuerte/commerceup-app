import ProductsTable from "../views/Products/ProductsTable";
import ProductsForm from "../views/Products/ProductsForm";


var productsRoutes = [
    {
        path: '/ui-components/productos/table',
        icon: 'mdi mdi-adjust',
        component: ProductsTable,
        title: 'Ver Productos',
        text: 'Haga click para listar todos las productos.',
        buttonText: 'Ver Productos'
    },
    {
        path: '/ui-components/productos/form',
        icon: 'mdi mdi-adjust',
        component: ProductsForm,
        title: 'Agregar producto',
        text: 'Haga click para agregar un producto.',
        buttonText: 'Agregar'
    },
    {
        path: '/ui-components/productos/report',
        icon: 'mdi mdi-adjust',
        component: ProductsForm,
        title: 'Agregar Item',
        text: 'Haga click para agregar un item a un producto.',
        buttonText: 'Agregar Item'
    },
    {
        path: '/ui-components/productos/report',
        icon: 'mdi mdi-adjust',
        component: ProductsForm,
        title: 'Listado detallado',
        text: 'Haga click para ver listado de productos/items.',
        buttonText: 'Ver'
    },
]
export default productsRoutes;