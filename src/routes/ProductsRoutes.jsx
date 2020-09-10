import ProductsTable from "../views/Products/ProductsTable";
import ProductsForm from "../views/Products/ProductsForm";


var productsRoutes = [
    {
        path: '/ui-components/productos/table',
        icon: 'mdi mdi-adjust',
        component: ProductsTable,
        title: 'Ver Productos',
        text: 'Haga click para listar todos las productos del sistema.',
        buttonText: 'Ver Productos'
    },
    {
        path: '/ui-components/productos/form',
        icon: 'mdi mdi-adjust',
        component: ProductsForm,
        title: 'Agregar producto',
        text: 'Haga click para agregar un producto via formulario.',
        buttonText: 'Agregar'
    },
    {
        path: '/ui-components/productos/report',
        icon: 'mdi mdi-adjust',
        component: ProductsForm,
        title: 'Reportar un problema',
        text: 'Haga click para ingresar un problema via formulario.',
        buttonText: 'Reportar'
    },
]
export default productsRoutes;