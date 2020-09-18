import ProductsTable from "../views/Products/ProductsTable";
import ProductsForm from "../views/Products/Form/ProductsForm";
import ProductItemForm from "../views/ProductItems/ProductItemForm";
import ProductList from "../views/Products/List/ProductsList";


var productsRoutes = [
    {
        path: '/admin/ui-components/productos/table',
        icon: 'mdi mdi-adjust',
        component: ProductsTable,
        title: 'Ver Productos',
        text: 'Haga click para listar todos las productos.',
        buttonText: 'Ver Productos'
    },
    {
        path: '/admin/ui-components/productos/form',
        icon: 'mdi mdi-adjust',
        component: ProductsForm,
        title: 'Agregar producto',
        text: 'Haga click para agregar un producto.',
        buttonText: 'Agregar'
    },
    {
        path: '/admin/ui-components/productos/itemform',
        icon: 'mdi mdi-adjust',
        component: ProductItemForm,
        title: 'Agregar Item',
        text: 'Haga click para agregar un item a un producto.',
        buttonText: 'Agregar Item'
    },
    {
        path: '/admin/ui-components/productos/list',
        icon: 'mdi mdi-adjust',
        component: ProductList,
        title: 'Listado detallado',
        text: 'Haga click para ver listado de productos/items.',
        buttonText: 'Ver'
    },
]
export default productsRoutes;